import React from "react";
import "./Thanks.scss";
import { Link } from "react-router-dom";

const Thanks = () => {
  return (
    <div>
      <div className="container">
        <div className="breadcrumb">
          <p>
            <Link to={"/"}>Главная</Link> &gt; <b>Оральные препараты</b>
          </p>
        </div>
        <div className="all">
          <div className="top d-flex justify-content-center border-0">
            <Link
              to="/korzina"
              style={{ backgroundColor: "#1C1C1C", color: "white" }}
              className="box btn"
            >
              1
            </Link>
            <Link
              to="/adress"
              style={{ backgroundColor: "#1C1C1C", color: "white" }}
              className="box btn"
            >
              2
            </Link>
            <Link to="/thanks" className="box btn">
              3
            </Link>
          </div>
          <div className="name d-flex justify-content-center">
            <b>Корзина</b>
            <b>Адрес доставки</b>
            <b>Заказ готов</b>
          </div>
          <div className="warning">
            <b>
              Внимание! Реквизиты приходят на ваш емайл моментально, если не
              пришли, проверьте спам папку!
            </b>
            <p>
              Для оплаты криптовалютой, запросите кошелек . По всем вопросам
              напишите мне на емайл rumassa13@gmail.com или в телеграм @Rumassa
              , а так же в чат на сайте.
            </p>
          </div>
          <div className="thank">
            <h1>Спасибо!</h1>
            <h2> Ваш заказ был принят</h2>
          </div>
          <div className="boxes d-flex w-100">
            <div className="item">
              <p>
                Номер заказа: <b>15255</b>{" "}
              </p>
            </div>
            <div className="item">
              <p>
                Дата: <b> 25.06.2022</b>{" "}
              </p>
            </div>
            <div className="item border-0">
              <p>
                Итого: <b>1 440₽</b>{" "}
              </p>
            </div>
          </div>
          <div className="summa">
            <div className="itog">
              <h1>Информация о заказе</h1>
              <div className="first d-flex justify-content-between">
                <b>товар</b>
                <b>подытог</b>
              </div>
              <div className="new d-flex justify-content-between">
                <p>Testosterone Propionate 100mg/ml, 10ml × 1</p>
                <p>880₽</p>
              </div>
              <div className="first d-flex justify-content-between">
                <p>Подытог</p>
                <span>880₽</span>
              </div>
              <div className="first d-flex justify-content-between">
                <p>Доставка</p>
                <p>Доставка почтой из РФ: 960₽</p>
              </div>
              <div className="second d-flex justify-content-between">
                <p>Итого</p>
                <span>1 440 ₽</span>
              </div>
              <div
                className="first d-flex justify-content-between border-0"
                style={{
                  backgroundColor: "#F8F8F8",
                  padding: "10px 25px 10px 25px",
                  marginTop: "10px",
                }}
              >
                <p>Оплата:</p>
                <span>Bitcoin</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thanks;
