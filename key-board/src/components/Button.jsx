function Button(props) {
  return (
    <button
      className={props.className ? props.className : ""}
      onClick={props.onClick}
      disabled={props.disabled ? "true" : ""}
    >
      {props.value}
    </button>
  );
}

export default Button;
