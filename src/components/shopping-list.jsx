import ShoppingListItem from './shopping-list-item'

const ShoppingList = ({ data, onDelete, onToggleActive }) => {
	return (
		<div className='shopping-list'>
			{data.length ? (
				data.map(item => (
					<ShoppingListItem
						item={item}
						key={item.id}
						onDeleteItem={() => onDelete(item.id)}
						onToggleActiveItem={() => onToggleActive(item.id)}
					/>
				))
			) : (
				<div className='messege'>
					<h1 className='message_title'>Tanlanganlar yo'q</h1>
				</div>
			)}
		</div>
	)
}
export default ShoppingList
