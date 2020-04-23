import { SET_USER, SET_SELECTED_USER } from '../actionTypes/actionTypes'

const initialState = {
	users: [],
	selectedUserID: null,
}

const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER:
			return {
				...state,
				users: state.users.concat(action.payload.users)
			}
		case SET_SELECTED_USER:
			return {
				...state,
				selectedUserID: action.payload.selectedUserID
			}
		default:
			return state;
		}
}

export default userReducer;