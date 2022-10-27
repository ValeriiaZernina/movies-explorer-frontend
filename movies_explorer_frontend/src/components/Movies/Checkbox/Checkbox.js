import "./Checkbox.css";

function Checkbox({ name, className }) {
  return (
    <label className={`switch__label ${className}`}>
      <input type="checkbox" />
      <span className="switch__button" />
      {name}
    </label>
  );
}

export default Checkbox;
