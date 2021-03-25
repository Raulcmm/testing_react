export const saveLocalStorage = (key, data) => {
	const dataInLocalStorage = getLocalStorage(key);
	const newTodo = [...dataInLocalStorage, data];
	localStorage.setItem(key, JSON.stringify(newTodo));
};

export const getLocalStorage = (key) => {
	return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : [];
};

export const deleteLocalStorage = (key, objToDelete) => {
	const dataInLocalStorage = getLocalStorage(key);
	const newDataToLocalStorage = dataInLocalStorage.filter(
		(obj) => obj.id !== objToDelete.id
	);
	localStorage.setItem(key, JSON.stringify(newDataToLocalStorage));
};

export const changeStatusLocalStorage = (key, data) => {
	const dataInLocalStorage = getLocalStorage(key);
	const updateTodo = dataInLocalStorage.map((itemLS) =>
		itemLS.id === data.id ? { ...data, done: !data.done } : itemLS
	);
	localStorage.setItem(key, JSON.stringify(updateTodo));
};
