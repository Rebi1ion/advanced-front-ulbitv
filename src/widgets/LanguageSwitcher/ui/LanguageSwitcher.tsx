import classNames from "shared/lib/helpers/classNames/classNames";
import cls from "./LanguageSwitcher.module.scss";
import { useTranslation } from "react-i18next";
import { Button, ButtonThemes } from "shared/ui/Button/Button";

interface LanguageSwitcherProps {
  className?: string;
}

export enum Languages {
  RU = "ru",
  EN = "en",
}

export const LanguageSwitcher = ({ className }: LanguageSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(
      i18n.language === Languages.RU ? Languages.EN : Languages.RU
    );
  };
  return (
    <Button
      className={classNames(cls.LanguageSwitcher, {}, [className])}
      onClick={toggleLanguage}
      theme={ButtonThemes.CLEAR}
    >
      {t("Язык")}
    </Button>
  );
};
