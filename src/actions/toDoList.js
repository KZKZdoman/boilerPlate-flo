export const addTodo = message => (dispatch) => {
  dispatch({
    type: 'ADD_TODO',
    payload: {
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
