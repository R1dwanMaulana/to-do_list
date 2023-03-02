import { useState } from "react";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";

const Home = () => {
	const [todos, setTodos] = useState([]);
	const [todo, setTodo] = useState("");

	const addTodo = () => {
		if (todo !== "") {
			setTodos([...todos, todo]);
			setTodo("");
		}
	};

	const deleteTodo = (text) => {
		const newTodos = todos.filter((todo) => {
			return todo !== text;
		});
		setTodos(newTodos);
	};

	return (
		<>
			<div className="max-w-md text-center mx-auto mt-20">
				<h1 className="text-center text-white">To-do App</h1>
				<TodoInput todo={todo} setTodo={setTodo} addTodo={addTodo} />
				<TodoList list={todos} remove={deleteTodo} />
			</div>
		</>
	);
};

export default Home;
