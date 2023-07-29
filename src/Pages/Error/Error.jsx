import React from "react";
import "./Error.scss";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error text-center">
      <img src="./images/other/error.svg" alt="error" />
      <p>
        Ошибка 404, что-то пошло не так, запрашиваемая вами страница не найдена,
        возможно, неправильно указан адрес.
      </p>
      <Link to="/" className="btn">
        На главную страницу
      </Link>
      <div className="w-100"></div>
    </div>
  );
};

export default Error;
