import React, { Component } from "react";
import TaskFilter from "./task-filter";
import './footer.css';


export default class Footer extends Component {
	
	render() {

		const { itemsLeft, filterCompletedTasks, filterActiveTasks, filterAllTasks, clearCompleted } = this.props 

		return(
			<footer className="footer">
			<span className="todo-count">{ itemsLeft } items left</span>
		<TaskFilter 
		filterActiveTasks={filterActiveTasks}
		filterCompletedTasks={filterCompletedTasks}
		filterAllTasks={filterAllTasks}
		/>
		<button 
		className="clear-completed"
		onClick={clearCompleted}
		>Clear completed</button>
		</footer>
		)
	}
}
