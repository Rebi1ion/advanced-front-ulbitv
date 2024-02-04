import classNames from "shared/lib/helpers/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button, ButtonThemes } from "shared/ui/Button/Button";
import { memo, type FC } from "react";

interface LanguageSwitcherProps {
  className?: string;
}

export enum Languages {
  RU = "ru",
  EN = "en",
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = memo(() => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = (): void => {
    i18n.changeLanguage(
      i18n.language === Languages.RU ? Languages.EN : Languages.RU
    );
  };
  return (
    <Button
      className={classNames("", { invertedColors: true }, [])}
      onClick={toggleLanguage}
      theme={ButtonThemes.CLEAR}
      invertedColors
    >
      {t("Язык")}
    </Button>
  );
});

LanguageSwitcher.displayName = "LanguageSwitcher";
