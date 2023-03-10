import axios from "axios"
import { API_ROUTES } from "./constans"
const headers =  {
    'Content-Type': 'application/json',
	//Authorization: 'Bearer ' + token
}
// user routes 
export function getUser(token) {
	return axios({
      method: 'GET',
      url: API_ROUTES.GET_USER
    });
}

export function updateUser(id,name, password, age, gender) {
	return axios({
	method: "POST",
		url: API_ROUTES.SIGN_UP,
		headers: headers,
		data: {
			id : id ,
			name: name, 
			password: password,
			gender: gender,
			age: age
		}
	})
}



export function ApiLogin(name, password) {
	return axios({
        method: 'POST',
        url: API_ROUTES.SIGN_IN,
		    headers: headers,
        data: {
          name,
          password
        }
      })
}

export function ApiRigster(name, password, gender , age) {
	return axios({
        method: 'POST',
        url: API_ROUTES.SIGN_UP,
		headers: headers,
        data: {
          name,
          password,
          gender,
          age
        }
      });
}
// posts / comments 
export function getAllPosts() {
		return axios({
      method: 'GET',
      url: API_ROUTES.POSTS
    });
}

export function createPost(text) {
	return axios({
		method : "POST",
		url: API_ROUTES.CREATE_POST,
		headers: headers,
		data:{
		text: text
		}
	})
}
export function updatePost(id,text) {
	return axios({
		method : "POST",
		url: API_ROUTES.UPDATE_POST,
		headers: headers,
		data:{
    id: id,
		text: text
		}
	})
}

export function createComment(id,text) {
	return axios({
		method : "POST",
		url: API_ROUTES.CREATE_COMMENT,
		headers: headers,
		data:{
    Blog_id: id,
		text: text
		}
	})
}

export function getComments(Blog_id) {
	return axios({
		method : "GET",
		url: API_ROUTES.GET_ALL_COMMENTS + Blog_id
	})
}
