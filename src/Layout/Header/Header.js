import React, { Fragment} from "react";
import style from "./Header.module.css";
import image from "../../assets/images/bg.jpg";
import CartBtn from "../../components/UI/CartBtn/CartBtn";
const Header = () => {
    return (<Fragment>
        <header className={style.header}>
          <a href="fs" className={style.brand}>
            <h1><span>Healthy</span>Meals</h1>
          </a>
          <CartBtn/>
        </header>
        <div className={style["img-section"]}>
          <img src={image} alt="meals" />
        </div>
      </Fragment>)
}

export default Header
