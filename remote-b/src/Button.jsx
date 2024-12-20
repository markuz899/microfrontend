const Button = ({ title }) => {
  return (
    <button
      onClick={() => alert("Hello from remote B!")}
      style={{ color: "white", background: "blue", border: "1px solid red" }}
    >
      Click react - {title}!
    </button>
  );
};

export default Button;
