import Profile from "./Profile";
import React from "react";
import {connect} from "react-redux";
import {loadUserProfile} from "../../redux/profileReducer";
import {
    Navigate,
    useLocation,
    useNavigate,
    useParams
} from "react-router-dom";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const withRouter = (Component) => {
    const ComponentWithRouterProp = (props) => {
        let location = useLocation()
        let navigate = useNavigate()
        let params = useParams()
        return (
            <Component {...props} router={{location, navigate, params}} />
        )
    }

    return ComponentWithRouterProp
}

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId
        if (!userId) {
            userId = 2
        }

        this.props.loadUserProfile(userId)

    }

    render() {

        return <Profile {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profile
    }
}

export default compose(
    connect(mapStateToProps, {loadUserProfile}),
    withRouter,
    //withAuthRedirect
)(ProfileContainer)