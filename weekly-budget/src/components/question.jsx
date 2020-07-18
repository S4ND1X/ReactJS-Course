import React, { Fragment, useState } from "react";

import Error from "./error";

export default function Question() {
  const [budget, setBudget] = useState(0);
  const [error, setError] = useState(false);

  const budgetInput = (e) => {
    e.preventDefault();
    setBudget(parseInt(e.target.value));
  };

  const handleSubmit = (e) => {
      e.preventDefault();
    if (budget < 1 || isNaN(budget)) {
      setError(true);
      console.log("====================================");
      console.log("No se envio");
      console.log("====================================");
      return;
    }

    console.log("====================================");
    console.log("Se envio");
    console.log("====================================");
    setError(false);
  };

  return (
    <Fragment>
      <h2>What is your weekly budget?</h2>
      {console.log(error)}
      {error ? <Error message="Dato invalido" /> : null}
      <form>
        <input
          type="number"
          className="u-full-width"
          placeholder="Your budget"
          min="0"
          onChange={budgetInput}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          placeholder="Add"
          onSubmit={handleSubmit}
        />
      </form>
    </Fragment>
  );
}
