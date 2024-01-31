import { lazy } from "react";

export const LoginFormAsync = lazy(
  async () =>
    await new Promise((resolve) => {
      // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
      setTimeout(() => {
        // @ts-expect-error asdf
        resolve(import("./LoginForm"));
      }, 1500);
    })
);
