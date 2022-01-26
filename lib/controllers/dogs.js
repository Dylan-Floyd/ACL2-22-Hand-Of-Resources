const { Router } = require('express');
const Dog = require('../models/Dog.js');
const { validateDog } = require('../utils/validation.js');

module.exports = Router()
  .post('/dogs', async (req, res, next) => {
    try {
      const dog = req.body;
      validateDog(dog);
      const result = await Dog.insert(dog);
      res.json(result);
    } catch(error) {
      next(error);
    }
  });
