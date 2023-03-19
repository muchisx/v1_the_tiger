import React from 'react';
import PropTypes from 'prop-types';
import ComponentIsolatorStyled from './styled/ComponentIsolatorStyled';

function ComponentIsolator(props) {
  const { children } = props;
  return <ComponentIsolatorStyled>{children}</ComponentIsolatorStyled>;
}

ComponentIsolator.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ComponentIsolator;
