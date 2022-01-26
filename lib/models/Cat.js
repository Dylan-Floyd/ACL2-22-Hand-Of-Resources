module.exports = class Cat {
  id;
  name;
  weight;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.weight = row.weight;
  }

  static async insert(cat) {
    
  }
}