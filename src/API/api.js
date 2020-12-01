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
		return instance.delete(`follow/${userID}`)
			.then(response => response.data)
	},
	followUsers(userID) {
		return instance.post(`follow/${userID}`)
			.then(response => response.data)
	}
}

export const authAPI = {
	auth() {
		return instance.get(`auth/me`)
			.then(response => response.data)
	}
}

export const profileAPI = {
	getProfileInfo(userID) {
		return instance.get(`profile/${userID}`).then(response => response.data);
	}
}