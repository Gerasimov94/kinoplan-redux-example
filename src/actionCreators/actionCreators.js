import { SET_USER, SET_SELECTED_USER } from '../actionTypes/actionTypes';

export function setUsers(users) {
	return {
		type: SET_USER,
		payload: {
			users,
		}
	}
}

export const setSelectedUser = (selectedUserID) => ({
	type: SET_SELECTED_USER,
	payload: {selectedUserID}
})
