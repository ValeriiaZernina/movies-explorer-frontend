import "./Checkbox.css";

function Checkbox({ onChange, name, className, value }) {
  function handleChange(e) {
    onChange(e.target.checked);
  }

  return (
    <label className={`switch__label ${className}`}>
      <input
        type="checkbox"
        defaultChecked={value}
        onChange={handleChange}
      ></input>
      <span className="switch__button"></span>
      {name}
    </label>
  );
}

export default Checkbox;
