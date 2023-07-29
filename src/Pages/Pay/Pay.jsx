import React from "react";
import "./Pay.scss";
import { Link } from "react-router-dom";

const Pay = () => {
  return (
    <div className="pay">
      <div className="container">
        <div className="breadcrumb">
          <p>
            <Link to={"/"}>Главная</Link> &gt; <b>Оплата</b>
          </p>
        </div>
        <div className="all">
          <div className="title d-flex">
            <h1>Оплата</h1>
            <p>
              Отправляем заказ после 100% оплаты заказа и доставки, при
              получении посылки доплачивать не нужно. В целях безопастности не
              можем сделать наложенный платеж.
            </p>
          </div>
          <div className="bottom">
            <h2>Способы оплаты:</h2>
            <div className="try d-flex">
              <div className="first d-flex border-0">
                <img src="./images/other/yandex.svg" alt="yandex" />
                <p className="border-0 m-0 mt-2 ms-2">Яндекс Деньги</p>
              </div>
              <div className="first d-flex border-0">
                <img src="./images/other/bank.svg" alt="yandex" />
                <p className="border-0 m-0 mt-2 ms-2">Карта Сбербанк</p>
              </div>
              <div className="first d-flex border-0">
                <img src="./images/other/carta.svg" alt="yandex" />
                <p className="border-0 m-0 mt-2 ms-2">
                  Гарант сервис (на ваш выбор)
                </p>
              </div>
            </div>
            <p className="w-100">
              Если не знаете как оплатить, пишите консультанту на email,
              telegram или чат на сайте, все расскажем.{" "}
            </p>
            <div className="blue d-flex">
              <div>
                <b>
                  Оплачивайте только на те реквизиты, который придут с нашего
                  email или чата на сайте!
                </b>
                <p>
                  В telegram вы можете нарваться на мошенника! Мы не выдаем
                  реквизиты через телеграм!
                </p>
              </div>
              <img
                className="btn "
                src="./images/other/close.svg"
                alt="colse"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pay;
