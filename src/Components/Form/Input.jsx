import React, { useReducer, useEffect } from "react";
import validator from "../../validators/Validator";

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.value,
        isValid: validator(action.value, action.validations),
      };
    default:
      return state;
  }
};

export default function Input(props) {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: "",
    isValid: false,
  });

  const { id, onInputHandler } = props;
  const { value, isValid } = inputState;

  useEffect(() => {
    onInputHandler(id, value, isValid);
  }, [id, value, isValid, onInputHandler]);

  const onChangeHandler = (event) => {
    dispatch({
      type: "CHANGE",
      value: event.target.value,
      validations: props.validations,
    });
  };

  const element =
    props.element === "textarea" ? (
      <textarea
        id={id}
        placeholder={props.placeholder}
        className={`${props.className} ${
          isValid ? "border-green-500 border-2" : "border-red-500 border-2"
        }`}
        value={value}
        onChange={onChangeHandler}
      />
    ) : (
      <input
        id={id}
        type={props.type}
        placeholder={props.placeholder}
        className={`${props.className} ${
          isValid ? "border-green-500 border-2" : "border-red-500 border-2"
        }`}
        value={value}
        onChange={onChangeHandler}
      />
    );

  return <div>{element}</div>;
}



// import React, { useEffect, useReducer } from "react";
// import validator from "../../validators/Validator";


// const inputReducer = (state, action) => {
//   switch (action.type) {
//     case "CHANGE": {
//       return {
//         ...state,
//         value: action.value,
//         isValid: validator(action.value, action.validations),
//       };
//     }
//     default: {
//       return state;
//     }
//   }
// };

// export default function Input(props) {
 
//   const [mainInput, dispatch] = useReducer(inputReducer, {
//     value: "",
//     isValid: false,
//   });

//   const { value, isValid } = mainInput;
//   const {id , onInputHandler} = props;

//   useEffect(() => {
//     onInputHandler(id, value, isValid);
//   }, [value]);

//   const onChangeHandler = (event) => {
//     dispatch({
//       type: "CHANGE",
//       value: event.target.value,
//       validations: props.validations,
//       isValid: true,
//     });
//   };

//   const element =
//     props.element === "input" ? (
//       <input
//         type={props.type}
//         placeholder={props.placeholder}
//         className={`${props.className} ${
//           mainInput.isValid
//             ? "!border-4  !border-green-500"
//             : "!border-4 !border-red-500"
//         }`}
//         value={mainInput.value}
//         onChange={onChangeHandler}
//       />
//     ) : (
//       <textarea
//         placeholder={props.placeholder}
//         className={`${props.className} ${
//           mainInput.isValid
//             ? "!border-4 !border-green-500"
//             : "!border-4 !border-red-500"
//         }`}
//         onChange={onChangeHandler}
//         value={mainInput.value}
//       />
//     );

//   return <div>{element}</div>;
// }


