import classNames from "shared/lib/helpers/classNames/classNames";
import { memo, type FC } from "react";
import { Currency } from "../model/types/currency";
import { Select } from "shared/ui/Select";

interface SelectCurrencyProps {
  className?: string;
  label?: string;
  readonly?: boolean;
  value?: Currency;
  onChange?: (value: Currency) => void;
}

const currencyOptions = [
  { content: Currency.EUR, value: Currency.EUR },
  { content: Currency.RUB, value: Currency.RUB },
  { content: Currency.USD, value: Currency.USD },
];

export const SelectCurrency: FC<SelectCurrencyProps> = memo((props) => {
  const { className = "", label, onChange, readonly, value } = props;
  return (
    <Select
      className={classNames("", {}, [className])}
      options={currencyOptions}
      label={label}
      onChange={onChange}
      readonly={readonly}
      value={value}
    />
  );
});

SelectCurrency.displayName = "SelectCurrency";
