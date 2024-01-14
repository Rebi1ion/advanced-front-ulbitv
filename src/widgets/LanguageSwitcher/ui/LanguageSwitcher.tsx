import classNames from "shared/lib/helpers/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button, ButtonThemes } from "shared/ui/Button/Button";
import { type FC } from "react";

interface LanguageSwitcherProps {
  className?: string;
}

export enum Languages {
  RU = "ru",
  EN = "en",
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = (): void => {
    i18n.changeLanguage(
      i18n.language === Languages.RU ? Languages.EN : Languages.RU
    );
  };
  return (
    <Button
      className={classNames("", {}, [className ?? ""])}
      onClick={toggleLanguage}
      theme={ButtonThemes.CLEAR}
    >
      {t("Язык")}
    </Button>
  );
};
