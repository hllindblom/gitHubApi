import React from 'react';
import PropTypes from 'prop-types';
import { ErrorText } from './styled';

const Error = ({ message }) => (
  <ErrorText>{message || 'oops, there was some issue'}</ErrorText>
);

Error.propTypes = {
  message: PropTypes.string,
};

export default Error;
