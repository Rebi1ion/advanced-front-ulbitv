import { lazy } from "react";

// правильный вариант реализации асинхронной подгрузки страницы
// export const MainPageAsync = lazy(async () => await import("./MainPage"));

export const MainPageAsync = lazy(
  async () =>
    await new Promise((resolve) => {
      // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
      setTimeout(() => {
        // @ts-expect-error asdf
        resolve(import("./MainPage"));
      }, 1500);
    })
);
