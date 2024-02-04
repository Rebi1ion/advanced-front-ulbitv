import { lazy } from "react";

// правильный вариант реализации асинхронной подгрузки страницы
// export const ProfilePageAsync = lazy(async () => await import("./ProfilePage"));

export const ProfilePageAsync = lazy(
  async () =>
    await new Promise((resolve) => {
      // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
      setTimeout(() => {
        // @ts-expect-error asdf
        resolve(import("./ProfilePage"));
      }, 1500);
    })
);
