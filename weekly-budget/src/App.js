import React, { useState } from "react";

import Question from "./components/question";

import Expenses from "./components/expenses";

function App() {
  //Define the state
  const [globalBudget, setGlobalBudget] = useState(0);
  const [budgetLeft, setBudgetLeft] = useState(0);
  const [showQuestion, setShowQuestion] = useState(true);

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
                <Expenses />
              </div>
              <div className="one-half column">2</div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
