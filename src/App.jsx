import React from 'react'
import SearchTodo from './TodoList'
import TodoList from './TodoList'
import SearchUsers from './UserList'
import UserList from './UserList'

const App = () => {
	return (
		<>
			<div style={{ display: 'flex' }}>
				<SearchUsers />
				<SearchTodo />
			</div>
		</>
	)
}

export default App
