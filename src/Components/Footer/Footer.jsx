import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="container">
        <div className="row">
          <div className="first">
            <div className="logo d-flex">
              <img
                src="./images/home/logo.svg"
                className="logo-img"
                alt="image"
              />
              <p className="name">
                Интернет-магазин <b>RU-massa</b>
              </p>
            </div>
            <p>
              Магазин спортивной фармакологии с доставкой из России в Москву,
              Санкт-Питербург и другие города. Так же доставляем в любую точку
              мира.
            </p>
          </div>
          <div className="second">
            <ul className="d-flex">
              <li>
                <b>Категории</b>
              </li>
              <li>
                <a href="#">Оральные препараты</a>
              </li>
              <li>
                <a href="#">Инъекционные препараты</a>
              </li>
              <li>
                <a href="#">Препараты ПКТ</a>
              </li>
              <li>
                <a href="#">Гормоны роста </a>
              </li>
              <li>
                <a href="#">Сармы/Sarms</a>
              </li>
            </ul>
          </div>
          <div className="third">
            <ul>
              <li>
                <b>Как оформить заказ</b>
              </li>
              <li>
                <Link to="/pay">Оплата</Link>
              </li>
              <li>
                <Link to="/deliver">Доставка</Link>
              </li>
              <li>
                <Link to="/return">Обмен и возрат</Link>
              </li>
              <li>
                <Link to="/comments">Отзывы</Link>
              </li>
              <li>
                <Link to="/sale">Скидки</Link>
              </li>
              <li>
                <Link to="/news">Новости</Link>
              </li>
              <li>
                <Link to="/contact">Контакты</Link>
              </li>
            </ul>
          </div>
          <div className="fourth">
            <ul>
              <li>
                <b>Новости</b>
              </li>
              <li>
                <a href="#">Смена домена,</a>
              </li>
              <li>
                <a href="#">новый адрес ru-massa.info</a>
              </li>
            </ul>
          </div>
          <div className="fifth">
            <ul>
              <li>
                <b>Контакты</b>
              </li>
              <li className="d-flex">
                <img src="./images/home/call 1.svg" alt="call" />
                <a href="#">7 (567) 439-82-34</a>
              </li>
              <li className="d-flex" style={{ width: "235px" }}>
                <img src="./images/home/email1.svg" alt="call" />
                <a href="#" className="d-flex">
                  E-mail: <p className="ms-2 mb-0">rumassa13@gmail.com</p>
                </a>
              </li>
              <li className="d-flex" style={{ width: "235px" }}>
                <img src="./images/home/telegram (5) 1.svg" alt="call" />
                <a href="#">@Rumassa_bot для заказа</a>
              </li>
              <li className="d-flex" style={{ width: "235px" }}>
                <img src="./images/home/telegram (5) 1.svg" alt="call" />
                <a href="#">
                  Telegram: @consultant_rumassa{" "}
                  <p style={{ marginTop: "-10px" }}>
                    {" "}
                    (составление курсов и т.д.)
                  </p>
                </a>
              </li>
              <li className="d-flex" style={{ paddingTop: "10px" }}>
                <img src="./images/home/telegram (5) 1.svg" alt="call" />
                <a href="#">Telegram: @Rumassa</a>
              </li>

              <li className="d-flex">
                <img src="./images/home/telegram (5) 1.svg" alt="call" />
                <a href="#">
                  <p>Новости в телеграм</p>
                </a>
              </li>
              <li className="d-flex">
                <img src="./images/home/telegram (5) 1.svg" alt="call" />
                <a href="#">
                  <p>Чат в телеграм</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="oyog d-flex justify-content-between mt-4">
          <p>ⓒ copywriting 2022</p>
          <p>Политика конфиденциальности</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
