import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': "61a85229-b4b8-466c-bdab-73558be2260a"
  },
})

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data
      })
  },
  follow(userId) {
    return instance.post(`follow/${userId}`)
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`)
  },
  profile(userId) {
    console.log('Attention! Please use profileAPI.')
    return profileAPI.profile(userId)
  }
}

export const profileAPI = {
  profile(userId) {
    return instance.get(`profile/${userId}`)
  },
  getStatus(userId = 13479) {
    return instance.get('/profile/status/' + userId)
  },
  updateStatus(status) {
    return instance.put('/profile/status', { status: status } )
  }
}

export const getAuth = {
  me() {
    return instance.get('auth/me')
  },
  login(email, password, rememberMe = false) {
    return instance.post('auth/login', {email, password, rememberMe})
  },
  logout() {
    return instance.delete('auth/login')
  },
  captcha() {
    return instance.get('/security/get-captcha-url')
  }
}