import React from 'react';
import { Input } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const AddBar = ({
  action,
  placeholder,
  handleAddInput,
  handleAddButton,
  inputValue,
}) => (
  <Input
    action={{
      color: 'teal', icon: 'plus', content: action, onClick: handleAddButton,
    }}
    placeholder={placeholder}
    style={{ width: '80%' }}
    onChange={handleAddInput}
    value={inputValue}
  />
);

AddBar.propTypes = {
  action: PropTypes.string,
  placeholder: PropTypes.string,
  handleAddInput: PropTypes.func,
  handleAddButton: PropTypes.func,
  inputValue: PropTypes.string,
};

AddBar.defaultProps = {
  action: 'Add',
  placeholder: '',
  handleAddInput: null,
  handleAddButton: null,
  inputValue: '',
};

export default AddBar;
