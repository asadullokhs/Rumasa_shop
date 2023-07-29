import React from "react";
import "./Order.scss";
import { Link } from "react-router-dom";

const Order = () => {
  return (
    <div className="order">
      <div className="container">
        <div className="breadcrumb">
          <p>
            <Link to={"/"}>Главная</Link> &gt; <b>Как оформить заказ</b>
          </p>
        </div>
        <div className="all">
          <h1>Как оформить заказ</h1>
          <div className="row">
            <div className="box d-flex">
              <div className="col-3 d-flex">
                <img
                  className="img-top"
                  src="./images/other/korzina.svg"
                  alt="korzina"
                />
                <p>
                  Добавляем нужный товар в корзину. Все что есть на сайте, то в
                  наличии.
                </p>
                <img
                  src="./images/other/next.svg"
                  className="btn p-0"
                  alt="next"
                />
              </div>
              <div className="col-3 d-flex">
                <img
                  className="img-top"
                  src="./images/other/moshina.svg"
                  alt="moshina"
                />
                <p>
                  Переходим в Корзину, выбираем способ доставки, жмем “Оформить
                  заказ”.
                </p>
                <img
                  src="./images/other/next.svg"
                  className="btn p-0"
                  alt="next"
                />
              </div>
              <div className="col-3 d-flex">
                <img
                  className="img-top"
                  src="./images/other/doc.svg"
                  alt="doc"
                />
                <p>
                  Вводим ФИО, ваш e-mail (на него придут реквизиты для оплаты),
                  вводим адрес доставки, жмем “Подтвердить заказ”.
                </p>
                <img
                  src="./images/other/next.svg"
                  className="btn p-0"
                  alt="next"
                />
              </div>
              <div className="col-3 d-flex border-0">
                {" "}
                <img
                  className="img-top"
                  src="./images/other/email.svg"
                  alt="doc"
                />
                <p>
                  Далее ждем обработки заказа и письмо с реквизитами для оплаты
                  на ваш e-mail.
                </p>
              </div>
            </div>
          </div>
          <div className="green d-flex">
            <p>
              По всем вопросам пишите на почту rumassa13@gmail.com или телеграм
              @Rumassa или в чате на сайте
            </p>
            <img className="btn" src="./images/other/close.svg" alt="colse" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
