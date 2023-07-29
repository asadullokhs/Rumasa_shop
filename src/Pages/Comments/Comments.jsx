import React from "react";
import "./Comments.scss";
import { Link } from "react-router-dom";

const Comments = () => {
  return (
    <div className="comment">
      <div className="container">
        <div className="breadcrumb">
          <p>
            <Link to={"/"}>Главная</Link> &gt; <b>Отзывы</b>
          </p>
        </div>
        <h1>Отзывы</h1>
        <div className="all">
          <div className="row">
            <div className="col-5 left">
              <h2>Оставьте отзыв</h2>
              <div className="input">
                <b>Ваше имя*</b>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="form-control"
                />
              </div>
              <div className="input">
                <b>Ваш e-mail*</b>
                <input
                  type="e-mail"
                  placeholder="Ваш e-mail"
                  className="form-control"
                />
              </div>
              <div className="input">
                <b>Отзыв*</b>
                <textarea
                  cols="50"
                  className="form-control"
                  rows="10"
                ></textarea>
              </div>
              <div className="first d-flex">
                <div className="btn d-flex">
                  <img src="./images/other/paper-clip.svg" alt="nojh" />
                  <p>Выберите файл</p>
                </div>
                <b>Файл не выбран</b>
              </div>
              <button className="btn add">Добавить отзыв</button>
            </div>
            <div className="col-7 right">
              <div className="row">
                <div className="col-6">
                  <div className="first">
                    <div className="logo d-flex">
                      <img src="./images/home/icon-1.svg" alt="logo" />
                      <p>Кирилл</p>
                    </div>
                    <div className="name">
                      <p>
                        Заказывал 8 мая, сегодня забрал с почты посылку 20 мая.
                        Всё в наличии, всё целое. Спасибо за работу. Александр
                        .С. 40 лет.
                      </p>
                    </div>
                    <div className="__ab d-flex">
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
                      <p>Александр</p>
                    </div>
                    <div className="name">
                      <p>
                        Доброго времени суток. Заказывал тут раза три точно ,до
                        этого брал у паркеров. Цены адекватные, доставка
                        отличная ,не помню что бы как то приходилось ждать
                        дольше обычного ,в среднем неделя. Но еще не забывайте
                        есть почта РФ а это тема отдельная к магазину не
                        относящаяся но влияющая на сроки).
                      </p>
                    </div>
                    <div className="__ab d-flex" style={{ marginTop: "-20px" }}>
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
                      <img src="./images/home/icon 3.png" alt="logo" />
                      <p>Сергей</p>
                    </div>
                    <div className="name">
                      <p>
                        Приветствую, уважаемые. Парни просто красавцы! Все на
                        высшем уровне, как всегда. Заказ опять долетел за 5
                        дней! Только уважение и благодарность за такую работу.
                        Однозначно теперь выбор именно за этот магазин.
                      </p>
                    </div>
                    <div className="__ab d-flex" style={{ marginTop: "0" }}>
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
                <div className="col-6">
                  <div className="first">
                    <div className="logo d-flex">
                      <img src="./images/home/icon 3.png" alt="logo" />
                      <p>Антон</p>
                    </div>
                    <div className="name">
                      <p>
                        Приветствую, уважаемые. В очередной раз заказ пришел
                        четко и в самые кратчайшие сроки, за шесть дней в ЮФО.
                        Огромная благодарность парням за такую слаженную работу!
                      </p>
                    </div>
                    <div className="__ab d-flex">
                      <div className="circle btn">
                        <img
                          src="./images/home/facebook 1.svg"
                          className="face"
                          alt="facebook"
                        />
                      </div>
                    </div>
                  </div>{" "}
                  <div className="first">
                    <div className="logo d-flex">
                      <img src="./images/home/icon 2.svg" alt="logo" />
                      <p>Алексей</p>
                    </div>
                    <div className="name">
                      <p>
                        День добрый Спасибо магазину. Всё пришло вовремя и
                        качественное. Заказывал здесь впервые. Буду сотрудничать
                        и дальше. Рекомендую всем.
                      </p>
                    </div>
                    <div className="__ab d-flex" style={{ marginTop: "50px" }}>
                      <div className="circle btn">
                        <img
                          src="./images/home/facebook 1.svg"
                          className="face"
                          alt="facebook"
                        />
                      </div>
                    </div>
                  </div>{" "}
                  <div className="first">
                    <div className="logo d-flex">
                      <img src="./images/home/icon-1.svg" alt="logo" />
                      <p>Дмитрий</p>
                    </div>
                    <div className="name">
                      <p>
                        Здравствуйте. Заказ делал первый раз. Все пришло быстро
                        и качественно. Спасибо ребятам.
                      </p>
                    </div>
                    <div className="__ab d-flex" style={{ marginTop: "75px" }}>
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
                  src="./images/home/prev.svg"
                  className="btn p-0 abd"
                  alt="prev"
                />
                <img
                  src="./images/home/next.svg"
                  className="btn p-0 abc"
                  alt="prev"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
