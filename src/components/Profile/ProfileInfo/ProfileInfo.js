import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div className={s.profileInfo}>
      <div>
        <img src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547__480.jpg" />
      </div>
      <div>ava + description</div>
    </div>
  );
};

export default ProfileInfo
