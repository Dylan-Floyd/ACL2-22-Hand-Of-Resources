function isNullish(val) {
  return (typeof val === 'undefined' || val === null);
}

function validateDog(dog) {
  if(isNullish(dog?.name) || isNullish(dog?.is_good_boy))
    throw new Error('the properties name and is_good_boy must be specified');
}

module.exports = {
  validateDog
};
