import React from "react";
import Expense from "./expense";

export default function ExpenseList({ expensesList }) {
  return (
    <div className="gastos-realizados">
      <h2>Your List</h2>
      {expensesList.map((expense) => (
        <Expense
          name={expense.name}
          quantity={expense.quantity}
          key={expense.id}
        />
      ))}
    </div>
  );
}
