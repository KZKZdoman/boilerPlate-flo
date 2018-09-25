import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import Title from '../../components/Title';
import AddBar from '../../components/AddBar';
import ListView from '../../components/ListView';

import { addTodo, changeStatusTodo } from '../../actions/toDoList';


class TodoList extends Component {
  constructor(props) {
    super(props);
    this.setState = this.setState.bind(this);
    this.state = {
      addInputContent: '',
    };

    this.handleAddInput = this.handleAddInput.bind(this);
    this.handleAddButton = this.handleAddButton.bind(this);
    this.handleChangeStatusTodo = this.handleChangeStatusTodo.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const stringifiedTodos = JSON.stringify(nextProps.todosDatas);
    localStorage.setItem('myTodosList', stringifiedTodos);
  }

  handleAddInput(input) {
    this.setState({ addInputContent: input.target.value });
  }

  handleAddButton() {
    const { addTodoAction } = this.props;
    const { addInputContent } = this.state;

    if (addInputContent !== '') {
      addTodoAction(addInputContent);
      this.setState({ addInputContent: '' });
    }
  }

  handleChangeStatusTodo(idTodo) {
    const { changeStatusTodoAction } = this.props;
    changeStatusTodoAction(idTodo);
  }

  render() {
    const { addInputContent } = this.state;
    const { todosDatas } = this.props;

    return (
      <Grid style={{ width: '33%', border: '1px solid #01b5ad', margin: '2% 0% 0% 33%' }} centered>
        <Grid.Row>
          <Grid.Column style={{ textAlign: 'center' }}>
            <Title content="Todo List - Virtuo" />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column style={{ textAlign: 'center' }}>
            <AddBar
              action="Add"
              placeholder="Type what you want to add"
              handleAddInput={this.handleAddInput}
              handleAddButton={this.handleAddButton}
              inputValue={addInputContent}
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column style={{ textAlign: 'center' }}>
            <ListView
              todosDatas={todosDatas}
              handleChangeStatusTodo={this.handleChangeStatusTodo}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  todosDatas: state.toDoListReducer,
});

const mapDispatchToProps = dispatch => ({
  addTodoAction: addInputContent => dispatch(addTodo(addInputContent)),
  changeStatusTodoAction: id => dispatch(changeStatusTodo(id)),
});

TodoList.propTypes = {
  todosDatas: PropTypes.instanceOf(Array),
  addTodoAction: PropTypes.func,
  changeStatusTodoAction: PropTypes.func,
};

TodoList.defaultProps = {
  todosDatas: [],
  addTodoAction: null,
  changeStatusTodoAction: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
