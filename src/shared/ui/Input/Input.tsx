import classNames from "shared/lib/helpers/classNames/classNames";
import cls from "./Input.module.scss";
import {
  type InputHTMLAttributes,
  type FC,
  memo,
  type ChangeEvent,
  useState
} from "react";

type InputAttributes = Omit<
InputHTMLAttributes<HTMLInputElement>,
"placeholder" | "onChange" | " value"
>;

interface InputProps extends InputAttributes {
  className?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  type?: string;
  autoFocus?: boolean;
}

export const Input: FC<InputProps> = memo((props) => {
  const {
    placeholder,
    value,
    onChange,
    autoFocus,
    type = "text",
    className = "",
    ...otherProps
  } = props;

  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    onChange?.(value);
    setCaretPosition(+value.length);
  };

  const onFocus = (): void => {
    setIsFocused(true);
  };

  const onBlur = (): void => {
    setIsFocused(false);
  };

  const onSelect = (e: any): void => {
    setCaretPosition(+e.target.selectionStart);
  };

  return (
    <div className={classNames(cls.InputWrapper, {}, [className])}>
      {placeholder !== undefined && (
        <div className={cls.placeholder}>{`${placeholder}>`}</div>
      )}

      <div className={cls.caretWrapper}>
        <input
          onChange={(e) => {
            onChangeHandler(e);
          }}
          value={value}
          className={cls.input}
          type={type}
          onFocus={onFocus}
          onBlur={onBlur}
          onSelect={onSelect}
          autoFocus={autoFocus}
          {...otherProps}
        />
        {isFocused && (
          <span
            style={{ left: `${caretPosition * 9}px` }}
            className={cls.caret}
          />
        )}
      </div>
    </div>
  );
});

Input.displayName = "Input";
