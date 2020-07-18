import React, { useState } from "react";
import Error from "./error";
const { v4: uuidv4 } = require("uuid");

export default function ExpensesForm({ addExpenseToList }) {
  const [expense, setExpense] = useState({
    name: "",
    quantity: 0,
  });
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    let value =
      e.target.name === "quantity" ? parseInt(e.target.value) : e.target.value;
    setExpense({ ...expense, [e.target.name]: value });
  };

  const addExpense = (e) => {
    e.preventDefault();
    if (
      expense.quantity < 1 ||
      isNaN(expense.quantity) ||
      expense.name.trim() === ""
    ) {
      setError(true);
      return;
    }

    setError(false);
    expense.id = uuidv4();

    addExpenseToList(expense);

    setExpense({
      name: "",
      quantity: 0,
    });
  };

  return (
    <form onSubmit={addExpense}>
      <h2>Expense</h2>
      {error ? <Error message="Please review all data" /> : null}
      <div className="campo">
        <label>Expense Name</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Mortage"
          name="name"
          onChange={handleChange}
          value={expense.name}
        />
      </div>
      <div className="campo">
        <label>Expense Quantity</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="200"
          name="quantity"
          min="0"
          onChange={handleChange}
          value={expense.quantity}
        />
      </div>
      <input
        type="submit"
        className="button-primary u-full-width"
        value="Add expense"
      />
    </form>
  );
}
