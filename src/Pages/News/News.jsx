import React from "react";
import "./News.scss";
import { Link } from "react-router-dom";

const News = () => {
  return (
    <div className="novosti">
      <div className="container">
        <div className="breadcrumb">
          <p>
            <Link to={"/"}>Главная</Link> &gt; <b>Новости</b>
          </p>
        </div>
        <div className="all">
          <h1>Новости</h1>
          <div className="row">
            <div className="col-9 left">
              <div className="news">
                <div className="bottom">
                  <div className="row">
                    <div className="col-3 left d-flex">
                      <div className="cards d-flex">
                        <div className="card mt-0">
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
                                right: "158px",
                                width: "90px",
                                fontSize: "12px",
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
                              boxShadow:
                                " 0px 33px 69px 0px rgba(0, 0, 0, 0.1) ",
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

                            <div
                              className="buttons  p-3"
                              style={{ marginTop: "25px" }}
                            >
                              <button className="btn second w-100 m-0">
                                Читать
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="card mt-0">
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
                                right: "120px",
                                width: "132px",
                                fontSize: "12px",
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
                              boxShadow:
                                " 0px 33px 69px 0px rgba(0, 0, 0, 0.1) ",
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
                              <button className="btn second w-100 m-0">
                                Читать
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-3 d-flex right"
                      style={{ paddingLeft: "300px" }}
                    >
                      <div className="cards d-flex">
                        <div className="card">
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
                                right: "158px",
                                width: "90px",
                                fontSize: "12px",
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
                              boxShadow:
                                " 0px 33px 69px 0px rgba(0, 0, 0, 0.1) ",
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

                            <div
                              className="buttons  p-3"
                              style={{ marginTop: "25px" }}
                            >
                              <button className="btn second w-100 m-0">
                                Читать
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="card">
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
                                right: "120px",
                                width: "132px",
                                fontSize: "12px",
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
                              boxShadow:
                                " 0px 33px 69px 0px rgba(0, 0, 0, 0.1) ",
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
                              <button className="btn second w-100 m-0">
                                Читать
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="news">
                <div className="bottom">
                  <div className="row">
                    <div className="col-3 left d-flex">
                      <div className="cards d-flex">
                        <div className="card">
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
                                right: "158px",
                                width: "90px",
                                fontSize: "12px",
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
                              boxShadow:
                                " 0px 33px 69px 0px rgba(0, 0, 0, 0.1) ",
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

                            <div
                              className="buttons  p-3"
                              style={{ marginTop: "25px" }}
                            >
                              <button className="btn second w-100 m-0">
                                Читать
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="card">
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
                                right: "120px",
                                width: "132px",
                                fontSize: "12px",
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
                              boxShadow:
                                " 0px 33px 69px 0px rgba(0, 0, 0, 0.1) ",
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
                              <button className="btn second w-100 m-0">
                                Читать
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-3 d-flex right"
                      style={{ paddingLeft: "300px" }}
                    >
                      <div className="cards d-flex">
                        <div className="card">
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
                                right: "158px",
                                width: "90px",
                                fontSize: "12px",
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
                              boxShadow:
                                " 0px 33px 69px 0px rgba(0, 0, 0, 0.1) ",
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

                            <div
                              className="buttons  p-3"
                              style={{ marginTop: "25px" }}
                            >
                              <button className="btn second w-100 m-0">
                                Читать
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="card">
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
                                right: "120px",
                                width: "132px",
                                fontSize: "12px",
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
                              boxShadow:
                                " 0px 33px 69px 0px rgba(0, 0, 0, 0.1) ",
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
                              <button className="btn second w-100 m-0">
                                Читать
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    src="./images/other/pagenation.svg"
                    alt="page"
                    className="img btn"
                  />
                </div>
              </div>
              <div className="news">
                <div className="bottom">
                  <div className="row">
                    <div className="col-3 left d-flex">
                      <div className="cards d-flex">
                        <div className="card">
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
                                right: "158px",
                                width: "90px",
                                fontSize: "12px",
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
                              boxShadow:
                                " 0px 33px 69px 0px rgba(0, 0, 0, 0.1) ",
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

                            <div
                              className="buttons  p-3"
                              style={{ marginTop: "25px" }}
                            >
                              <button className="btn second w-100 m-0">
                                Читать
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="card">
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
                                right: "120px",
                                width: "132px",
                                fontSize: "12px",
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
                              boxShadow:
                                " 0px 33px 69px 0px rgba(0, 0, 0, 0.1) ",
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
                              <button className="btn second w-100 m-0">
                                Читать
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-3 d-flex right"
                      style={{ paddingLeft: "300px" }}
                    >
                      <div className="cards d-flex">
                        <div className="card">
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
                                right: "158px",
                                width: "90px",
                                fontSize: "12px",
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
                              boxShadow:
                                " 0px 33px 69px 0px rgba(0, 0, 0, 0.1) ",
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

                            <div
                              className="buttons  p-3"
                              style={{ marginTop: "25px" }}
                            >
                              <button className="btn second w-100 m-0">
                                Читать
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="card">
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
                                right: "120px",
                                width: "132px",
                                fontSize: "12px",
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
                              boxShadow:
                                " 0px 33px 69px 0px rgba(0, 0, 0, 0.1) ",
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
                              <button className="btn second w-100 m-0">
                                Читать
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
    </div>
  );
};

export default News;
