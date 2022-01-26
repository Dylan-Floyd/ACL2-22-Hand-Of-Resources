function isNullish(val) {
  return (typeof val === 'undefined' || val === null);
}

function areTypesMismatched(val1, val2) {
  return (typeof val1 !== typeof val2);
}

const dogStructure = {
  name: 'a',
  is_good_boy: true
};

const catStructure = {
  name: 'a',
  weight: 1.2
};

function validate(structure, instance) {
  Object.entries(structure).forEach(entry => {
    const [key, val] = entry;
    if(isNullish(instance[key]) || areTypesMismatched(val, instance[key]))
      throw new Error(`${key} must be specified and of type ${typeof val}`);
  });
}

function validateDog(dog) {
  validate(dogStructure, dog);
}

function validateCat(cat) {
  validate(catStructure, cat);
}

module.exports = {
  validateDog,
  validateCat
};
