import React from "react";
import CartItem from "./CartItem";

export default function CartList({ value }) {
  const { cart } = value;

  return (
    <div className="container-fluid">
      {cart.map((item) => {
        console.log("}}}}}}}}}}}}}}}}}}}}}}}}", item);
        return <CartItem key={item.id} item={item} value={value} />;
      })}
    </div>
  );
}

// export default CartList;
