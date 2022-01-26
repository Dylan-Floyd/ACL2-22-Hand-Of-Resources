const { insert, getAll, getById, updateById, deleteById } = require('../utils/abstractCrud.js');

module.exports = class Plane {
  id;
  model;
  cost;

  constructor(row) {
    this.id = row.id;
    this.model = row.model;
    this.cost = row.cost;
  }

  static async insert(dog) {
    const rows = await insert('dogs', dog);

    return new Plane(rows);
  }

  static async getAll() {
    const rows = await getAll('dogs');

    const dogs = rows.map(row => new Plane(row));
    return dogs;
  }

  static async getById(id) {
    const row = await getById('dogs', id);

    if(!row) return null;
    return new Plane(row);
  }
  
  static async updateById(id, dog) {
    const row = await updateById('dogs', id, dog);

    return new Plane(row);
  }

  static async deleteById(id) {
    const row = await deleteById('dogs', id);
    return new Plane(row);
  }
};
