import React from "react";
import { Link } from "react-router-dom";
import "./Register.scss";

const Register = () => {
  return (
    <div className="Log in">
      <div className="window">
        <div className="first border-0">
          <div className="logo d-flex w-100">
            <img
              src="./images/home/logo.svg"
              className="logo-img"
              alt="image"
            />
            <p className="name">
              Интернет-магазин <b>RU-massa</b>
            </p>
          </div>
          <div className="name">
            <b className="b">Регистрация</b>
            <div className="acc d-flex">
              <p>Уже есть аккаунт?</p>
              <Link to="/login">Войдите</Link>
            </div>
          </div>
        </div>
        <div className="center">
          <div className="row">
            <div className="col-12 col-sm-6 left">
              <p>Ваша почта</p>
              <input
                type="e-mail"
                placeholder="Введите e-mail"
                className="form-control"
              />
              <p>Повторите пароль</p>
              <input
                type="password"
                placeholder="Повторите пароль"
                className="form-control"
              />
              <p>Фамилия </p>
              <input
                type="text"
                placeholder="Фамилия "
                className="form-control"
              />
            </div>
            <div className="col-12 col-sm-6 right">
              <p>Пароль</p>
              <input
                type="password"
                placeholder="Введите ваш пароль"
                className="form-control"
              />
              <p>Имя</p>
              <input type="text" placeholder="Имя" className="form-control" />
              <p>Ваш телефон</p>
              <input
                type="tel"
                placeholder="Ваш телефон"
                className="form-control"
              />
              <button className="btn">Зарегистрироваться</button>
            </div>
          </div>
        </div>
        <div className="oxirgi border-top">
          <p>Вход в один клик:</p>
          <div className="images d-flex">
            <img src="./images/home/facebook.svg" alt="facebbok" />
            <img src="./images/home/gulugulu.svg" alt="google" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
