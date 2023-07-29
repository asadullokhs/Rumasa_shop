import React from "react";
import { Link } from "react-router-dom";
import "./SingleProd.scss";

const SingleProd = () => {
  return (
    <div className="singleProd">
      <div className="container">
        <div className="breadcrumb">
          <p>
            <Link to={"/"}>Главная</Link> &gt;{" "}
            <Link to="/catalog">Оральные препараты</Link> &gt;{" "}
            <b>Оксандролон</b> &gt; <b>Oxandrolone 10mg/tab, 100tab WATSON</b>
          </p>
        </div>
        <div className="all">
          <div className="first">
            <div className="row">
              <div className="col-4 left">
                <div className="img-top">
                  <img
                    src="./images/other/stanozol.svg"
                    className="img-fluid"
                    alt="stanozol"
                  />

                  <img
                    className="a1 btn"
                    src="./images/home/heart-crd.svg"
                    alt="heart"
                  />

                  <img
                    className="a2 btn"
                    src="./images/home/card-imgg.svg"
                    alt="heart"
                  />
                </div>
                <div className="bottom d-flex">
                  <img
                    src="./images/home/prev.svg"
                    className="prev btn"
                    alt="prev"
                  />
                  <img
                    src="./images/other/stanozol.svg"
                    className="s"
                    alt="rasm"
                  />
                  <img
                    src="./images/other/stanozol.svg"
                    className="s"
                    alt="rasm"
                  />
                  <img
                    src="./images/other/stanozol.svg"
                    className="s"
                    alt="rasm"
                  />
                  <img
                    src="./images/other/stanozol.svg"
                    className="s"
                    alt="rasm"
                  />
                  <img
                    src="./images/home/next.svg"
                    className="prev btn"
                    alt="prev"
                  />
                </div>
                <Link to="/order" className="btn kak">
                  Как оформить заказ
                </Link>
              </div>
              <div className="col-5 center">
                <div className="title">
                  <h1>Stanozolol 10mg/tab, 100tab</h1>
                </div>
                <div className="second d-flex">
                  <div className="price">
                    <b>880 ₽</b>
                  </div>
                  <div className="add d-flex">
                    <button className="btn plus">-</button>
                    <button className="btn min">1</button>
                    <button className="btn plus">+</button>
                  </div>
                  <button className="btn korzina">В корзину</button>
                  <img
                    src="./images/other/heart.svg"
                    alt="heart"
                    className="btn like"
                  />
                  <img
                    src="./images/other/line.svg"
                    alt="heart"
                    className="btn like"
                  />
                </div>
                <div className="third">
                  <b>Категории:</b>
                  <p>ERGO, Оральные препараты, Станозолол</p>
                </div>
                <div className="third border-0">
                  <b>Отзывы (0):</b>
                  <p>Отзывов пока нет.</p>
                </div>
                <div className="fourth">
                  <b>
                    Будьте первым, кто оставил отзыв на “Stanozolol 10mg/tab,
                    100tab”
                  </b>
                  <p>Для отправки отзыва вам необходимо авторизоваться.</p>
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
                <div className="sixth">
                  <button className="btn">Консультация с фармакологом</button>
                </div>
              </div>
              <div className="col-3 right">
                <div className="deliver">
                  <div className="title">
                    <h2>Доставка</h2>
                    <b>Заказы отправляем почтой России:</b>
                  </div>
                  <div className="text">
                    <p>
                      Посылка 5-14 дней с момента отправки в зависимости от
                      региона, обычно не более 10, цена сейчас 650р (на заказы
                      меньше 1500 рублей идет надбавка за доставку в размере
                      200р.)
                    </p>
                    <p>
                      ЕМС ускоренная (можно до двери), сроки 2-7 дней с момента
                      отправки, цена 1500р
                    </p>
                    <p className="border-0">
                      Отправка заказ происходит в течении 1-9 дней с момента
                      оплаты.
                    </p>
                  </div>
                  <div className="box">
                    <div className="green d-flex">
                      <p>Доставка только с территории России!</p>
                      <img
                        className="btn"
                        src="./images/other/close.svg"
                        alt="colse"
                      />
                    </div>
                    <div className="blue d-flex">
                      <div>
                        <b>Внимание!</b>
                        <p>
                          Обязательно снимайте видео распаковки посылки, для
                          подстраховки!
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
                <div className="deliver mt-4">
                  <div className="title border-0 p-0">
                    <h2>Оплата</h2>
                    <b>Способы оплаты:</b>
                  </div>
                  <div className="text">
                    <p className="border-top-0">
                      Отправляем заказ только после 100% оплаты заказа и
                      доставки, при получении посылки ничего доплачивать не
                      нужно. В целях безопасности не можем сделать наложенный
                      платеж.
                    </p>
                    <div className="try">
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
                    <p>
                      Если не знаете как оплатить, пишите консультанту на email,
                      telegram или чат на сайте, все расскажем.{" "}
                    </p>
                  </div>
                  <div className="box">
                    <div className="blue d-flex">
                      <div>
                        <b>
                          Оплачивайте только на те реквизиты, который придут с
                          нашего email или чата на сайте
                        </b>
                        <p>
                          В telegram вы можете нарваться на мошенника! Мы не
                          выдаем реквизиты через телеграм!
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
          </div>
          <div className="second">
            <div className="news">
              <div className="top d-flex">
                <div className="title">
                  <h2 className="w">Похожие товары</h2>
                </div>
                <div className="brand btn d-flex" href="#">
                  <div className="dumaloq ">
                    <img src="./images/home/katalog 4 dotes.svg" alt="rasm" />
                  </div>
                  <p>Каталог</p>
                </div>
              </div>
              <div className="bottom">
                <div className="row w-100">
                  <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 d-flex left">
                    <img
                      src="./images/home/prev.svg"
                      className="btn prev d-block"
                      alt="prev"
                    />
                    <div className="cards d-flex">
                      <div className="card">
                        <div className="card-header p-0">
                          <img
                            style={{ height: "280px", objectFit: "cover" }}
                            src="./images/home/dori.png"
                            alt="alt poduct"
                            className="card-img-top img-fluid"
                          />
                          <img
                            className="rasm btn"
                            src="./images/home/heart-crd.svg"
                            alt="rasm"
                          />
                          <img
                            src="./images/home/card-imgg.svg"
                            className="rasm btn"
                            style={{ marginTop: "42px" }}
                            alt="rasm"
                          />
                        </div>

                        <div className="card-body">
                          <h4 className="card-title">
                            Metha 10, 10mg/tab, 100tab
                          </h4>
                          <p className="text-d">
                            Оральные препараты, Метандиенон, Chang
                            Pharmaceuticals
                          </p>
                          <span className="price">704 ₽</span>

                          <div className="buttons">
                            <button className="btn first w-100">
                              В корзину
                            </button>
                            <Link to="/singleProd" className="btn second w-100">
                              Подробнее
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header p-0">
                          <img
                            style={{ height: "280px", objectFit: "cover" }}
                            src="./images/home/dori.png"
                            alt="alt poduct"
                            className="card-img-top img-fluid"
                          />
                          <img
                            className="rasm btn"
                            src="./images/home/heart-crd.svg"
                            alt="rasm"
                          />
                          <img
                            src="./images/home/card-imgg.svg"
                            className="rasm btn"
                            style={{ marginTop: "42px" }}
                            alt="rasm"
                          />
                        </div>

                        <div className="card-body">
                          <h4 className="card-title">
                            Metha 10, 10mg/tab, 100tab
                          </h4>
                          <p className="text-d">
                            Оральные препараты, Метандиенон, Chang
                            Pharmaceuticals
                          </p>
                          <span className="price">704 ₽</span>

                          <div className="buttons">
                            <button className="btn first w-100">
                              В корзину
                            </button>
                            <Link to="/singleProd" className="btn second w-100">
                              Подробнее
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 d-flex right"
                    style={{ marginLeft: "380px" }}
                  >
                    <div className="cards d-flex">
                      <div className="card">
                        <div className="card-header p-0">
                          <img
                            style={{ height: "280px", objectFit: "cover" }}
                            src="./images/home/dori.png"
                            alt="alt poduct"
                            className="card-img-top img-fluid"
                          />
                          <img
                            className="rasm btn"
                            src="./images/home/heart-crd.svg"
                            alt="rasm"
                          />
                          <img
                            src="./images/home/card-imgg.svg"
                            className="rasm btn"
                            style={{ marginTop: "42px" }}
                            alt="rasm"
                          />
                        </div>

                        <div className="card-body">
                          <h4 className="card-title">
                            Metha 10, 10mg/tab, 100tab
                          </h4>
                          <p className="text-d">
                            Оральные препараты, Метандиенон, Chang
                            Pharmaceuticals
                          </p>
                          <span className="price">704 ₽</span>

                          <div className="buttons">
                            <button className="btn first w-100">
                              В корзину
                            </button>
                            <Link to="/singleProd" className="btn second w-100">
                              Подробнее
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="card" style={{ marginRight: "-22px" }}>
                        <div className="card-header p-0">
                          <img
                            style={{ height: "280px", objectFit: "cover" }}
                            src="./images/home/dori.png"
                            alt="alt poduct"
                            className="card-img-top img-fluid"
                          />
                          <img
                            className="rasm btn"
                            src="./images/home/heart-crd.svg"
                            alt="rasm"
                          />
                          <img
                            src="./images/home/card-imgg.svg"
                            className="rasm btn"
                            style={{ marginTop: "42px" }}
                            alt="rasm"
                          />
                        </div>

                        <div className="card-body">
                          <h4 className="card-title">
                            Metha 10, 10mg/tab, 100tab
                          </h4>
                          <p className="text-d">
                            Оральные препараты, Метандиенон, Chang
                            Pharmaceuticals
                          </p>
                          <span className="price">704 ₽</span>

                          <div className="buttons">
                            <button className="btn first w-100">
                              В корзину
                            </button>
                            <Link to="/singleProd" className="btn second w-100">
                              Подробнее
                            </Link>
                          </div>
                        </div>
                      </div>
                      <img
                        src="./images/home/next.svg"
                        className="prev btn"
                        alt=""
                      />
                    </div>
                  </div>
                  <img
                    src="./images/home/dotes.svg"
                    className="dotes"
                    alt="dotes"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProd;
