import React from "react";
import "./Contact.scss";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="breadcrumb">
          <p>
            <Link to={"/"}>Главная</Link> &gt; <b>Контакты</b>
          </p>
        </div>
        <div className="all">
          <h1>КОнтакты</h1>
          <div className="box d-flex">
            <div className="box-item d-flex">
              <img
                src="./images/home/telegram.svg"
                alt="telegram"
                className="btn"
              />
              <div className="name">
                <b>Telegram: @Rumassa</b>
                <p>Кликай для начала диалога</p>
              </div>
            </div>
            <div className="box-item border-0 d-flex">
              <img src="./images/home/email.svg" alt="email" className="btn" />
              <div className="name">
                <b>TE-mail: rumassa13@gmail.com</b>
                <p>Электронная почта</p>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="group d-flex">
              <div className="input">
                <b>Ваше имя*</b>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="form-control"
                />
              </div>
              <div className="input">
                <b>Ваш e-mail*</b>
                <input
                  type="e-mail"
                  placeholder="Ваш e-mail"
                  className="form-control"
                />
              </div>
              <div className="input">
                <b>Ваш логин telegram</b>
                <input
                  type="text"
                  placeholder="Ваш логин telegram"
                  className="form-control"
                />
              </div>
            </div>
            <div className="w-100">
              <b className="d-block">Для комментария</b>
              <textarea
                className="form-control"
                cols="100"
                rows="10"
              ></textarea>
            </div>
            <button className="btn">Отправить</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
