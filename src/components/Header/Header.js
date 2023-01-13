import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {

    console.log(props)

    return (
        <header className={s.header}>
            <img src="https://www.logodesign.net/images/home-page-logo-03.png" />

            <div className={s.loginBlock}>
                {props.isAuth ? props.login
                    : <NavLink to={'/login'}>Login</NavLink> }
            </div>
        </header>
    )
}

export default Header