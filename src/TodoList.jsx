import React, { useEffect, useState } from 'react'
import HOC from './HOC'

const TodoList = ({ filteredItems }) => {
	const renderData = filteredItems.map((t) => {
		return (
			<div key={t.id}>
				<h1>{t.title}</h1>
			</div>
		)
	})

	return <div>{renderData}</div>
}

const SearchTodo = HOC(TodoList, 'todos')
export default SearchTodo
