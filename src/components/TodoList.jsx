const TodoList = ({ list, remove }) => {
	return (
		<>
			{list?.length > 0 ? (
				<ul>
					{list.map((entry, index) => (
						<div className="lg:mx-auto md:mx-auto flex mx-4 bg-gray-800 shadow-lg sm:w-4/6 justify-between mt-3 p-2 rounded-lg ">
							<li className="text-white mx-2" key={index}>
								{entry}
							</li>
							<button
								onClick={() => {
									remove(entry);
								}}
								className="mx-2 px-1 py-1 bg-red-500 rounded-md font-semibold text-white text-sm"
							>
								Delete
							</button>
						</div>
					))}
				</ul>
			) : (
				<div>
					<p className="text-center mt-3 text-white text-sm font-semibold text-blue-400">
						no task found
					</p>
				</div>
			)}
		</>
	);
};

export default TodoList;
