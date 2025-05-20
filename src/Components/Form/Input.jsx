import React, { useReducer } from "react";

export default function Input(props) {

  

  const inputReducer = (state, action) => {
    switch (action.type) {
      case "CHANGE":
        return {
          ...state,
          value: action.value,
          isValid: action.value.trim().length > 0,
        };
      default:
        return state;
    }
  };

  const [mainInput, dispatch] = useReducer(inputReducer, {
    value: "",
    isValid: false,
  });

  const onChangeHandler = (event) => {
    dispatch({
      type: "CHANGE",
      value: event.target.value,
    });
  };

  const inputBorderColor = mainInput.isValid ? "border-green-600" : "border-red-500";

  const inputClass = `
    ${props.className || ""}
    border-2
    ${inputBorderColor}
  `;

  const element =
    props.element === "input" ? (
      <input
        value={mainInput.value}
        type={props.type || "text"}
        placeholder={props.placeholder}
        className={inputClass}
        onChange={onChangeHandler}
      />
    ) : (
      <textarea
        value={mainInput.value}
        placeholder={props.placeholder}
        className={inputClass}
        onChange={onChangeHandler}
      />
    );

  return <div>{element}</div>;
}
