import "./Checkbox.css";

function Checkbox({ name, className, onChange, value }) {
  function handelChange(e) {
    onChange(e.target.checked);
  }

  return (
    <label className={`switch__label ${className}`}>
      <input
        type="checkbox"
        defaultChecked={value}
        onChange={handelChange}
      ></input>
      <span className="switch__button"></span>
      {name}
    </label>
  );
}

export default Checkbox;
