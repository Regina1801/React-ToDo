import React, { Component } from "react";
import './task-filter.css';


export default class TaskFilter extends Component {


	render() {

		const { filterCompletedTasks, filterActiveTasks, filterAllTasks } = this.props 

		return (
			<ul className="filters">
				<li>
					<button onClick={()=>filterAllTasks()}   className="selected">All</button>
				</li>
				<li>
					<button onClick={()=>filterActiveTasks()} >Active</button>
				</li>
				<li>
					<button onClick={()=>filterCompletedTasks()}
					>Completed</button>
				</li>
			</ul>
		)
	}
}
