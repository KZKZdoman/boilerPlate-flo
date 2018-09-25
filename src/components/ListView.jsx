import React from 'react';
import { List, Checkbox } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const ListView = ({
  todosDatas,
  handleChangeStatusTodo,
}) => (
  <List divided relaxed>
    {
    todosDatas.map(todoObject => (
      <List.Item key={todoObject.id}>
        <List.Content
          style={{
            float: 'left',
            textDecoration: todoObject.completed ? 'line-through' : 'none',
          }}
        >
          {todoObject.message}
        </List.Content>
        <Checkbox
          style={{ marginRight: '15px', float: 'right' }}
          toggle
          onChange={() => handleChangeStatusTodo(todoObject.id)}
          checked={todoObject.completed}
        />
      </List.Item>
    ))
  }
  </List>
);

ListView.propTypes = {
  todosDatas: PropTypes.instanceOf(Array),
  handleChangeStatusTodo: PropTypes.func,
};

ListView.defaultProps = {
  todosDatas: [],
  handleChangeStatusTodo: null,
};

export default ListView;
