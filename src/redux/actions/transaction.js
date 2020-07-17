import axios from 'axios'

export const Borrow = (token, id) => {
	return {
		type: 'BORROW',
		payload: axios({
			method: 'GET',
			url: `http://localhost:3000/api/transaction/borrow/${id}`,
			headers: {
				Authorization: token,
			},
		}),
	}
}

// export const Return = (token, id) => {
// 	return {
// 		type: 'RETURN',
// 		payload: axios({
// 			method: 'GET',
// 			url: `http://localhost:3000/api/transaction/borrow/${id}`,
// 			headers: {
// 				Authorization: token,
// 			},
// 		}),
// 	}
// }
