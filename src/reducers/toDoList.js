const initialState = JSON.parse(localStorage.getItem('myTodosList')) || [];

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          completed: false,
          ...action.payload,
          id: state.length === 0 ? 0 : state[state.length - 1].id + 1,
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
