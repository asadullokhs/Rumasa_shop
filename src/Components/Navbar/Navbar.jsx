import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar first navbar-expand-lg navbar-light bg-white p-0">
        <div className="container">
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
          <img src="./images/home/lupa.svg" alt="search" className="a btn" />
          <button
            className="navbar-toggler p-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div className="fon">
              <span className="fa-solid fa-bars-staggered"></span>
            </div>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="search d-flex justify-content-between">
              <p>Поиск</p>
              <img
                src="./images/home/lupa.svg"
                alt="search"
                className="lupa btn"
              />
            </div>
            <div className="brands d-flex">
              <Link to="/contact" className="email">
                <img
                  src="./images/home/email.svg"
                  alt="email"
                  className="btn"
                />
              </Link>
              <div className="telegram">
                <img
                  src="./images/home/telegram.svg"
                  alt="telegram"
                  className="btn"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
      <nav className="navbar second navbar-expand-lg navbar-light bg-white">
        <div className="container">
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item color">
                <div className="other ">
                  <div className="border">
                    <img src="./images/navbar/user navbar.svg" alt="rasm" />
                  </div>
                  <div className="title">
                    <a className="log-in" href="#">
                      Войти
                    </a>
                    <b>или</b>
                    <a className="register" href="#">
                      Зарегистрироваться
                    </a>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <Link to="/catalog" className="brand btn d-flex" href="#">
                  <div className="dumaloq ">
                    <img src="./images/home/katalog 4 dotes.svg" alt="rasm" />
                  </div>
                  <p className="title ">Каталог</p>
                </Link>
              </li>
              <li className="nav-item">
                <div className="check btn d-flex" href="#">
                  <div className="dumaloq ">
                    <img src="./images/navbar/checklist.svg" alt="rasm" />
                  </div>
                  <p className="title d-flex">
                    <p>Мои</p> заказы
                  </p>
                </div>
              </li>
              <li className="nav-item">
                <div className="check btn d-flex" href="#">
                  <div className="dumaloq ">
                    <img src="./images/home/shop.svg" alt="rasm" />
                  </div>
                  <p className="title">Корзина</p>
                </div>
              </li>
              <li className="nav-item">
                <div className="check btn d-flex" href="#">
                  <div className="dumaloq ">
                    <img src="./images/navbar/heart.svg" alt="rasm" />
                  </div>
                  <p className="title d-flex">
                    <p>Списки</p> желаний
                  </p>
                </div>
              </li>
              <li className="nav-item">
                <div className="check btn d-flex" href="#">
                  <div className="dumaloq ">
                    <img src="./images/navbar/group.svg" alt="rasm" />
                  </div>
                  <p className="title d-flex">Сравнение</p>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Оральные препараты
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Инъекционные препараты
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Препараты ПКТ
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link second-link"
                  aria-current="page"
                  href="#"
                >
                  Гормон роста
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link second-link"
                  aria-current="page"
                  href="#"
                >
                  Сармы/Sarms
                </a>
              </li>
              <div className="icons d-flex">
                <div className="user btn dropdown">
                  <img
                    src="./images/home/user.svg"
                    className="dropdown-toggle"
                    id="navbarDropdown"
                    alt="user"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  />
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link
                        to="/login"
                        className="dropdown-item"
                        style={{ textDecoration: "none" }}
                      >
                        <button
                          style={{
                            width: "178px",
                            height: "50px",
                            border: "none",
                            color: "white",
                            background:
                              "linear-gradient(172deg, #D2B490 0%, #A6835A 100%)",
                          }}
                          className="button"
                        >
                          Вход
                        </button>
                      </Link>
                    </li>
                    <li>
                      <Link to="/register" className="dropdown-item">
                        <button
                          style={{
                            width: "178px",
                            height: "50px",
                            color: "rgba(187, 155, 117, 1)",
                            border: "1px solid rgba(187, 155, 117, 1)",
                          }}
                          className="button text-center bg-white"
                        >
                          Регистрация
                        </button>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="line btn">
                  <img src="./images/home/line.svg" alt="lines" />
                </div>
                <div className="heart btn">
                  <img src="./images/home/heart.svg" alt="heart" />
                </div>
                <Link to="/korzina" className="shop btn">
                  <img src="./images/home/shop.svg" alt="shoping kart" />
                </Link>
              </div>
            </ul>
            <div className="price">
              <div className="title">
                <span>0 ₽</span>
                <span className="span">
                  <b>0</b> товаров
                </span>
              </div>
            </div>
            <div className="sites d-flex">
              <div className="email">
                <img
                  src="./images/home/email.svg"
                  alt="email"
                  className="btn"
                />
              </div>
              <div className="telegram">
                <img
                  src="./images/home/telegram.svg"
                  alt="telegram"
                  className="btn"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
