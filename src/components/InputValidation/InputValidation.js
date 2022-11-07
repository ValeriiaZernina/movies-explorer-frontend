import "./InputValidation.css";

function InputValidation({
  inputStyle,
  authStyle,
  label,
  errorText,
  onInputEvent,
  ...props
}) {
  function handleInput(event) {
    onInputEvent(event);
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
          onInput={handleInput}
          {...props}
        ></input>
      </label>

      <span
        id={`${props.id}-error`}
        className={`input__error input__error_style_${authStyle} ${
          !!errorText && "input__error_visible"
        }`}
      >
        {errorText}
      </span>
    </div>
  );
}

export default InputValidation;
