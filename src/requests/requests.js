import { setUsers } from '../actionCreators/actionCreators';

export const getUsersRequest = () => async dispatch => {
	const response = await fetch('https://randomuser.me/api/?results=10&seed=abc');
	const users = await response.json();

	dispatch(setUsers(users.results));
}