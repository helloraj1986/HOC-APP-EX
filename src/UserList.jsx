import React, { useEffect, useState } from 'react'
import HOC from './HOC'

const UserList = ({ filteredItems }) => {
	const renderData = filteredItems.map((d) => {
		return (
			<div key={d.id}>
				<h1>{d.username}</h1>
			</div>
		)
	})

	return (
		<>
			<div>{renderData}</div>
		</>
	)
}

const SearchUsers = HOC(UserList, 'users')
export default SearchUsers
