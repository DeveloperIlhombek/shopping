import React from 'react'

class ShoppingAddForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			title: 'Buy  ',
			number: '',
		}
	}
	onChange = e => {
		this.setState({
			[e.target.name]: e.target.value,
		})
	}
	onAdd = () => {
		const data = {
			title: this.state.title,
			number: this.state.number,
		}
		if (!data.number.length || !data.title.length) {
			alert("Hammasi to'ldirilishi shart")
		} else {
			this.props.onAdd(data)
		}
	}
	render() {
		const { title, number } = this.state
		return (
			<div className='form'>
				<input
					type='text'
					name='title'
					className='title'
					placeholder='Title ...'
					onChange={this.onChange}
					value={title}
				/>
				<input
					type='number'
					className='number'
					name='number'
					placeholder='14 '
					onChange={this.onChange}
					value={number}
				/>
				<button onClick={this.onAdd}>Add</button>
			</div>
		)
	}
}
export default ShoppingAddForm
