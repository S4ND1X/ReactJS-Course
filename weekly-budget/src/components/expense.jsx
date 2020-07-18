import React from "react";

export default function Expense({ name, quantity }) {
  return (
    <li className="gastos">
      <p>
        {name}
        <span className="gasto">$ {quantity}</span>
      </p>
    </li>
  );
}
