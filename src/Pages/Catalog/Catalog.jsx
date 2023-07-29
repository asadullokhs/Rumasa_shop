import React from "react";
import { Link } from "react-router-dom";
import "./Catalog.scss";

const Catalog = () => {
  return (
    <div className="catalog">
      <div className="container">
        <nav className="breadcrumb">
          <p>
            <Link to={"/"}>Главная</Link> &gt; <b>Оральные препараты</b>
          </p>
        </nav>
        <div className="all">
          <div className="first">
            <h1 className="d-block">Oральные препараты</h1>
            <div className="a d-flex justify-content-between">
              <div className="search d-flex justify-content-between">
                <p>Поиск по каталогу</p>
                <img
                  src="./images/home/lupa.svg"
                  alt="search"
                  className="lupa btn"
                />
              </div>
              <div className="drops d-flex">
                <div className="dropdown d-flex">
                  <p>Выводить:</p>
                  <button
                    className="btn dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    10
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
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
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="dropdown">
                  <button
                    class="btn p-3 m-0 dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Исходная сортировка
                  </button>
                  <ul
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="second">
            <div className="row w-100" style={{ marginBottom: "550px" }}>
              <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 d-flex left">
                <div className="cards d-flex io">
                  <div className="card">
                    <div className="card-header p-0">
                      <img
                        style={{ height: "280px", objectFit: "cover" }}
                        src="./images/home/card-img.png"
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
                        Metha 10, 10mg/caps, 100tab
                      </h4>
                      <p className="text-d">
                        Оральные препараты, Метандиенон, Chang Pharmaceuticals
                      </p>
                      <span className="price">880 ₽</span>

                      <div className="buttons">
                        <button className="btn first w-100">В корзину</button>
                        <button className="btn second w-100">Подробнее</button>
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
                      <h4 className="card-title">Metha 10, 10mg/tab, 100tab</h4>
                      <p className="text-d">
                        Оральные препараты, Метандиенон, Chang Pharmaceuticals
                      </p>
                      <span className="price">704 ₽</span>

                      <div className="buttons">
                        <button className="btn first w-100">В корзину</button>
                        <button className="btn second w-100">Подробнее</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 d-flex right"
                style={{ marginLeft: "330px" }}
              >
                <div className="cards d-flex">
                  <div className="card">
                    <div className="card-header p-0">
                      <img
                        style={{ height: "280px", objectFit: "cover" }}
                        src="./images/home/card-img.png"
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
                        Metha 10, 10mg/caps, 100caps
                      </h4>
                      <p className="text-d">
                        Оральные препараты, Метандиенон, Chang Pharmaceuticals
                      </p>
                      <span className="price">880 ₽</span>

                      <div className="buttons">
                        <button className="btn first w-100">В корзину</button>
                        <button className="btn second w-100">Подробнее</button>
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
                      <h4 className="card-title">Metha 10, 10mg/tab, 100tab</h4>
                      <p className="text-d">
                        Оральные препараты, Метандиенон, Chang Pharmaceuticals
                      </p>
                      <span className="price">704 ₽</span>

                      <div className="buttons">
                        <button className="btn first w-100">В корзину</button>
                        <button className="btn second w-100">Подробнее</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row w-100" style={{ marginBottom: "550px" }}>
              <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 d-flex left">
                <div className="cards d-flex">
                  <div className="card">
                    <div className="card-header p-0">
                      <img
                        style={{ height: "280px", objectFit: "cover" }}
                        src="./images/home/card-img.png"
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
                        Metha 10, 10mg/caps, 100tab
                      </h4>
                      <p className="text-d">
                        Оральные препараты, Метандиенон, Chang Pharmaceuticals
                      </p>
                      <span className="price">880 ₽</span>

                      <div className="buttons">
                        <button className="btn first w-100">В корзину</button>
                        <button className="btn second w-100">Подробнее</button>
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
                      <h4 className="card-title">Metha 10, 10mg/tab, 100tab</h4>
                      <p className="text-d">
                        Оральные препараты, Метандиенон, Chang Pharmaceuticals
                      </p>
                      <span className="price">704 ₽</span>

                      <div className="buttons">
                        <button className="btn first w-100">В корзину</button>
                        <button className="btn second w-100">Подробнее</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 d-flex right"
                style={{ marginLeft: "330px" }}
              >
                <div className="cards d-flex">
                  <div className="card">
                    <div className="card-header p-0">
                      <img
                        style={{ height: "280px", objectFit: "cover" }}
                        src="./images/home/card-img.png"
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
                        Metha 10, 10mg/caps, 100caps
                      </h4>
                      <p className="text-d">
                        Оральные препараты, Метандиенон, Chang Pharmaceuticals
                      </p>
                      <span className="price">880 ₽</span>

                      <div className="buttons">
                        <button className="btn first w-100">В корзину</button>
                        <button className="btn second w-100">Подробнее</button>
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
                      <h4 className="card-title">Metha 10, 10mg/tab, 100tab</h4>
                      <p className="text-d">
                        Оральные препараты, Метандиенон, Chang Pharmaceuticals
                      </p>
                      <span className="price">704 ₽</span>

                      <div className="buttons">
                        <button className="btn first w-100">В корзину</button>
                        <button className="btn second w-100">Подробнее</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row w-100">
              <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 d-flex left">
                <div className="cards d-flex">
                  <div className="card">
                    <div className="card-header p-0">
                      <img
                        style={{ height: "280px", objectFit: "cover" }}
                        src="./images/home/card-img.png"
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
                        Metha 10, 10mg/caps, 100tab
                      </h4>
                      <p className="text-d">
                        Оральные препараты, Метандиенон, Chang Pharmaceuticals
                      </p>
                      <span className="price">880 ₽</span>

                      <div className="buttons">
                        <button className="btn first w-100">В корзину</button>
                        <button className="btn second w-100">Подробнее</button>
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
                      <h4 className="card-title">Metha 10, 10mg/tab, 100tab</h4>
                      <p className="text-d">
                        Оральные препараты, Метандиенон, Chang Pharmaceuticals
                      </p>
                      <span className="price">704 ₽</span>

                      <div className="buttons">
                        <button className="btn first w-100">В корзину</button>
                        <button className="btn second w-100">Подробнее</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 d-flex right"
                style={{ marginLeft: "330px" }}
              >
                <div className="cards d-flex">
                  <div className="card">
                    <div className="card-header p-0">
                      <img
                        style={{ height: "280px", objectFit: "cover" }}
                        src="./images/home/card-img.png"
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
                        Metha 10, 10mg/caps, 100caps
                      </h4>
                      <p className="text-d">
                        Оральные препараты, Метандиенон, Chang Pharmaceuticals
                      </p>
                      <span className="price">880 ₽</span>

                      <div className="buttons">
                        <button className="btn first w-100">В корзину</button>
                        <button className="btn second w-100">Подробнее</button>
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
                      <h4 className="card-title">Metha 10, 10mg/tab, 100tab</h4>
                      <p className="text-d">
                        Оральные препараты, Метандиенон, Chang Pharmaceuticals
                      </p>
                      <span className="price">704 ₽</span>

                      <div className="buttons">
                        <button className="btn first w-100">В корзину</button>
                        <button className="btn second w-100">Подробнее</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="open btn">Открыть ещё</button>
          </div>
          <div className="third">
            <div className="text-1">
              <h1 className="d-block">Оральные стероиды: что это?</h1>
              <div className="text">
                <p>
                  {" "}
                  Анаболические стероиды уже давно стали неотъемлемой частью
                  профессионального спорта. С помощью этих препаратов атлеты
                  быстрее прогрессируют и способны показывать феноменальные
                  результаты. С развитием интернета к числу потребителей ААС
                  могут присоединиться и любители культуризма.
                </p>
                <p>
                  Бодибилдинг пользуется большой популярностью. Однако накачать
                  мышцы довольно сложно, так как организм сопротивляется этому
                  процессу. В результате начинающие билдеры сталкиваются с
                  ситуацией, в которой при затрате большого количества сил,
                  прогресс оказывается незначительным. Чтобы исправить положение
                  дел, они могут заказать таблетированные стероиды.
                </p>
                <p>
                  {" "}
                  Эти препараты основаны на дериватах мужского гормона. При их
                  использовании в организме резко увеличивается концентрация
                  свободного тестостерона, что и позволяет быстро набирать массу
                  и увеличивать силу. Не все атлеты готовы ждать длительное
                  время, пока их мышцы окрепнут с помощью натурального тренинга.
                  Чтобы ускорить этот процесс, им достаточно купить оральные
                  стероиды. Однако предварительно стоит разобраться с двумя
                  вопросами:{" "}
                </p>
                <p className="d-flex">
                  <img src="./images/home/arrow.svg" alt="right/arrow" />
                  как правильно подобрать ААС;
                </p>
                <p className="d-flex">
                  <img src="./images/home/arrow.svg" alt="right/arrow" />
                  какие стероиды в таблетках являются лучшими.
                </p>
              </div>
            </div>
            <div className="text-1">
              <h1 className="d-block">
                Эффекты от использования таблетированных стероидов
              </h1>
              <div className="text">
                <p>
                  Каждый начинающий билдер хочет заказать оральные стероиды,
                  которые окажутся максимально эффективными. Однако при этом не
                  стоит забывать, что это крайне мощные медпрепараты, способные
                  нанести вред организму. Таким образом, сначала им предстоит
                  понять, какие эффекты могут быть получены с помощью ААС в
                  таблетках. Среди них стоит отметить несколько наиболее важных:
                </p>

                <p className="d-flex">
                  <img src="./images/home/arrow.svg" alt="right/arrow" />
                  возможность набирать качественную сухую массу;
                </p>
                <p className="d-flex">
                  <img src="./images/home/arrow.svg" alt="right/arrow" />
                  быстро увеличивается сила;
                </p>
                <p className="d-flex">
                  <img src="./images/home/arrow.svg" alt="right/arrow" />
                  при грамотном приеме в организме не задерживается жидкость;
                </p>
                <p className="d-flex">
                  <img src="./images/home/arrow.svg" alt="right/arrow" />
                  ускоряются процессы липолиза;
                </p>
                <p className="d-flex">
                  <img src="./images/home/arrow.svg" alt="right/arrow" />
                  улучшается рельефность тела.
                </p>
                <p>
                  Это лишь малая часть положительных эффектов, которые могут
                  быть получены, если атлет решит купить таблетированные
                  стероиды. Если грамотно составить курс, то можно избежать
                  побочных эффектов, присущих всем медпрепаратам, включая и ААС.
                </p>
              </div>
            </div>
            <div className="text-1 border-0 p-0">
              <h1 className="d-block">Лучшие оральные стероиды</h1>
              <div className="text">
                <p>
                  Среди всех присутствующих на рынке ААС в таблетках, не все
                  стоит использовать любителям культуризма. Некоторые из них
                  отличаются большой силой воздействия на организм и могут легко
                  стать причиной развития побочек. Кроме этого такие препараты
                  являются узкоспециализированными, например, Халотестин.
                </p>
                <p>
                  Таким образом, лучшие стероиды в таблетках: Станозолол,
                  Туринабол, Метандиенон, Оксандролон.
                </p>
                <p>
                  Начать краткий обзор стоит со Станозолола. Сразу следует
                  сказать, что этот стероид не предназначен для набора массы. В
                  результате использовать его на первом курсе нецелесообразно. В
                  основе станазы лежит одноименный дериват дигидротестостерона.
                  В результате стероид не склонен к ароматизации и обладает
                  сильными жиросжигающими свойствами. Еще одним достоинством
                  этого ААС является его способность быстро увеличивать силу.
                  Рекомендуемая суточная дозировка находится в диапазоне 20-50
                  мг.
                </p>
                <p>
                  Это самый известный стероид. О нем ходит масса мифов и легенд.
                  Чтобы в последние годы не говорили о метане, он продолжает
                  оставаться одним из самых эффективных ААС. Именно благодаря
                  Метандиенону многие атлеты познакомились с миром серьезной
                  фармакологии. Этот препарат вполне подходит для первого курса.
                  С его помощью можно набрать несколько кило массы и существенно
                  увеличить силовые параметры. Суточная дозировка препарата
                  составляет 10-60 мг.
                </p>
                <p>
                  Туринабол в отличии от метана не склонен к ароматизации.
                  Благодаря этому набираемая с его помощью масса окажется более
                  качественной, но придется принести в жертву ее количество.
                  Суточная дозировка турика находится в диапазоне 20-60 мг.
                  Оксандролон – самый безопасный и легкий стероид на рынке. При
                  этом он также может быть весьма эффективным. Как и Станозолол,
                  лучше использовать его для сушки и увеличения силы.
                  Рекомендуемая дневная дозировка препарата составляет 30-80 мг.
                </p>
              </div>
            </div>
          </div>
          <div className="footer mt-5">
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
      </div>
    </div>
  );
};

export default Catalog;
