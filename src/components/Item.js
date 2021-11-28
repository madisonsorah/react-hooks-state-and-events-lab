import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, updateCart] = useState("in-cart");

  function handleCart() {
    updateCart((isInCart) => !isInCart);
  }

  const buttonText = isInCart ? "Remove From Cart" : "Add to Cart";
  const liClass = isInCart ? "in-cart" : ""

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleCart} className="add">{buttonText}</button>
    </li>
  );
}


// function Item({ name, category }) {
//   return (
//     <li className="">
//       <span>{name}</span>
//       <span className="category">{category}</span>
//       <button className="add">Add to Cart</button>
//     </li>
//   );
// }

export default Item;
