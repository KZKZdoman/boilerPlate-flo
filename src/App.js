import React from 'react';
import TodoList from './containers/TodoList/TodoList';

const App = props => (
  <div>
    <TodoList data={props} />
  </div>
);

export default App;
