import React from 'react'

const HOC = (WrappedComponent, entity) => {
	return class extends React.Component {
		state = {
			data: [],
			term: '',
		}
		componentDidMount() {
			const fetchData = async () => {
				const res = await fetch(`http://jsonplaceholder.typicode.com/${entity}`)
				const json = await res.json()
				this.setState({ ...this.state, data: json })
			}
			fetchData()
		}
		render() {
			let { term, data } = this.state
			let filterdData = data.slice(0, 10).filter((d) => {
				let tolower = term.toLowerCase()
				if (entity === 'users') {
					return d.username.toLowerCase().includes(tolower)
				}
				if (entity === 'todos') {
					return d.title.toLowerCase().includes(tolower)
				}
			})

			return (
				<>
					<div style={{ flexDirection: 'column' }}>
						<h1>{entity}</h1>
						<input
							type='term'
							value={term}
							name='term'
							onChange={(e) => this.setState({ ...this.state, term: e.target.value })}
							autoComplete='off'
						/>
						<WrappedComponent filteredItems={filterdData}></WrappedComponent>
					</div>
				</>
			)
		}
	}
}

export default HOC
