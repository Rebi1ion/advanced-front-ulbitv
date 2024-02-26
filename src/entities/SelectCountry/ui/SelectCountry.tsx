import classNames from "shared/lib/helpers/classNames/classNames";
import { memo, type FC } from "react";
import { Select } from "shared/ui/Select";
import { Countries } from "../model/types/country";

interface SelectCountryProps {
  className?: string;
  label?: string;
  readonly?: boolean;
  value?: Countries;
  onChange?: (value: Countries) => void;
}

const CountryOptions = [
  { content: Countries.Armenia, value: Countries.Armenia },
  { content: Countries.Belarus, value: Countries.Belarus },
  { content: Countries.Kazakhstan, value: Countries.Kazakhstan },
  { content: Countries.Russia, value: Countries.Russia },
  { content: Countries.Ukraine, value: Countries.Ukraine },
];

export const SelectCountry: FC<SelectCountryProps> = memo((props) => {
  const { className = "", label, onChange, readonly, value } = props;
  return (
    <Select
      className={classNames("", {}, [className])}
      options={CountryOptions}
      label={label}
      onChange={onChange}
      readonly={readonly}
      value={value}
    />
  );
});

SelectCountry.displayName = "SelectCountry";
