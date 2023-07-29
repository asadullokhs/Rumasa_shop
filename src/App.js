import React from "react";
import { Route, Routes } from "react-router-dom";
import Catalog from "./Pages/Catalog/Catalog";
import Comments from "./Pages/Comments/Comments";
import Contact from "./Pages/Contact/Contact";
import Deliver from "./Pages/Deliver/Deliver";
import Home from "./Pages/Home/Home";
import Korzina from "./Pages/Korzina/Korzina";
import LogIn from "./Pages/LogIn/LogIn";
import Order from "./Pages/Order/Order";
import Pay from "./Pages/Pay/Pay";
import Register from "./Pages/Register/Register";
import Return from "./Pages/Return/Return";
import Sale from "./Pages/Sale/Sale";
import SingleProd from "./Pages/SingleProd/SingleProd";
import News from "./Pages/News/News";
import Error from "./Pages/Error/Error";
import Adress from "./Pages/Adress/Adress";
import Thanks from "./Pages/Thanks/Thanks";
import New from "./Pages/New/New";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/singleProd" element={<SingleProd />} />
        <Route path="/order" element={<Order />} />
        <Route path="/pay" element={<Pay />} />
        <Route path="/deliver" element={<Deliver />} />
        <Route path="/return" element={<Return />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/korzina" element={<Korzina />} />
        <Route path="/news" element={<News />} />
        <Route path="*" element={<Error />} />
        <Route path="/adress" element={<Adress />} />
        <Route path="/thanks" element={<Thanks />} />
        <Route path="/new" element={<New />} />
      </Routes>
    </div>
  );
};

export default App;
