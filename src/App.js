import React, { useEffect, useCallback } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersRequest } from './requests/requests';
import { getUsers } from './selectors/userSelectors';
import UserRow from './UserRow';
import { setSelectedUser } from './actionCreators/actionCreators';

function App() {
	const dispatch = useDispatch();
	const users = useSelector(getUsers)
	const handleClickCheckbox = useCallback((id) => {
		dispatch(setSelectedUser(id))
	}, [dispatch]);

	useEffect(() => {
		dispatch(getUsersRequest());
	}, [dispatch]);

	return (
		<table>
			<thead>
				<tr>
					<th>
						Photo
					</th>
					<th style={{textAlign: 'left'}}>
						Name
					</th>
				</tr>
			</thead>
			<tbody>
				{users.length ? users.map((user) => (
					<UserRow user={user} key={user.login.uuid} handleClickCheckbox={handleClickCheckbox} />
				)) : null}
			</tbody>
		</table>
	);
}

export default App;
