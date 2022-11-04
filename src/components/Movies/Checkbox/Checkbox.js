import "./Checkbox.css";

function Checkbox({ name, className, onEdit, value }) {
  function handelChange(e) {
    onEdit(e.target.checked);
  }

  return (
    <label className={`switch__label ${className}`}>
      <input type="checkbox" />
      <span
        className="switch__button"
        defaultChecked={value}
        onEdit={handelChange}
      />
      {name}
    </label>
  );
}

export default Checkbox;
