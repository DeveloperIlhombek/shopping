import { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { arr } from '../constants'
import Filter from './filter'
import Information from './information'
import SearchPanel from './search-panel'
import ShoppingAddForm from './shoppin-add-form'
import ShoppingList from './shopping-list'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: arr,
			search: '',
			filter: 'big-size',
		}
	}
	onDelete = id => {
		const newArr = this.state.data.filter(item => item.id !== id)
		this.setState({
			data: newArr,
		})
	}

	onToggleActive = id => {
		const newArr = this.state.data.map(item => {
			if (item.id === id) {
				return { ...item, active: !item.active }
			}
			return item
		})
		this.setState({
			data: newArr,
		})
	}

	onAdd = item => {
		const { title, number } = item
		const newData = { title, size: number, active: false, id: uuidv4() }
		const newArr = [...this.state.data, newData]
		this.setState({
			data: newArr,
		})
	}

	SearchData = (arr, term) => {
		if (term.length === 0) {
			return arr
		}
		return arr.filter(
			item => item.title.toLowerCase().indexOf(term.toLowerCase()) > -1
		)
	}
	onUpdateSearch = search => {
		this.setState({ search })
	}
	filterData = (arr, filter) => {
		switch (filter) {
			case 'completed':
				return arr.filter(item => item.active)
			case 'big-size':
				return arr.filter(item => item.size > 10)
			default:
				return arr
		}
	}
	onFilterSelect = filter => {
		this.setState({ filter })
	}
	render() {
		const { data, search, filter } = this.state
		const allData = this.filterData(this.SearchData(data, search), filter)
		return (
			<>
				<div className='app'>
					<div className='wrapper'>
						<div className='card'>
							<Information length={data.length} />
							<SearchPanel onUpdateSearch={this.onUpdateSearch} />
							<ShoppingAddForm onAdd={this.onAdd} />
							<ShoppingList
								data={allData}
								onDelete={this.onDelete}
								onToggleActive={this.onToggleActive}
							/>
							<Filter filter={filter} onFilterSelect={this.onFilterSelect} />
						</div>
						<img src='ears.svg' alt='earth' />
					</div>
				</div>
			</>
		)
	}
}

export default App
