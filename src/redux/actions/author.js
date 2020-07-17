import axios from 'axios'

export const getAuthor = (token) => {
	return {
		type: 'AUTHOR',
		payload: axios({
			method: 'GET',
			url: `${process.env.REACT_APP_API_URL}/authors`,
			headers: {
				Authorization : token
			}
		}),
	}
}

export const getDetailAuthor = (token, id) => {
	return {
		type: 'DETAIL',
		payload: axios({
			method: 'GET',
			url: `${process.env.REACT_APP_API_URL}/authors/${id}`,
			headers: {
				Authorization : token
			}
		}),
	}
}

export const insertAuthor = (token, data) => {
	return {
		type: 'INSERT',
		payload: axios({
			method: 'POST',
			url: `${process.env.REACT_APP_API_URL}/authors`,
			data: data,
			headers: {
				Authorization: token,
			},
		}),
	}
}

export const deleteAuthor = (token, id) => {
	return {
		type: 'DELETE',
		payload: axios({
			method: 'DELETE',
			url: `${process.env.REACT_APP_API_URL}/authors/${id}`,
			headers: {
				Authorization: token,
			},
		}),
	}
}

export const editAuthor = (token, id, data) => {
	return {
		type: 'EDIT',
		payload: axios({
			method: 'PUT',
			url: `${process.env.REACT_APP_API_URL}/authors/${id}`,
			data: data,
			headers: {
				Authorization: token,
			},
		}),
	}
}
