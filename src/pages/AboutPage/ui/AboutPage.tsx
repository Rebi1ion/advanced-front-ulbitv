import { Counter } from "entities/Counter";
import { memo, type FC } from "react";
import { useTranslation } from "react-i18next";

const AboutPage: FC = memo(() => {
  const { t } = useTranslation("about");
  return (
    <div>
      {t("Страница о нас")} <Counter />
    </div>
  );
});

AboutPage.displayName = "AboutPage";

export default AboutPage;
