import React from "react";
import "./New.scss";
import { Link } from "react-router-dom";

const New = () => {
  return (
    <div className="new">
      <div className="container">
        <div className="breadcrumb">
          <p>
            <Link to={"/"}>Главная</Link> &gt; <b>Новости</b>
          </p>
        </div>
        <div className="tovar btn">Пополнение товара</div>
        <div className="all">
          <div className="row">
            <div className="col-9 left">
              <h1>Пополнение товара Balkan, SP, Tesla, Pharmacom и тд!</h1>
              <div
                className="author d-flex gap-4"
                style={{
                  padding: "5px 10px",
                }}
              >
                <p className="text-d m-0">
                  Автор:{" "}
                  <img
                    style={{
                      width: "20px",
                      height: "20px",
                      marginRight: "5px",
                    }}
                    src="./images/home/icon-1.svg"
                    alt="icon"
                  />
                  Гена
                </p>
                <p className="text-d m-0">
                  <i className="fa-regular fa-calendar-days me-2"></i>
                  17.02.2022
                </p>
                <img
                  src="./images/home/message.svg"
                  className="btn"
                  alt="message"
                />
              </div>
              <div className="text">
                <p>
                  Balkan Pharmaceuticals: Danabol 10mg, Danabol 50mg, Esculap,
                  Parabolan, Primobol, Halotest, Turanabol, Strombaject,
                  Testosterona U, Apollo, Parabolan 10ml флакон, Primobol 10ml
                  флакон, Nandrolona D 10ml флакон, Testosterona C 10ml флакон.
                </p>
                <p>
                  SP Laboratories: Masteron (propionate) 10ml, Nandrolone-F
                  10ml, Primobol 10ml, Methandriol 10ml (жидкий турик).
                </p>
                <p>
                  Tesla: Test P 10ml, Test E 10ml, Test Mix 10ml (суст), Nan
                  Phenyl 10ml, Methan 20mg 50tab, Stan 20mg 50tab, Oxymetholone
                  50mg 50tab.
                </p>
                <p>Pharmacom: Pharma Sust 300, Pharma Bold 500.</p>
                <p>Magnus: Magnyl 5000iu гонадотропин.</p>
              </div>
              <div className="cards">
                <div className="row">
                  <div className="col-8">
                    <div className="row">
                      <div className="col-6 card">
                        <img
                          src="./images/other/card-1.svg"
                          style={{ width: "310px", height: "310px" }}
                          alt="stanozol"
                        />
                        <p>Oxymethalone 20mg/tab, 100tab – ERGO</p>
                        <b>1360 ₽</b>
                      </div>
                      <div className="col-6 card">
                        <img
                          src="./images/other/card-2.svg"
                          alt="stanozol"
                          style={{ width: "310px", height: "310px" }}
                        />
                        <p>Gonadotropin 1000iu, 1 флакон – Olymp Labs</p>
                        <b>704 ₽</b>
                      </div>
                    </div>
                  </div>
                  <div className="col-4 card">
                    <img
                      src="./images/other/card-2.svg"
                      alt="stanozol"
                      style={{ width: "310px", height: "310px" }}
                    />
                    <p>Gonadotropin 2000iu, 1 флакон – Olymp Labs</p>
                    <b>1280 ₽</b>
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <div className="row">
                      <div className="col-6 card">
                        <img
                          src="./images/other/card-2.svg"
                          style={{ width: "310px", height: "310px" }}
                          alt="stanozol"
                        />
                        <p>Gonadotropin 5000iu, 1 флакон – Olymp Labs</p>
                        <b>2480 ₽</b>
                      </div>
                      <div className="col-6 card">
                        <img
                          src="./images/other/card-3.svg"
                          alt="stanozol"
                          style={{ width: "310px", height: "310px" }}
                        />
                        <p>Provirol-25 25mg/tab, 40tab – Lyka</p>
                        <b>1320 ₽</b>
                      </div>
                    </div>
                  </div>
                  <div className="col-4 card">
                    <img
                      src="./images/other/card-4.svg"
                      alt="stanozol"
                      style={{ width: "310px", height: "310px" }}
                    />
                    <p>Methenolone Enanthate 100mg/ml, 10ml – ERGO</p>
                    <b>4880 ₽</b>
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <div className="row">
                      <div className="col-6 card">
                        <img
                          src="./images/other/card-5.svg"
                          style={{ width: "310px", height: "310px" }}
                          alt="stanozol"
                        />
                        <p>Bold 250mg/ml, 1amp – Hydrabolic</p>
                        <b>220 ₽</b>
                      </div>
                      <div className="col-6 card">
                        <img
                          src="./images/other/card-6.svg"
                          alt="stanozol"
                          style={{ width: "310px", height: "310px" }}
                        />
                        <p>Deca F 100mg/ml, 1ml – Hydra</p>
                        <b>264 ₽</b>
                      </div>
                    </div>
                  </div>
                  <div className="col-4 card">
                    <img
                      src="./images/other/card-6.svg"
                      alt="stanozol"
                      style={{ width: "310px", height: "310px" }}
                    />
                    <p>Deca D 100mg/ml, 1ml – Hydra</p>
                    <b>264 ₽</b>
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <div className="row">
                      <div className="col-6 card">
                        <img
                          src="./images/other/card-7.svg"
                          style={{ width: "310px", height: "310px" }}
                          alt="stanozol"
                        />
                        <p>Mesterolone 25mg/tab, 40tab – Ultra </p>
                        <b>1320 ₽</b>
                      </div>
                      <div className="col-6 card">
                        <img
                          src="./images/other/card-8.svg"
                          alt="stanozol"
                          style={{ width: "310px", height: "310px" }}
                        />
                        <p>Testosterone P 100mg/ml, 1ml – Qpharm</p>
                        <b>1056 ₽</b>
                      </div>
                    </div>
                  </div>
                  <div className="col-4 card">
                    <img
                      src="./images/other/card-9.svg"
                      alt="stanozol"
                      style={{ width: "310px", height: "310px" }}
                    />
                    <p>Test P 100mg/ml, 1ml – Hydrabolic</p>
                    <b>88 ₽</b>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3 part right">
              <h2>Продукты</h2>
              <div className="products">
                <div className="first p-0 d-flex">
                  <img src="./images/other/dori news.svg" alt="dori" />
                  <div className="name">
                    <p>Gonadotropin 1000iu, 1 флакон - Olymp Labs</p>
                    <b>704 ₽</b>
                  </div>
                </div>
                <div className="first d-flex">
                  <img src="./images/other/dori news.svg" alt="dori" />
                  <div className="name">
                    <p>Gonadotropin 1000iu, 1 флакон - Olymp Labs</p>
                    <b>704 ₽</b>
                  </div>
                </div>
                <div className="first d-flex">
                  <img src="./images/other/dori news.svg" alt="dori" />
                  <div className="name">
                    <p>Gonadotropin 1000iu, 1 флакон - Olymp Labs</p>
                    <b>704 ₽</b>
                  </div>
                </div>
                <div className="first border-0 d-flex">
                  <img src="./images/other/dori news.svg" alt="dori" />
                  <div className="name">
                    <p>Gonadotropin 1000iu, 1 флакон - Olymp Labs</p>
                    <b>704 ₽</b>
                  </div>
                </div>
              </div>
              <h2 className="mt-4">Категории </h2>
              <div className="products">
                <p>"Сан Фармасьютикалс Индастриз Лтд", Индия</p>
                <p>Balkan Pharmaceuticals </p>
                <p>Baries Pharm </p>
                <p>Body Pharm</p>
                <p>British Dragon</p>
                <p>Chang Pharmaceuticals</p>
                <p> Cygnus</p>
                <p>EGIS</p>
                <p>EPF</p>
                <p>ERGO</p>
                <p>Golden Dragon</p>
                <p>Golden Pills</p>
                <p>Hangzhou Gaofeng</p>
                <p>Indian Herbal Pills</p>
                <p>Jera Labs</p>
                <p>Lyka Labs</p>
                <p>Lyka Pharmaceuticals</p>
                <p>Magnus</p>
                <p>Neo Labs</p>
                <p>Olymp Labs</p>
                <p>Pharmacom Labs</p>
                <p>Pharmalabs</p>
                <p>Radjay</p>
                <p>SP Laboratories</p>
                <p>Tesla Pharmacy</p>
                <p> Ultra Pharm </p>
                <p>Uncategorized</p>
                <p>Vermodje</p>
                <p>Watson</p>
                <p>Zhengzhou Pharmaceutical</p>
                <p>Гормон роста </p>
                <p> Готовые курсы </p>
                <p> Инъекционные препараты</p>
                <p> Оральные препараты</p>
                <p>Препараты ПКТ</p>
                <p>Сармы / Sarms</p>
              </div>
            </div>
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
      <div className="last">
        <div className="container d-flex">
          <div className="first d-flex">
            <img
              src="./images/home/prev.svg"
              alt="btn"
              className="btn p-0 prev"
            />
            <div className="div">
              <div className="title d-flex">
                <b>Следующая</b>
                <img
                  src="./images/other/menu.svg"
                  alt="menu"
                  className="btn p-0 menu"
                />
              </div>
              <p>Теперь в наличии клен балкан, кломид лука, суст эрго и т.д</p>
            </div>
          </div>
          <div className="fifth">
            <b>Поделиться :</b>
            <div className="d-flex">
              <img
                className="btn"
                src="./images/other/facebook.svg"
                alt="face"
              />
              <img
                className="btn"
                src="./images/other/pinterest.svg"
                alt="face"
              />
              <img
                className="btn"
                src="./images/other/twitter.svg"
                alt="face"
              />
              <img
                className="btn"
                src="./images/other/telegram.svg"
                alt="face"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
