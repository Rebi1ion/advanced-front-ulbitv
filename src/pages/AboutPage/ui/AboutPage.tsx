import { Counter } from "entities/Counter";
import { type FC } from "react";
import { useTranslation } from "react-i18next";

const AboutPage: FC = () => {
  const { t } = useTranslation("about");
  return (
    <div>
      {t("Страница о нас")} <Counter />
    </div>
  );
};

export default AboutPage;
