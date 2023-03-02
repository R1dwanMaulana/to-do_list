const TodoInput = ({ todo, setTodo, addTodo }) => {
	return (
		<>
			<div className="flex inline-flex mx-4 mt-4 text-sm">
				<input
					onChange={(e) => {
						setTodo(e.target.value);
					}}
					value={todo}
					name="todo"
					placeholder="create a new todo"
					type="text"
					className="mt-8 py-3 px-3 mb-4 truncate leading-5 font-medium placeholder-gray-400 border-transparent text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-700 border-gray-600 focus:border-blue-500 rounded-md focus:outline-none bg-gray-800"
				/>
			</div>
			<button
				onClick={addTodo}
				className="bg-blue-500 shadow-blue-500/50 px-4 py-1 rounded-lg text-white font-semibold shadow-lg text-sm"
			>
				Add
			</button>
		</>
	);
};
export default TodoInput;
