import React from 'react';
import ReactDOM  from 'react-dom';
import TaskList from "./components/header/task-list";


const App = () => {
	return (
		<section className="todoapp">
			<TaskList />
			{/* <Footer /> */}
		</section>	
	)
}
export default App;

ReactDOM.render(<App />, document.getElementById('root'));
