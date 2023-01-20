import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
      {/* adding props to input as {...props.input} whatever we recieved on input */}
    </div>
  );
};

export default Input;
