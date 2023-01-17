import CartIcon from "../Cart/CartIcon";
import classes from "./CartButton.module.css";
const CartButton = () => {
  return (
    <button>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default CartButton;
