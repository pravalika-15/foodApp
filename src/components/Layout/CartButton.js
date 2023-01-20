import CartIcon from "../Cart/CartIcon";
import CartContext from "../Store/card-context";
import classes from "./CartButton.module.css";
import { useContext } from "react";
const CartButton = (props) => {
  const cartctx = useContext(CartContext);
  const noofCartItems = cartctx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  // reduce() - allows to transform an array of data to a single value
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>{noofCartItems}</span>
    </button>
  );
};

export default CartButton;
