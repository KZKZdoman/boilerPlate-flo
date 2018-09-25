
const initialState = JSON.parse(localStorage.getItem('myTodosList'));

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          completed: false,
          ...action.payload,
        },
      ];

    case 'CHANGE_TODO':
      return state.map(todo => ((todo.id === action.payload.todoId)
        ? { ...todo, completed: !todo.completed }
        : todo));
    default:
      return state;
  }
};
