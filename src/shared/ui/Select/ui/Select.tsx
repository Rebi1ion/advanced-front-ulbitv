import classNames from "shared/lib/helpers/classNames/classNames";
import cls from "./Select.module.scss";
import { useCallback, type FC, type ChangeEvent, useMemo, memo } from "react";
import { type Currency } from "entities/SelectCurrency/model/types/currency";

export interface SelectOption {
  value: string;
  content: string;
}

interface SelectProps {
  className?: string;
  label?: string;
  options: SelectOption[];
  readonly?: boolean;
  value?: string;
  onChange?: (value: string) => void;
}

export const Select: FC<SelectProps> = memo((props) => {
  const {
    className = "",
    label = "",
    options,
    readonly = false,
    onChange,
    value,
  } = props;

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Currency);
    },
    [onChange]
  );

  const optionsList = useMemo(
    () =>
      options?.map((opt) => (
        <option value={opt.value} key={opt.value} className={cls.option}>
          {opt.content}
        </option>
      )),
    [options]
  );

  return (
    <div
      className={classNames(cls.SelectWrapper, { [cls.readonly]: readonly }, [
        className,
      ])}
    >
      <span className={cls.label}>{`${label}>`}</span>
      <select
        className={cls.select}
        disabled={readonly}
        onChange={(e: ChangeEvent<HTMLSelectElement>) => {
          onChangeHandler(e.target.value);
        }}
        value={value}
      >
        {optionsList}
      </select>
    </div>
  );
});

Select.displayName = "Select";
