import React from "react";
import "./Adress.scss";
import { Link } from "react-router-dom";

const Adress = () => {
  return (
    <div className="adress">
      <div className="container">
        <div className="breadcrumb">
          <p>
            <Link to={"/"}>Главная</Link> &gt; <b>Адрес доставки</b>
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
            <Link to="/adress" className="box btn">
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
          <h1 className="text-center">Адрес доставки</h1>
          <button className="btn kupon d-flex gap-2">
            <p>Есть купон?</p>
            <b>Нажмите, чтобы ввести</b>
          </button>
          <div className="row">
            <div className="col-7 left">
              <h2>Оплата и доставка</h2>
              <div className="inputs">
                <div className="input d-flex flex-column gap-2">
                  <b>ФИО*</b>
                  <input
                    placeholder="ФИО"
                    type="text"
                    className="form-control w-100"
                  />
                </div>
                <div className="input d-flex flex-column gap-2">
                  <b>E-mail*</b>
                  <input
                    placeholder="E-mail"
                    type="e-mail"
                    className="form-control w-100"
                  />
                </div>
                <div className="d-flex exeption">
                  <div className="input d-flex flex-column gap-2">
                    <b>Страна/регион*</b>
                    <input
                      placeholder="Выберите страну/регион..."
                      type="text"
                      className="form-control"
                    />
                  </div>
                  <div className="input d-flex flex-column gap-2">
                    <b>Область*</b>
                    <input
                      placeholder="Область"
                      type="text"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="input d-flex flex-column gap-2">
                  <b>Город*</b>
                  <input
                    placeholder="Город*"
                    type="text"
                    className="form-control w-100"
                  />
                </div>
                <div className="input d-flex flex-column gap-2">
                  <b>Индекс*</b>
                  <input
                    placeholder="Индекс*"
                    type="text"
                    className="form-control w-100"
                  />
                </div>
                <div className="input d-flex flex-column gap-2">
                  <b>Улица, номер дома квартира</b>
                  <input
                    placeholder="Улица, номер дома квартира"
                    type="text"
                    className="form-control w-100"
                  />
                </div>
                <div className="big-input">
                  <h2>Детали</h2>
                  <div className="input d-flex flex-column gap-2">
                    <b>Примечание (необязательно)</b>
                    <div type="text" className="form-control">
                      <p>Мобильный пишите сюда, если выбрали EMS доставку</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-5 right">
              <h2>Ваш заказ</h2>
              <div className="summa">
                <div className="itog">
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
                </div>
                <p>
                  Ваши личные данные будут использоваться для обработки ваших
                  заказов, упрощения вашей работы с сайтом и для других целей,
                  описанных в нашей политика конфиденциальности.
                </p>
                <img src="./images/other/check.svg" alt="check" />
                <button className="btn">Подтвердить заказ</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adress;
