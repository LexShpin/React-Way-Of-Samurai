import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const ProfileInfo = (props) => {

    if (!props.profile.currentUser) {
        return <Preloader />
    }

  return (
    <div className={s.profileInfo}>
      {/*<div>*/}
      {/*  <img src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__480.jpg" />*/}
      {/*</div>*/}
      <div>
          <img src={props.profile.currentUser.photos.small} />
          <p>{props.profile.currentUser.fullName}</p>
          <p>{props.profile.currentUser.aboutMe}</p>
          <ProfileStatus status={'Hello, world!'} />
      </div>
    </div>
  );
};

export default ProfileInfo
