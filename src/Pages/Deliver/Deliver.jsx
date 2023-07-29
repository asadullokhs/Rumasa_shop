import React from "react";
import "./Deliver.scss";
import { Link } from "react-router-dom";

const Deliver = () => {
  return (
    <div className="deliver">
      <div className="container">
        <div className="breadcrumb">
          <p>
            <Link to={"/"}>Главная</Link> &gt; <b>Доставка</b>
          </p>
        </div>
        <div className="all">
          <div className="title">
            <h1>Доставка</h1>
            <p>Заказы отправляем почтой России: </p>
          </div>
          <div className="row">
            <div className="box d-flex">
              <div className="col-4 d-flex">
                <img
                  className="img-top"
                  src="./images/other/box.svg"
                  alt="korzina"
                />
                <p>
                  Посылка 5-14 дней с момента отправки в зависимости от региона,
                  обычно не более 10 дней.
                  <b className="d-block">Цена сейчас 650 руб.</b>
                  (на заказы меньше 1500 рублей идет надбавка за доставку в
                  размере 200 руб.)
                </p>
              </div>
              <div className="col-4 d-flex ">
                <img
                  className="img-top"
                  src="./images/other/doc.svg"
                  alt="moshina"
                />
                <p>
                  ЕМС ускоренная (можно до двери), сроки 2-7 дней с момента
                  отправки.
                  <b className="d-block">Цена 1 500 руб.</b>
                </p>
              </div>
              <div className="col-4 d-flex border-0">
                <img
                  className="img-top"
                  src="./images/other/moshina.svg"
                  alt="doc"
                />
                <p>
                  Отправка заказа происходит в течении 1-9 дней с момента
                  оплаты.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deliver;
