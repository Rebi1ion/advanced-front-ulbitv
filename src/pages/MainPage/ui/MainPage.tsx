import { memo, type FC } from "react";
import { useTranslation } from "react-i18next";

const MainPage: FC = memo(() => {
  const { t } = useTranslation("main");

  return (
    <div>
      {/* {<BugButton />} */}
      {t("Главная страница")}
    </div>
  );
});

MainPage.displayName = "MainPage";

export default MainPage;
