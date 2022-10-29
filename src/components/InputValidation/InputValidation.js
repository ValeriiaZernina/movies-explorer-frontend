import "./InputValidation.css";
import { useState } from "react";

function InputValidation({ inputStyle, label, ...props }) {
  const [errorMesage, setErrorMessage] = useState("");
  function handleInput(e) {
    setErrorMessage(e.target.validationMessage);
  }
  return (
    <div className={`input__section input__section_style_${inputStyle}`}>
      <label className={`input__label input__label_style_${inputStyle}`}>
        {label}
        <input
          id={props.id}
          name={props.id}
          className={`input input_style_${inputStyle}`}
          {...props}
          onInput={handleInput}
        ></input>
      </label>
    </div>
  );
}

export default InputValidation;
