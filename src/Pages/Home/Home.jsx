import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";
import AutoPlay from "../../Components/AutoPlay";
import RecCarousel from "../../Components/RecCarousel/RecCarousel";
import NewCarousel from "../../Components/NewCarousel/NewCarousel";
import LastCarousel from "../../Components/LastCarousel/LastCarousel";

const Home = () => {
  return (
    <div>
      <section className="header">
        <div className="container">
          <div className="left">
            <div className="title">
              <h1>Интернет-магазин стероидов</h1>
              <p>
                Качественная и сертифицированная продукция,{" "}
                <b>с помощью которых вы сможете улучшить свои результаты,</b>{" "}
                как в бодибилдинге так и других силовых видах спорта.
              </p>
            </div>

            <div className="more btn">
              <p>Подробнее</p>
            </div>
          </div>
        </div>
        <div className="boxes d-flex">
          <div className="bottom">
            <img src="./images/home/dotes.svg" alt="rasm" />
          </div>
          <div className="right d-flex">
            <div className="first">
              <b className="number">01</b>
              <b className="text">Составление курса</b>
              <p>
                Индивидуальное <br /> составление курса
              </p>
            </div>
            <div className="second">
              <b className="number">02</b>
              <b className="text">Медсопровождение</b>
              <a className="d-block" href="#">
                Cопровождение лечащим <br /> врачем
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="certificate">
        <div className="container">
          <div className="title">
            <h1>Сертификаты качества</h1>
            <p>
              Мы используем только сертифицированную и качественную продукцию,
              вы можете просмотреть наши сертификаты
            </p>
          </div>
        </div>
        <div className="carousel w-100">
          <div className="row gap-0">
            <div className="col-12">
              <AutoPlay />
            </div>
          </div>
        </div>
      </section>

      <div className="recomend">
        <div className="top d-flex">
          <div className="title" style={{ paddingRight: "8px" }}>
            <h2>РуМасса рекомендует</h2>
          </div>
          <Link to="/catalog" className="brand btn d-flex" href="#">
            <div className="dumaloq ">
              <img src="./images/home/katalog 4 dotes.svg" alt="rasm" />
            </div>
            <p>Каталог</p>
          </Link>
        </div>
        <div className="bottom">
          <div className="row w-100">
            <RecCarousel />
            <img src="./images/home/dotes.svg" className="dotes" alt="dotes" />
          </div>
        </div>
      </div>

      <div className="news">
        <div className="top d-flex">
          <div className="title">
            <h2 className="w">Новинки</h2>
          </div>
          <Link to="/catalog" className="brand btn d-flex" href="#">
            <div className="dumaloq ">
              <img src="./images/home/katalog 4 dotes.svg" alt="rasm" />
            </div>
            <p>Каталог</p>
          </Link>
        </div>
        <div className="bottom">
          <div className="row w-100">
            <NewCarousel />
            <img src="./images/home/dotes.svg" className="dotes" alt="dotes" />
          </div>
        </div>
      </div>

      <div className="comments">
        <div className="top d-flex">
          <div className="title">
            <h2 style={{ width: "700px" }}>Отзывы</h2>
          </div>
          <Link to="/comments" className="o btn d-flex" href="#">
            <p style={{ paddingLeft: "25px" }}>Все отзывы</p>
          </Link>
        </div>
        <div className="bottom d-flex">
          <div className="row">
            <img
              src="./images/home/prev.svg"
              className="prev btn d-inline"
              alt="rads"
            />

            <div className="otzivi justify-content-center d-flex">
              <div className="first">
                <div className="logo d-flex">
                  <img src="./images/home/icon-1.svg" alt="logo" />
                  <p>Кирилл</p>
                </div>
                <div className="name">
                  <p>
                    Заказывал 8 мая, сегодня забрал с почты посылку 20 мая. Всё
                    в наличии, всё целое. Спасибо за работу. Александр .С. 40
                    лет.
                  </p>
                </div>
                <div className="__ab d-flex">
                  <a href="#">Читать еще</a>
                  <div className="circle btn">
                    <img
                      src="./images/home/facebook 1.svg"
                      className="face"
                      alt="facebook"
                    />
                  </div>
                </div>
              </div>
              <div className="first">
                <div className="logo d-flex">
                  <img src="./images/home/icon 2.svg" alt="logo" />
                  <p>Кирилл</p>
                </div>
                <div className="name">
                  <p>
                    Заказывал 8 мая, сегодня забрал с почты посылку 20 мая. Всё
                    в наличии, всё целое. Спасибо за работу. Александр .С. 40
                    лет.
                  </p>
                </div>
                <div className="__ab d-flex">
                  <a href="#">Читать еще</a>
                  <div className="circle btn">
                    <img
                      src="./images/home/facebook 1.svg"
                      className="face"
                      alt="facebook"
                    />
                  </div>
                </div>
              </div>
              <div className="first second" style={{ border: "none" }}>
                <div className="logo d-flex">
                  <img src="./images/home/icon 3.png" alt="logo" />
                  <p>Кирилл</p>
                </div>
                <div className="name">
                  <p>
                    Заказывал 8 мая, сегодня забрал с почты посылку 20 мая. Всё
                    в наличии, всё целое. Спасибо за работу. Александр .С. 40
                    лет.
                  </p>
                </div>
                <div className="__ab d-flex">
                  <a href="#">Читать еще</a>
                  <div className="circle btn">
                    <img
                      src="./images/home/facebook 1.svg"
                      className="face"
                      alt="facebook"
                    />
                  </div>
                </div>
              </div>
            </div>
            <img
              src="./images/home/next.svg"
              className="next btn d-inline"
              alt="rads"
            />
            <img src="./images/home/dotes.svg" className="dotes" alt="dotes" />
          </div>
        </div>
      </div>

      <div className="advice">
        <div className="container">
          <div className="right">
            <h2 className="title">Консультант по фармакологии</h2>
            <p className="name">Консультация для новичков и самых опытных:</p>
            <ul>
              <li className="d-flex">
                <div className="square btn bg-white">
                  <img
                    src="./images/home/notebook 1.svg"
                    alt="icon"
                    className="icon-1"
                  />
                </div>
                <p>Составление курсов</p>
              </li>
              <li className="d-flex">
                <div className="square btn bg-white">
                  <img
                    src="./images/home/diploma 1.svg"
                    alt="icon"
                    className="icon-1"
                  />
                </div>
                <p>Грамотное пкт</p>
              </li>
              <li className="d-flex">
                <div className="square btn bg-white">
                  <img
                    src="./images/home/medicine 1.svg"
                    alt="icon"
                    className="icon-1"
                  />
                </div>
                <p>Индивидуальный подбор препаратов</p>
              </li>
              <li>
                <p>
                  {" "}
                  И все остальное,что связанное с приемом фармакологии, вы
                  можете узнать у{" "}
                  <b>консультанта на сайте или в чат телеграм.</b>
                </p>
              </li>
            </ul>
            <div className="buttons d-flex">
              <button className="btn first">Написать в Telegram</button>
              <button className="btn second">Online чат</button>
            </div>
          </div>
        </div>
      </div>

      <div className="questions">
        <div className="container">
          <div className="title">
            <h2>Часто задаваемые вопросы</h2>
          </div>
          <div className="bottom">
            <div className="first d-flex justify-content-between">
              <div className="title">
                <b className="d-flex">
                  01 <p>Как оформить заказ?</p>
                </b>
                <p className="text">
                  Мы используем только сертифицированную и качественную
                  продукцию, вы можете просмотреть наши сертификаты
                </p>
              </div>
              <div className="btn">
                <i className="text-white fa-solid fa-minus"></i>
              </div>
            </div>
            <div className="first d-flex justify-content-between">
              <div className="title">
                <b className="d-flex">
                  02 <p>Как оформить заказ?</p>
                </b>
              </div>
              <div className="btn">
                <i className="text-white fa-solid fa-plus"></i>
              </div>
            </div>
            <div className="first d-flex justify-content-between">
              <div className="title">
                <b className="d-flex">
                  03 <p>Как оформить заказ?</p>
                </b>
              </div>
              <div className="btn">
                <i className="text-white fa-solid fa-plus"></i>
              </div>
            </div>
            <div className="first d-flex justify-content-between">
              <div className="title">
                <b className="d-flex">
                  04 <p>Как оформить заказ?</p>
                </b>
              </div>
              <div className="btn">
                <i className="text-white fa-solid fa-plus"></i>
              </div>
            </div>
            <div className="first d-flex justify-content-between">
              <div className="title">
                <b className="d-flex">
                  05 <p>Как оформить заказ?</p>
                </b>
              </div>
              <div className="btn">
                <i className="text-white fa-solid fa-plus"></i>
              </div>
            </div>
            <div
              className="first d-flex justify-content-between"
              style={{ border: "none" }}
            >
              <div className="title">
                <b className="d-flex">
                  06 <p>Как оформить заказ?</p>
                </b>
              </div>
              <div className="btn">
                <i className="text-white fa-solid fa-plus"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="news">
        <div className="container">
          <div className="top d-flex justify-content-between border-0">
            <h2>Новости</h2>
            <Link to="/news" className="btn">
              Все новости
            </Link>
          </div>
        </div>
        <div className="bottom w-100">
          <div className="row w-100">
            <LastCarousel />
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
  );
};

export default Home;
