import "./Button.css";

function Button(props) {
  return (
    <button className={"button "+props.className} style={{ backgroundColor: props.color }}>
      {props.children}
    </button>
  );
}

export default Button;
