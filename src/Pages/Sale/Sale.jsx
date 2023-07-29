import React from "react";
import "./Sale.scss";
import { Link } from "react-router-dom";

const Sale = () => {
  return (
    <div className="sale">
      <div className="container">
        <div className="breadcrumb">
          <p>
            <Link to={"/"}>Главная</Link> &gt; <b>Скидки</b>
          </p>
        </div>
        <div className="all">
          <h1>Скидки</h1>
          <div className="bottom">
            <div className="row">
              <div className="col-8 left">
                <div className="title">
                  <h2>
                    Чем больше сумма вашего заказа, тем больше вы экономите.
                  </h2>
                  <p>
                    К примеру, ваш заказ на 19 000 руб, ваша скидка 5%, к оплате
                    18 050 руб А если ваш заказ 20 500 руб, ваша скидка 10%, к
                    оплате 18 000руб
                  </p>
                  <p>Платите меньше,а “вкуснях” набрали на 1 500 руб больше</p>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className="first d-flex">
                      <img src="./images/other/next.svg" alt="nnn" />
                      <b>5%</b>
                      <p>от 7 000 руб</p>
                    </div>
                    <div className="second d-flex">
                      <img src="./images/other/next.svg" alt="nnn" />
                      <b>15%</b>
                      <p>от 35 000 руб</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="first d-flex">
                      <img src="./images/other/next.svg" alt="nnn" />
                      <b>10%</b>
                      <p>от 20 000 руб</p>
                    </div>
                    <div className="second d-flex">
                      <img src="./images/other/next.svg" alt="nnn" />
                      <b>20%</b>
                      <p>от 50 000 руб</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4 right">
                <img src="./images/other/scream.svg" alt="rasm" />
              </div>
            </div>
          </div>
          <div className="footer">
            <div className="container">
              <div className="text d-flex border-0">
                <h2>Подпишись на нашу рассылку</h2>
                <p>Подписывайся на рассылку и получай на каждый товар -5%</p>
              </div>
              <div className="input d-flex">
                <input
                  type="e-mail"
                  placeholder="E-mail"
                  className="form-control"
                />
                <button className="btn">Подписаться</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sale;
