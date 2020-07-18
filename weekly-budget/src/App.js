import React, { useState } from "react";

import Question from "./components/question";

import ExpensesForm from "./components/expenses-form";

import ExpenseList from "./components/expense-list";

import BudgetControl from "./components/budget-control";

function App() {
  //Define the state
  const [globalBudget, setGlobalBudget] = useState(0);
  const [budgetLeft, setBudgetLeft] = useState(0);
  const [showQuestion, setShowQuestion] = useState(true);

  const [expensesList, setExpenseList] = useState([]);

  

  const addExpenseToList = (expense) => {
    setExpenseList([...expensesList, expense]);
  };

  return (
    <div className="container">
      <header>
        <h1>Weekly Budget</h1>

        <div className="contenido-principal contenido">
          {showQuestion ? (
            <Question
              setGlobalBudget={setGlobalBudget}
              setBudgetLeft={setBudgetLeft}
              setShowQuestion={setShowQuestion}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <ExpensesForm addExpenseToList={addExpenseToList} />
              </div>
              <div className="one-half column">
                <ExpenseList expensesList={expensesList} />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
