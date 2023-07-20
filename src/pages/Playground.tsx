import { Tent } from '@styled-icons/fluentui-system-filled';
import Button from '../components/shared/Button/Button';
import ComponentIsolator from '../components/ComponentIsolator/ComponentIsolator';

function Playground() {
  return (
    <ComponentIsolator>
      <Button role="link" variant="primary" to="/" text="hey, i'm working on this" Icon={Tent} />
    </ComponentIsolator>
  );
}

export default Playground;
