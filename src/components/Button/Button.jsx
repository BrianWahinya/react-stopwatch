import "./button.css";

const Button = ({ name, action, disabled }) => {
  return (
    <button
      className={`btn-${name.toLowerCase()} ${disabled ? "disabled" : ""}`}
      onClick={action}
    >
      {name}
    </button>
  );
};

export default Button;
