import { BugButton } from "app/providers/ErrorBoundary";
import { Counter } from "entities/Counter";
import { type FC } from "react";
import { useTranslation } from "react-i18next";

const MainPage: FC = () => {
  const { t } = useTranslation("main");
  return (
    <div>
      {<BugButton />}
      {t("Главная страница")}
      <Counter />
    </div>
  );
};

export default MainPage;
