import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Register from "./components/Register/Register";
import HoneyDetails from "./components/HoneyDetails/HoneyDetails";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import EmailSent from "./components/EmailSent/EmailSent";
import VerifyEmail from "./components/VerifyEmail/VerifyEmail";
import EmailVerified from "./components/EmailVerified/EmailVerified";
import Cart from "./components/Cart/Cart";
import Honey from "./components/Honey/Honey";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";

const App = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar user={user} setUser={setUser} />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" exact element={<Register />} />
          <Route path="/password/reset" exact element={<ForgotPassword />} />
          <Route path="/emailsent/:email" exact element={<EmailSent />} />
          <Route path="/verify/:email" exact element={<VerifyEmail />} />
          <Route path="/user/verify/:id/:token" exact element={<EmailVerified />} />
          <Route path="/category" exact element={<Honey user={user} />} />
          <Route
            path="/category/details"
            element={<HoneyDetails user={user} />}
          />
          <Route path="/cart" exact element={<Cart />} />
          <Route
            path="/user/resetpassword/:resettoken"
            exact
            element={<ResetPassword />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
