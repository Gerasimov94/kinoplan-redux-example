import React, { useCallback } from 'react'
import { useSelector } from 'react-redux';
import { getSelectedUserID } from './selectors/userSelectors';

export default function UserRow({user, handleClickCheckbox}) {
	const selectedUserID = useSelector(getSelectedUserID);
	const isSelected = user.login.uuid === selectedUserID;
	const toggleCheckbox = useCallback(() => handleClickCheckbox(user.login.uuid), [user, handleClickCheckbox])

	return (
		<tr style={{backgroundColor: isSelected ? "#E8EAF6" : '#FFF'}}>
			<td>
				<input type="checkbox" onChange={toggleCheckbox} checked={isSelected}/>
			</td>
			<td>
				<img
					alt="user_photo"
					style={{ width: 40, height: 40, borderRadius: 50,}}
					src={user.picture ? user.picture.thumbnail : ""}
				/>
			</td>
			<td>
				{`${user.name.first} ${user.name.last}`}
			</td>
		</tr>
	)
}
