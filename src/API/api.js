import * as axios from "axios";

const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: {
		"API-KEY": "fbd50cec-d9d2-4746-bd80-8a7a5c4716eb"
	}
})

export const userAPI = {
	getUsers(currentPage = 1, pageSize = 10) {
		return instance.get(`users?count=${pageSize}&page=${currentPage}`).then(response => response.data)
	},
	unFollowUsers(userID) {
		return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userID}`)
			.then(response => response.data)
	},
	followUsers(userID) {
		return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userID}`)
			.then(response => response.data)
	}
}

export const authAPI = {
	auth() {
		return instance.get(`https://social-network.samuraijs.com/api/1.0/auth/me`)
			.then(response => response.data)
	}
}