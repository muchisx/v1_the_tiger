import ComponentIsolator from '../components/ComponentIsolator';
import Logo from '../components/Logo';

function Playground() {
  return (
    <ComponentIsolator>
      <Logo isUppercase />
    </ComponentIsolator>
  );
}

export default Playground;
