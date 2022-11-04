import "./InputValidation.css";

function InputValidation({
  inputStyle,
  label,
  errorText,
  onInputEvent,
  ...props
}) {
  function handleInput(e) {
    onInputEvent(e);
  }
  return (
    <div className={`input__section input__section_style_${inputStyle}`}>
      <label className={`input__label input__label_style_${inputStyle}`}>
        {label}
        <input
          id={props.id}
          name={props.id}
          className={`input input_style_${inputStyle} ${
            !!errorText && "input_error-value"
          }`}
          {...props}
          onInput={handleInput}
        ></input>
      </label>
    </div>
  );
}

export default InputValidation;
