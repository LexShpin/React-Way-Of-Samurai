import Header from "./Header";
import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import {setUserData} from "../../redux/authReducer";
import {authAPI} from "../../api/api";

class HeaderContainer extends React.Component {

    componentDidMount() {
        authAPI.me()
            .then(data => {
                if (data.resultCode === 0) {
                    const {id, email, login} = data.data
                    this.props.setUserData(id, email, login)
                }
            })
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
        email: state.auth.email,
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {setUserData})(HeaderContainer)