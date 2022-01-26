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

  static async getAll() {
    const { rows } = await pool.query(`
      SELECT * FROM dogs;
    `);

    const dogs = rows.map(row => new Dog(row));
    return dogs;
  }

  static async getById(id) {
    const { rows } = await pool.query(`
      SELECT * FROM dogs
      WHERE id=$1;
    `, [id]);

    if(!rows[0]) return null;
    return new Dog(rows[0]);
  }
};
