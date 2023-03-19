import React from 'react';
import ComponentIsolator from '../components/ComponentIsolator';
import Button from '../components/Button';

function Playground() {
  return (
    <ComponentIsolator>
      <Button text="Button text" />
    </ComponentIsolator>
  );
}

export default Playground;
