import React from "react";

export default function Error({message}) {
  return <p className="alert alert-danger error">{message}</p>;
}
