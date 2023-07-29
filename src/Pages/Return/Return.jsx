import React from "react";
import "./Return.scss";
import { Link } from "react-router-dom";

const Return = () => {
  return (
    <div className="return">
      <div className="container">
        <div className="breadcrumb">
          <p>
            <Link to={"/"}>Главная</Link> &gt; <b>Обмен и возрат</b>
          </p>
        </div>
        <div className="all">
          <h1>Обмен и возрат</h1>
          <div className="bottom">
            <div className="row">
              <div className="col-8 left">
                <div className="title">
                  <h2>Правила обмена и возрата товара:</h2>
                  <p>Обмен и возрат продукции надлежащего качества</p>
                </div>
                <p>
                  Приобретенные лекарственные препараты надлежащего качества не
                  подлежат возврату или обмену в соответствии с Перечнем
                  непродовольственных товаров надлежащего качества, не
                  подлежащих возврату или обмену на аналогичный товар других
                  размера, формы, габарита, фасона, расцветки или комплектации,
                  утвержденным Постановлением Правительства Российской Федерации
                  от 19 января 1998 г. N 55.
                </p>
                <p>
                  Изделия медицинского назначения входят в Перечень товаров, не
                  подлежащих возврату или обмену, согласно Постановлению
                  Правительства РФ от 19.01.96 № 55.
                </p>
              </div>
              <div className="col-4 right">
                <img src="./images/other/man.svg" alt="rasm" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Return;
