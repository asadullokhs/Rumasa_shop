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
            <div className="card a2">
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
            <div className="card a3">
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
            <div className="card a4" style={{ marginLeft: "20px" }}>
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
            <div className="card a5">
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
            <div className="card a6">
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
            <div className="card a7">
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
        </Slider>
      </div>
    );
  }
}
