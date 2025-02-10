import React from "react";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import s from "./ErrorPage.module.css";

export const ErrorPage: React.FC = () => {
  const error = useRouteError();
  console.error(error);

  // Проверяем, является ли ошибка объектом с полями statusText и data
  if (isRouteErrorResponse(error)) {
    return (
      <div className={s.Not_fount}>
        <h1 className={s.h1_nan}>Ошибка</h1>
        <h2 className={s.h1_nan}>404 не мы такие жизнь такая</h2>
        <p>
          <i>{error.statusText}</i>
        </p>
        <a href="/" className={s.qus}>
          На главную
        </a>
        <p>
          <i>{error.data}</i>
        </p>
      </div>
    );
  }

  // Если ошибка не является объектом с полями statusText и data
  return (
    <div className={s.Not_fount}>
      <h1 className={s.h1_nan}>Ошибка</h1>
      <h2 className={s.h1_nan}>404 не мы такие жизнь такая</h2>
      <a href="/" className={s.qus}>
        На главную
      </a>
      <p>
        <i>Произошла неизвестная ошибка</i>
      </p>
    </div>
  );
};
