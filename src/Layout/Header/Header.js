import React, { Fragment} from "react";
import style from "./Header.module.css";
import CartBtn from "../../components/UI/CartBtn/CartBtn";
const Header = (props) => {
    return (<Fragment>
        <header className={style.header}>
          <a href="fs" className={style.brand}>
            <h1><span>Healthy</span>Meals</h1>
          </a>
          <CartBtn onClick={props.onShowModal}/>
        </header>
        <div className={style["img-section"]}></div>
      </Fragment>)
}

export default Header
