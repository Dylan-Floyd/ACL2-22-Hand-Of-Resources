const pool = require('../utils/pool.js');

module.exports = class Cat {
  id;
  name;
  weight;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.weight = row.weight;
  }

  static async insert({ name, weight }) {
    const { rows } = await pool.query(`
      INSERT INTO cats (name, weight)
      VALUES ($1, $2)
      RETURNING *;
    `, [name, weight]);

    return new Cat(rows[0]);
  }

  static async getAll() {
    const { rows } = await pool.query(`
      SELECT * FROM cats;
    `);

    const cats = rows.map(row => new Cat(row));
    return cats;
  }

  static async getById(id) {
    const { rows } = await pool.query(`
      SELECT * FROM cats
      WHERE id=$1;
    `, [id]);

    if(!rows[0]) return null;
    return new Cat(rows[0]);
  }
  
  static async updateById(id, { name, weight }) {
    const { rows } = await pool.query(`
      UPDATE cats
      SET name=$2, weight=$3
      WHERE id=$1
      RETURNING *;
    `, [id, name, weight]);

    return new Cat(rows[0]);
  }

  static async deleteById(id) {
    const { rows } = await pool.query(`
      DELETE FROM cats
      WHERE id=$1
      RETURNING *;
    `, [id]);

    return new Cat(rows[0]);
  }
}