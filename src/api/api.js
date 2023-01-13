import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "a84c8914-9281-41ee-99de-d934c1541182"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response =>  {
                return response.data
            })
    }
}

export const authAPI = {
    me() {
       return instance.get(`auth/me`)
           .then(response => {
               return response.data
           })
    }
}

export const profileAPI = {}

export const followAPI = {
    follow(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data
            })
    }
}