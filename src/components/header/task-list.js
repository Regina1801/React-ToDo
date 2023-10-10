import React, { Component } from "react";
import Task from "./task";
import Footer from "./footer";
import NewTaskForm from './new-task-form';
import './task-list.css';

export default class TaskList extends Component {
	
	maxId = 100;

	createTodoItem = (label) => {
			return {
				label,
				completed: false,
				editing: false,
				id: this.maxId++,
				dateAdded: new Date()
			}
	}

	state = {
		tasks: [
			// this.createTodoItem('Drink coffee'),
			// this.createTodoItem('Learn React'),
			// this.createTodoItem('Be happy'),
		],
		filterTasks: [],
		// completedTasks: []
	}

	deleteItem = (id) => {
		// this.setState(({ tasks }) => {
		// 	const idx = tasks.findIndex(el => (el.id === id));
		// 	const newArr = [
		// 		...tasks.slice(0, idx),
		// 		...tasks.slice(idx + 1)];

		// 	return {
		// 		tasks: newArr
		// 	}
		// })
		// this.setState(prevState => ({
		// 	tasks: prevState.tasks.filter(task => task.id !==id )
		// }))
		this.setState({
			filterTasks: this.state.filterTasks.filter(t => t.id !== id),
			tasks: this.state.tasks.filter(t => t.id !== id) 
		})
	}

	onToggleCompleted = (id) => {

		this.setState(({ tasks }) => {

			const idx = tasks.findIndex(el => (el.id === id));

			const oldItem = tasks[idx];
			const newItem = { ...oldItem, completed: !oldItem.completed };

			const newArr = [
				...tasks.slice(0, idx),
				newItem,
				...tasks.slice(idx + 1)
			];

			return {
				tasks: newArr,
				filterTasks: newArr
			}
		})

		// this.setState({
		// 	filterTasks: this.state.filterTasks.filter(t => t.id !== id),
		// 	tasks: this.state.tasks.filter(t => t.id !== id) 

		// })
		// this.setState(prevState => {
		// 	const tasks = prevState.tasks.map(task => {
		// 	  if(task.id !== id) return task;
	  
		// 	  return {
		// 		 ...task,
		// 		 completed: !task.completed  
		// 	  }
		// 	})
	  
		// 	return {
		// 		tasks: task,
		// 		filterTasks: task
		// 	}
		//  })
	}

	onToggleEdit = (id) => {

		this.setState(({ tasks }) => {
			const idx = tasks.findIndex(el => (el.id === id));

			const oldItem = tasks[idx];
			const newItem = { ...oldItem, editing: !oldItem.editing };

			const newArr = [
				...tasks.slice(0, idx),
				newItem,
				...tasks.slice(idx + 1)
			];

			return {
				tasks: newArr,
				filterTasks: newArr
			}
		})
	}

	addItem = (text) => {
		if (text) {
			const newItem = this.createTodoItem(text);
			this.setState(prevState => ({
				tasks: [...prevState.tasks, newItem],
				filterTasks: [...prevState.filterTasks, newItem],
			}))
		}
		// this.setState(({ tasks }) => {
		// 	const newArray = [
		// 		...tasks,
		// 		newItem
		// 	]
		// 	return {
		// 		tasks: newArray
		// 	}
		// })
	
	}

	filterActiveTasks = () => {
		this.setState(({ tasks }) => {
			const a = tasks.filter(task => !task.completed)
			return {
				filterTasks: a
			}
		})
	}

	filterCompletedTasks = () => {
		this.setState(({ tasks }) => {
			const a = tasks.filter(task => task.completed)
			return {
				filterTasks: a
			}
		}) 
	}

	filterAllTasks = () => {
		this.setState(({ tasks }) => {
			return {
				filterTasks: tasks
			}
		})
	}

	clearCompleted = () => {
		this.setState(({ tasks }) => {
			const a = tasks.filter(task => !task.completed)
			return {
				tasks: a,
				filterTasks: a
			}
		})
	}

	render() {

		const { tasks, filterTasks } = this.state;

		let tasksToRender;
		if (filterTasks.length) {
			tasksToRender = filterTasks
		} else {
			tasksToRender = tasks
		}

		const itemsLeft = tasks.filter((task) => !task.completed).length;


		return (
			<div>
				<div className="header">
					<h1>todos</h1>
					<NewTaskForm addItem={this.addItem} />
				</div>
				<section className="main">
					<ul className="todo-list">
						{tasksToRender.map(task => (
							<li key={task.id}>
								<Task
									dateAdded={task.dateAdded}
									editing={task.editing}
									completed={task.completed}
									task={task.label}
									onDeleted={() => this.deleteItem(task.id)}
									onToggleEdit={() => this.onToggleEdit(task.id)}
									onToggleCompleted={() => this.onToggleCompleted(task.id)}
								/>
							</li>
						))}
					</ul>
					<Footer itemsLeft={itemsLeft}
						filterActiveTasks={this.filterActiveTasks}
						filterCompletedTasks={this.filterCompletedTasks}
						filterAllTasks={this.filterAllTasks}
						clearCompleted={this.clearCompleted}
					/>
				</section>
			</div>
		)
	}
}

	// showActive = () => {

	// 	this.setState(({ tasks }) => {
	// 		const tasksCopy = [...tasks]
	// 		const newArr = tasksCopy.filter((task) => !task.completed)
	// 		return {
	// 			tasks: newArr
	// 		}
	// 	})
	// }

	// showCompleted = () => {

	// 	this.setState(({ tasks }) => {
	// 		const tasksCopy = [...tasks]
	// 		const newArr = tasksCopy.filter((task) => task.completed)
	// 		return {
	// 			tasks: newArr
	// 		}
	// 	})
	// }

	// showAll = () => {
	// 	this.setState(({ tasks }) => {
	// 		const tasksCopy = [...tasks]
	// 		return {
	// 			tasks: tasksCopy
	// 		}
	// 	}) 
	// }

	// todoFilter = (completed) => {
	// 	this.setState(({ tasks }) => {
	// 		if (completed === 'all') {
	// 			return {
	// 				tasks
	// 			}
	// 		} else {
	// 			let newTodo = [...tasks].filter(el => el.completed === completed )
	// 			return {
	// 				tasks: newTodo
	// 			}
	// 		}
	// 	})
	// }
