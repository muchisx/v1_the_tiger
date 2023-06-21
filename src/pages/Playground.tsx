import { ArrowRight } from '@styled-icons/fluentui-system-filled';
import Button from '../components/shared/Button/Button';
import ComponentIsolator from '../components/ComponentIsolator/ComponentIsolator';

function Playground() {
  return (
    <ComponentIsolator>
      <Button role="link" variant="primary" to="www.google.com" text="hey" Icon={ArrowRight} />
    </ComponentIsolator>
  );
}

export default Playground;
