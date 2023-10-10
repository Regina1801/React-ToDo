import React, { Component } from "react";
import { formatDistanceToNow } from 'date-fns';
import './task.css';



export default class Task extends Component {

	

	// state = {
	// 	completed: false,
	// 	editing: false
	// };

	// onCheckboxClick = () => {

	// 	this.setState((state) => {
	// 		return {
	// 			completed: !state.completed
	// 		}
	// 	})
	// };

	// edit = () => {
	// 	this.setState({ editing:true })
	// }
	
	render() {
		// const currentDate = new Date();
		// const createDate = new Date('20023-10-10T21:47:00'); 
		// const time = formatDistance(createDate, currentDate);
		// console.log(time)
		// console.log(formatDistanceToNow(new Date(2014, 6, 2), { addSuffix: true }))

		const { task, onDeleted, onToggleCompleted, onToggleEdit, completed, editing, dateAdded } = this.props; 

		let classNames = 'todo-item';

		if (completed) {
			classNames += ' completed ';
		}

		if (editing) {
			classNames += ' editing ';
		}

		return (
			<div className={classNames}>
					<div className='view'>
						<input className="toggle" type="checkbox" onClick={onToggleCompleted}></input>
						<label>
							<span className="description">{task}</span>
							<span className="created">created {formatDistanceToNow(dateAdded, { includeSeconds: true })} ago</span>
						</label>
						<button onClick={onToggleEdit} className="icon icon-edit"></button>
						<button className="icon icon-destroy" onClick={onDeleted}></button>
					</div>
					<div>
						<input type="text" className="edit"></input>
					</div>
			</div>
		)
	}
}
