import { type FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "shared/ui/Button/Button";
import { counterActions } from "../model/slices/counterSlice";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";

interface CounterProps {
  className?: string;
}

export const Counter: FC<CounterProps> = ({ className = "" }) => {
  const dispatch = useDispatch();
  const counterState = useSelector(getCounterValue);
  const increment = (): void => {
    dispatch(counterActions.increment());
  };
  const decrement = (): void => {
    dispatch(counterActions.decrement());
  };
  return (
    <div>
      <h1 data-testid="counter-title">{counterState}</h1>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <Button data-testid="increment-btn" onClick={increment}>increment</Button>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <Button data-testid="decrement-btn" onClick={decrement}>decrement</Button>
    </div>
  );
};
