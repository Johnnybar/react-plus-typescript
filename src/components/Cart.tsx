import CartCSS from "./Cart.module.css";
import { useState } from "react";

interface Props {}

// interface State {
//   isOpen: boolean;
// }

const Cart = (props: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div className={CartCSS.cartContainer}>
      <button
        className={CartCSS.button}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        2 Pizza(s)
      </button>
      <div
        className={CartCSS.cartDropDown}
        style={{ display: isOpen ? "block" : "none" }}
      >
        <ul>
          <li>Napoletana</li>
          <li>Marinara</li>
        </ul>
      </div>
    </div>
  );
};

export default Cart;
