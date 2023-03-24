import ComponentIsolator from '../components/ComponentIsolator';
import Button from '../components/Button';
import Logo from '../components/Logo';

function Playground() {
  return (
    <ComponentIsolator>
      <Logo />
    </ComponentIsolator>
  );
}

export default Playground;
