import loader from "../../../assets/images/loader.gif";
import React from "react";
import s from './Preloader.module.css'

const Preloader = (props) => {
    return <img className={s.preloader} src={loader} />
}

export default Preloader