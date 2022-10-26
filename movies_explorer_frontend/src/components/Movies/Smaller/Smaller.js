import "./Smaller.css";

function Smaller({ name, className }) {
  return (
    <div className={`switch__label ${className}`}>
      <ul>
        <li>
          <input type="checkbox"></input>
          <label className="switch__button">{name}</label>
        </li>
      </ul>
    </div>
  );
}

export default Smaller;
