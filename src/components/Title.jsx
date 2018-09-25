import React from 'react';
import { Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Title = ({
  content,
}) => <Header as="h1">{content}</Header>;

Title.propTypes = {
  content: PropTypes.string,
};

Title.defaultProps = {
  content: '',
};

export default Title;
