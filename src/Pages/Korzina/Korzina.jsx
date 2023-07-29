import React from "react";
import "./Korzina.scss";
import { Link } from "react-router-dom";

const Korzina = () => {
  return (
    <div className="korzina">
      <div className="container">
        <div className="breadcrumb">
          <p>
            <Link to={"/"}>Главная</Link> &gt; <b>Корзина</b>
          </p>
        </div>
        <div className="all">
          <div className="top d-flex justify-content-center border-0">
            <div className="box btn">1</div>
            <Link to="/adress" className="box btn">
              2
            </Link>
            <div className="box btn">3</div>
          </div>
          <div className="name d-flex justify-content-center">
            <b>Корзина</b>
            <b>Адрес доставки</b>
            <b>Заказ готов</b>
          </div>
          <h1>Корзина</h1>
          <div className="row">
            <div className="col-7 left">
              <div className="info d-flex">
                <img src="./images/other/close.svg" className="x" alt="iks" />
                <div className="first">
                  <b className="d-block">товар</b>
                  <img
                    style={{ width: "85px", height: "85px" }}
                    src="./images/other/stanozol.svg"
                    alt="dori"
                  />
                </div>
                <p className="p">Oxymethalone 20mg/tab, 100tab – ERGO</p>
                <div className="second">
                  <b>Цена</b>
                  <p>880 ₽</p>
                </div>
                <div className="third">
                  <b>Количество</b>
                  <div className="add d-flex">
                    <button className="btn plus">-</button>
                    <button className="btn min">1</button>
                    <button className="btn plus">+</button>
                  </div>
                </div>
                <div className="fourth">
                  <b>Подытог</b>
                  <p className="itog" style={{ color: "#BB9B75" }}>
                    880 ₽
                  </p>
                </div>
              </div>
              <div className="group d-flex justify-content-between">
                <input
                  type="text"
                  placeholder="Код купона"
                  className="form-control"
                />
                <button className="btn">Применить купон</button>
              </div>
            </div>
            <div className="col-5 right">
              <h2>Сумма заказов</h2>
              <div className="summa">
                <div className="itog">
                  <div className="first d-flex justify-content-between">
                    <b>товар</b>
                    <b>подытог</b>
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
                </div>
                <button className="btn">Оформить заказ</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Korzina;
