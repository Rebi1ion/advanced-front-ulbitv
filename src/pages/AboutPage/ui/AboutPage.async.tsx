import { lazy } from "react";

// правильный вариант реализации асинхронной подгрузки страницы
// export const AboutPageAsync = lazy(async () => await import("./AboutPage"));

export const AboutPageAsync = lazy(
  async () =>
    await new Promise((resolve) => {
      // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
      setTimeout(() => {
        // @ts-expect-error asdf
        resolve(import("./AboutPage"));
      }, 1500);
    })
);
