import Rules from "./Rules";

const validator = (value, validations) => {
  let validationResults = [];

  for (const validator of validations) {
    if (validator.value === Rules.requiredValue) {
      value.trim().length === 0 && validationResults.push(false);
    }
    if (validator.value === Rules.minValue) {
      value.trim().length < validator.min && validationResults.push(false);
    }
    if (validator.value === Rules.maxValue) {
      value.trim().length > validator.max && validationResults.push(false);
    }
    if (validator.value === Rules.emailValue) {
      !regex.testEmail(value) && validationResults.push(false);
    }
  }

  if (validationResults.length) {
    return false;
  } else {
    return true;
  }
};

export default validator;
