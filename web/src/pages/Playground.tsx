import ComponentIsolator from '../components/ComponentIsolator';
import Button from '../components/Button';
import Logo from '../components/Logo';

function Playground() {
  return (
    <ComponentIsolator>
      <Logo />
      <Button text="Hey!" type="primary" role="button" />
    </ComponentIsolator>
  );
}

export default Playground;
