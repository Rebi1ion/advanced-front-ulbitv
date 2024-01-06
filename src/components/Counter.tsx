import { useState } from "react";
import "./Counter.scss";

export function Counter() {
  const [count, addCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => addCount(count + 1)}>Нажми на меня</button>
    </>
  );
}
