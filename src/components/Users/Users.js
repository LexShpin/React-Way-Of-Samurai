import s from "./Users.module.css";
import baseAvatar from "../../assets/images/baseAvatar.jpg";
import React from "react";
import {NavLink} from "react-router-dom";
import {followAPI} from "../../api/api";

const Users = (props) => {

    console.log(props)

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    const pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span onClick={ () => props.onChangePage(p) } className={props.currentPage === p && s.selectedPage}>{p} </span>
                })}
            </div>
            {props.users.map((user) => (
                <div key={user.id}>
                <span>
                <div>
                    <NavLink to={`/profile/${user.id}`}>
                        <img
                            src={
                                user.photos.small !== null ? user.photos.small : baseAvatar
                            }
                            className={s.userPhoto}
                        />
                    </NavLink>
                </div>
                <div>
                    {user.followed ? (
                        <button
                            disabled={props.following.some(id => id === user.id)}
                            onClick={() => {

                                props.unfollowUser(user.id)

                            }}
                        >
                            Unfollow
                        </button>
                    ) : (
                        <button
                            disabled={props.following.some(id => id === user.id)}
                            onClick={() => {

                                props.followUser(user.id)

                            }}
                        >
                            Follow
                        </button>
                    )}
                </div>
                </span>
                <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                </span>
                </div>
            ))}
        </div>
    )
}

export default Users