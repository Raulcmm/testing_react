export const todoReducer = (state = [], action) => {
	switch (action.type) {
		case "GET_TODOS_LS":
			return [...state, ...action.payload];

		case "ADDTODO":
			return [...state, action.payload];

		case "DELETE_TODO":
			return state.filter((todo) => todo.id !== action.payload);

		case "CHANGE_STATUS":
			return state.map((todo) =>
				todo.id === action.payload
					? {
							...todo,
							done: !todo.done,
					  }
					: todo
			);
		default:
			return state;
	}
};
