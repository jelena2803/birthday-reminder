import React from 'react'
import data from "../data.js"

const List = (props) => {
	// const { people } = props
	// display only the people's names
	// return people.map((item) => {
	// 	return <p key={item.id}>{item.name}</p>
	// })

	function compareByMonths(a, b) {
		const monthOrder = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		return monthOrder.indexOf(a.month) - monthOrder.indexOf(b.month);
	}

	data.sort(compareByMonths);

	return (
		<div className='birthdayList'>
			{data.map((person) => {
				return (
					<div className='listItem' key={person.id}>
						<p className='bName'>{person.name}</p>
						<p>{person.birthday}</p>
					</div>
				)
			})}
		</div>
	)


}



export default List