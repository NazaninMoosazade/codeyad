import Rules from "./Rules";

const validator = (value, validations) => {
  let isValid = true;

  for (const rule of validations) {
    if (rule.value === Rules.requiredValue) {
      isValid = isValid && value.trim().length > 0;
    }
    if (rule.value === Rules.minValue) {
      isValid = isValid && value.trim().length >= rule.min;
    }
    if (rule.value === Rules.maxValue) {
      isValid = isValid && value.trim().length <= rule.max;
    }
    if (rule.value === Rules.emailValue) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      isValid = isValid && emailRegex.test(value);
    }
  }

  return isValid;
};

export default validator;


// import Rules from "./Rules";

// const validator = (value, validations) => {
//   let isValid = true;

//   for (const rule of validations) {
//     if (rule.value === Rules.requiredValue) {
//       isValid = isValid && value.trim().length > 0;
//     }
//     if (rule.value === Rules.minValue) {
//       isValid = isValid && value.trim().length >= rule.min;
//     }
//     if (rule.value === Rules.maxValue) {
//       isValid = isValid && value.trim().length <= rule.max;
//     }
//     if (rule.value === Rules.emailValue) {
//       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       isValid = isValid && emailRegex.test(value);
//     }
//   }

//   return isValid;
// };

// export default validator;
