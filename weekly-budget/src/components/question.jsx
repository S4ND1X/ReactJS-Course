import React, { Fragment } from "react";

export default function Question() {
  return (
    <Fragment>
      <h2>What is your weekly budget?</h2>

      <form>
        <input
            type="number"
            className="u-full-width"
            placeholder="Your budget"
        />
        <input
        type="submit"
        className="button-primary u-full-width"
        placeholder="Add"
        />
      </form>
    </Fragment>
  );
}
