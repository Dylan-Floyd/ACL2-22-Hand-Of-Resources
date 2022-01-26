const pool = require('../utils/pool.js');

module.exports = class Dog {
  id;
  name;
  is_good_boy;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.is_good_boy = row.is_good_boy;
  }

  static async insert({ name, is_good_boy }) {
    const { rows } = await pool.query(`
      INSERT INTO dogs (name, is_good_boy)
      VALUES ($1, $2)
      RETURNING *;
    `, [name, is_good_boy]);

    return new Dog(rows[0]);
  }

};
