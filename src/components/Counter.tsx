import { useState } from "react";
import classes from "./Counter.module.scss";

export function Counter() {
  const [count, addCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>
      <button className={classes.btn} onClick={() => addCount(count + 1)}>
        Нажми на меня
      </button>
    </>
  );
}
