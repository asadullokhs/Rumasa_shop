import React, { Component } from "react";
import Slider from "react-slick";
import "../RecCarousel/RecCarousel.scss";
import { Link } from "react-router-dom";

export default class RecCarousel extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      arrows: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="rec">
        <Slider className="slider" {...settings}>
          <div>
            <div className="card d-none">
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
                <h4 className="card-title">Metha 10, 10mg/tab, 100tab</h4>
                <p className="text-d">
                  Оральные препараты, Метандиенон, Chang Pharmaceuticals
                </p>
                <span className="price">704 ₽</span>

                <div className="buttons">
                  <button className="btn first w-100">В корзину</button>
                  <Link to="/singleProd" className="btn second w-100">
                    Подробнее
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card a1">
              <div className="card-header p-0">
                <img
                  src="./images/home/muscle.svg"
                  alt="alt poduct"
                  className="card-img-top"
                />
                <div
                  className="rasm"
                  style={{
                    background: "rgba(76, 149, 236, 1)",
                    color: "white",
                    top: "15px",
                    right: "198px",
                    width: "104px",
                    fontSize: "14px",
                    textAlign: "center",
                    padding: "3px",
                  }}
                >
                  <p className="m-0">Без рубрики</p>
                </div>
              </div>

              <div
                className="card-body p-0"
                style={{
                  boxShadow: " 0px 33px 69px 0px rgba(0, 0, 0, 0.1) ",
                }}
              >
                <h4
                  className="card-title"
                  style={{
                    borderBottom: "1px solid #D8D8D8",
                    padding: "10px",
                  }}
                >
                  Смена домена
                </h4>
                <div
                  className="author d-flex justify-content-between"
                  style={{
                    borderBottom: "1px solid #D8D8D8",
                    padding: "5px 10px",
                  }}
                >
                  <p className="text-d m-0">
                    <i className="fa-regular fa-calendar-days me-2"></i>
                    17.02.2022
                  </p>
                  <p className="text-d m-0 d-flex gap-1">
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
                </div>
                <p
                  className="text-d"
                  style={{
                    fontSize: "16px",
                    borderBottom: "1px solid #D8D8D8",
                    padding: "10px",
                  }}
                >
                  Новый адрес ru-massa.info
                </p>
                <div
                  className="icons"
                  style={{ padding: "5px", paddingLeft: "20px" }}
                >
                  <div
                    style={{
                      width: "35px",
                      background: "rgba(247, 247, 247, 1)",
                      borderRadius: "0",
                      marginRight: "10px",
                    }}
                    className=" message btn"
                  >
                    <img
                      src="./images/home/message.svg"
                      style={{ marginLeft: "-5px" }}
                      alt="s"
                    />
                  </div>
                  <div
                    style={{
                      width: "35px",
                      background: "rgba(247, 247, 247, 1)",
                      borderRadius: "0",
                    }}
                    className=" share btn"
                  >
                    <img
                      src="./images/home/share.svg"
                      style={{ marginLeft: "-5px" }}
                      alt="s"
                    />
                  </div>
                </div>

                <div className="buttons  p-3">
                  <button className="btn second w-100 m-0">Читать</button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card a2">
              <div className="card-header p-0">
                <img
                  src="./images/home/medicine.svg"
                  alt="alt poduct"
                  className="card-img-top"
                />
                <div
                  className="rasm"
                  style={{
                    background: "rgba(76, 149, 236, 1)",
                    color: "white",
                    top: "15px",
                    right: "150px",
                    width: "152px",
                    fontSize: "14px",
                    textAlign: "center",
                    padding: "3px",
                  }}
                >
                  <p className="m-0">Пополнение товара</p>
                </div>
              </div>

              <div
                className="card-body p-0"
                style={{
                  boxShadow: " 0px 33px 69px 0px rgba(0, 0, 0, 0.1) ",
                }}
              >
                <h4
                  className="card-title"
                  style={{
                    borderBottom: "1px solid #D8D8D8",
                    padding: "10px",
                  }}
                >
                  Товары
                </h4>
                <div
                  className="author d-flex justify-content-between"
                  style={{
                    borderBottom: "1px solid #D8D8D8",
                    padding: "5px 10px",
                  }}
                >
                  <p className="text-d m-0">
                    <i className="fa-regular fa-calendar-days me-2"></i>
                    27.06.2021
                  </p>
                  <p className="text-d m-0 d-flex gap-1">
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
                </div>
                <p
                  className="text-d"
                  style={{
                    fontSize: "16px",
                    borderBottom: "1px solid #D8D8D8",
                    padding: "5px",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  + Несколько товаров к ассортименту
                </p>
                <div
                  className="icons"
                  style={{ padding: "5px", paddingLeft: "20px" }}
                >
                  <div
                    style={{
                      width: "35px",
                      background: "rgba(247, 247, 247, 1)",
                      borderRadius: "0",
                      marginRight: "10px",
                    }}
                    className=" message btn"
                  >
                    <img
                      src="./images/home/message.svg"
                      style={{ marginLeft: "-5px" }}
                      alt="s"
                    />
                  </div>
                  <div
                    style={{
                      width: "35px",
                      background: "rgba(247, 247, 247, 1)",
                      borderRadius: "0",
                    }}
                    className=" share btn"
                  >
                    <img
                      src="./images/home/share.svg"
                      style={{ marginLeft: "-5px" }}
                      alt="s"
                    />
                  </div>
                </div>

                <div className="buttons  p-3">
                  <button className="btn second w-100 m-0">Читать</button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card a3">
              <div className="card-header p-0">
                <img
                  src="./images/home/muscle.svg"
                  alt="alt poduct"
                  className="card-img-top"
                />
                <div
                  className="rasm"
                  style={{
                    background: "rgba(76, 149, 236, 1)",
                    color: "white",
                    top: "15px",
                    right: "198px",
                    width: "104px",
                    fontSize: "14px",
                    textAlign: "center",
                    padding: "3px",
                  }}
                >
                  <p className="m-0">Без рубрики</p>
                </div>
              </div>

              <div
                className="card-body p-0"
                style={{
                  boxShadow: " 0px 33px 69px 0px rgba(0, 0, 0, 0.1) ",
                }}
              >
                <h4
                  className="card-title"
                  style={{
                    borderBottom: "1px solid #D8D8D8",
                    padding: "10px",
                  }}
                >
                  Смена домена
                </h4>
                <div
                  className="author d-flex justify-content-between"
                  style={{
                    borderBottom: "1px solid #D8D8D8",
                    padding: "5px 10px",
                  }}
                >
                  <p className="text-d m-0">
                    <i className="fa-regular fa-calendar-days me-2"></i>
                    17.02.2022
                  </p>
                  <p className="text-d m-0 d-flex gap-1">
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
                </div>
                <p
                  className="text-d"
                  style={{
                    fontSize: "16px",
                    borderBottom: "1px solid #D8D8D8",
                    padding: "10px",
                  }}
                >
                  Новый адрес ru-massa.info
                </p>
                <div
                  className="icons"
                  style={{ padding: "5px", paddingLeft: "20px" }}
                >
                  <div
                    style={{
                      width: "35px",
                      background: "rgba(247, 247, 247, 1)",
                      borderRadius: "0",
                      marginRight: "10px",
                    }}
                    className=" message btn"
                  >
                    <img
                      src="./images/home/message.svg"
                      style={{ marginLeft: "-5px" }}
                      alt="s"
                    />
                  </div>
                  <div
                    style={{
                      width: "35px",
                      background: "rgba(247, 247, 247, 1)",
                      borderRadius: "0",
                    }}
                    className=" share btn"
                  >
                    <img
                      src="./images/home/share.svg"
                      style={{ marginLeft: "-5px" }}
                      alt="s"
                    />
                  </div>
                </div>

                <div className="buttons  p-3">
                  <button className="btn second w-100 m-0">Читать</button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card a4" style={{ marginLeft: "20px" }}>
              <div className="card-header p-0">
                <img
                  src="./images/home/medicine.svg"
                  alt="alt poduct"
                  className="card-img-top"
                />
                <div
                  className="rasm"
                  style={{
                    background: "rgba(76, 149, 236, 1)",
                    color: "white",
                    top: "15px",
                    right: "150px",
                    width: "152px",
                    fontSize: "14px",
                    textAlign: "center",
                    padding: "3px",
                  }}
                >
                  <p className="m-0">Пополнение товара</p>
                </div>
              </div>

              <div
                className="card-body p-0"
                style={{
                  boxShadow: " 0px 33px 69px 0px rgba(0, 0, 0, 0.1) ",
                }}
              >
                <h4
                  className="card-title"
                  style={{
                    borderBottom: "1px solid #D8D8D8",
                    padding: "10px",
                  }}
                >
                  Товары
                </h4>
                <div
                  className="author d-flex justify-content-between"
                  style={{
                    borderBottom: "1px solid #D8D8D8",
                    padding: "5px 10px",
                  }}
                >
                  <p className="text-d m-0">
                    <i className="fa-regular fa-calendar-days me-2"></i>
                    27.06.2021
                  </p>
                  <p className="text-d m-0 d-flex gap-1">
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
                </div>
                <p
                  className="text-d"
                  style={{
                    fontSize: "16px",
                    borderBottom: "1px solid #D8D8D8",
                    padding: "5px",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  + Несколько товаров к ассортименту
                </p>
                <div
                  className="icons"
                  style={{ padding: "5px", paddingLeft: "20px" }}
                >
                  <div
                    style={{
                      width: "35px",
                      background: "rgba(247, 247, 247, 1)",
                      borderRadius: "0",
                      marginRight: "10px",
                    }}
                    className=" message btn"
                  >
                    <img
                      src="./images/home/message.svg"
                      style={{ marginLeft: "-5px" }}
                      alt="s"
                    />
                  </div>
                  <div
                    style={{
                      width: "35px",
                      background: "rgba(247, 247, 247, 1)",
                      borderRadius: "0",
                    }}
                    className=" share btn"
                  >
                    <img
                      src="./images/home/share.svg"
                      style={{ marginLeft: "-5px" }}
                      alt="s"
                    />
                  </div>
                </div>

                <div className="buttons  p-3">
                  <button className="btn second w-100 m-0">Читать</button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card a5">
              <div className="card-header p-0">
                <img
                  src="./images/home/muscle.svg"
                  alt="alt poduct"
                  className="card-img-top"
                />
                <div
                  className="rasm"
                  style={{
                    background: "rgba(76, 149, 236, 1)",
                    color: "white",
                    top: "15px",
                    right: "198px",
                    width: "104px",
                    fontSize: "14px",
                    textAlign: "center",
                    padding: "3px",
                  }}
                >
                  <p className="m-0">Без рубрики</p>
                </div>
              </div>

              <div
                className="card-body p-0"
                style={{
                  boxShadow: " 0px 33px 69px 0px rgba(0, 0, 0, 0.1) ",
                }}
              >
                <h4
                  className="card-title"
                  style={{
                    borderBottom: "1px solid #D8D8D8",
                    padding: "10px",
                  }}
                >
                  Смена домена
                </h4>
                <div
                  className="author d-flex justify-content-between"
                  style={{
                    borderBottom: "1px solid #D8D8D8",
                    padding: "5px 10px",
                  }}
                >
                  <p className="text-d m-0">
                    <i className="fa-regular fa-calendar-days me-2"></i>
                    17.02.2022
                  </p>
                  <p className="text-d m-0 d-flex gap-1">
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
                </div>
                <p
                  className="text-d"
                  style={{
                    fontSize: "16px",
                    borderBottom: "1px solid #D8D8D8",
                    padding: "10px",
                  }}
                >
                  Новый адрес ru-massa.info
                </p>
                <div
                  className="icons"
                  style={{ padding: "5px", paddingLeft: "20px" }}
                >
                  <div
                    style={{
                      width: "35px",
                      background: "rgba(247, 247, 247, 1)",
                      borderRadius: "0",
                      marginRight: "10px",
                    }}
                    className=" message btn"
                  >
                    <img
                      src="./images/home/message.svg"
                      style={{ marginLeft: "-5px" }}
                      alt="s"
                    />
                  </div>
                  <div
                    style={{
                      width: "35px",
                      background: "rgba(247, 247, 247, 1)",
                      borderRadius: "0",
                    }}
                    className=" share btn"
                  >
                    <img
                      src="./images/home/share.svg"
                      style={{ marginLeft: "-5px" }}
                      alt="s"
                    />
                  </div>
                </div>

                <div className="buttons  p-3">
                  <button className="btn second w-100 m-0">Читать</button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card a6">
              <div className="card-header p-0">
                <img
                  src="./images/home/medicine.svg"
                  alt="alt poduct"
                  className="card-img-top"
                />
                <div
                  className="rasm"
                  style={{
                    background: "rgba(76, 149, 236, 1)",
                    color: "white",
                    top: "15px",
                    right: "150px",
                    width: "152px",
                    fontSize: "14px",
                    textAlign: "center",
                    padding: "3px",
                  }}
                >
                  <p className="m-0">Пополнение товара</p>
                </div>
              </div>

              <div
                className="card-body p-0"
                style={{
                  boxShadow: " 0px 33px 69px 0px rgba(0, 0, 0, 0.1) ",
                }}
              >
                <h4
                  className="card-title"
                  style={{
                    borderBottom: "1px solid #D8D8D8",
                    padding: "10px",
                  }}
                >
                  Товары
                </h4>
                <div
                  className="author d-flex justify-content-between"
                  style={{
                    borderBottom: "1px solid #D8D8D8",
                    padding: "5px 10px",
                  }}
                >
                  <p className="text-d m-0">
                    <i className="fa-regular fa-calendar-days me-2"></i>
                    27.06.2021
                  </p>
                  <p className="text-d m-0 d-flex gap-1">
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
                </div>
                <p
                  className="text-d"
                  style={{
                    fontSize: "16px",
                    borderBottom: "1px solid #D8D8D8",
                    padding: "5px",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  + Несколько товаров к ассортименту
                </p>
                <div
                  className="icons"
                  style={{ padding: "5px", paddingLeft: "20px" }}
                >
                  <div
                    style={{
                      width: "35px",
                      background: "rgba(247, 247, 247, 1)",
                      borderRadius: "0",
                      marginRight: "10px",
                    }}
                    className=" message btn"
                  >
                    <img
                      src="./images/home/message.svg"
                      style={{ marginLeft: "-5px" }}
                      alt="s"
                    />
                  </div>
                  <div
                    style={{
                      width: "35px",
                      background: "rgba(247, 247, 247, 1)",
                      borderRadius: "0",
                    }}
                    className=" share btn"
                  >
                    <img
                      src="./images/home/share.svg"
                      style={{ marginLeft: "-5px" }}
                      alt="s"
                    />
                  </div>
                </div>

                <div className="buttons  p-3">
                  <button className="btn second w-100 m-0">Читать</button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card a7">
              <div className="card-header p-0">
                <img
                  src="./images/home/muscle.svg"
                  alt="alt poduct"
                  className="card-img-top"
                />
                <div
                  className="rasm"
                  style={{
                    background: "rgba(76, 149, 236, 1)",
                    color: "white",
                    top: "15px",
                    right: "198px",
                    width: "104px",
                    fontSize: "14px",
                    textAlign: "center",
                    padding: "3px",
                  }}
                >
                  <p className="m-0">Без рубрики</p>
                </div>
              </div>

              <div
                className="card-body p-0"
                style={{
                  boxShadow: " 0px 33px 69px 0px rgba(0, 0, 0, 0.1) ",
                }}
              >
                <h4
                  className="card-title"
                  style={{
                    borderBottom: "1px solid #D8D8D8",
                    padding: "10px",
                  }}
                >
                  Смена домена
                </h4>
                <div
                  className="author d-flex justify-content-between"
                  style={{
                    borderBottom: "1px solid #D8D8D8",
                    padding: "5px 10px",
                  }}
                >
                  <p className="text-d m-0">
                    <i className="fa-regular fa-calendar-days me-2"></i>
                    17.02.2022
                  </p>
                  <p className="text-d m-0 d-flex gap-1">
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
                </div>
                <p
                  className="text-d"
                  style={{
                    fontSize: "16px",
                    borderBottom: "1px solid #D8D8D8",
                    padding: "10px",
                  }}
                >
                  Новый адрес ru-massa.info
                </p>
                <div
                  className="icons"
                  style={{ padding: "5px", paddingLeft: "20px" }}
                >
                  <div
                    style={{
                      width: "35px",
                      background: "rgba(247, 247, 247, 1)",
                      borderRadius: "0",
                      marginRight: "10px",
                    }}
                    className=" message btn"
                  >
                    <img
                      src="./images/home/message.svg"
                      style={{ marginLeft: "-5px" }}
                      alt="s"
                    />
                  </div>
                  <div
                    style={{
                      width: "35px",
                      background: "rgba(247, 247, 247, 1)",
                      borderRadius: "0",
                    }}
                    className=" share btn"
                  >
                    <img
                      src="./images/home/share.svg"
                      style={{ marginLeft: "-5px" }}
                      alt="s"
                    />
                  </div>
                </div>

                <div className="buttons  p-3">
                  <button className="btn second w-100 m-0">Читать</button>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
