let toDoId = 0;

export const addTodo = message => (dispatch) => {
  dispatch({
    type: 'ADD_TODO',
    payload: {
      id: toDoId += 1,
      message,
    },
  });
};

export const changeStatusTodo = todoId => (dispatch) => {
  dispatch({
    type: 'CHANGE_TODO',
    payload: {
      todoId,
    },
  });
};
