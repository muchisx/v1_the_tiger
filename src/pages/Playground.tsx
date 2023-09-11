import { Tent } from '@styled-icons/fluentui-system-filled';
import Button from '@components/shared/Button/Button';
import ComponentIsolator from '@components/ComponentIsolator/ComponentIsolator';

function Playground() {
  return (
    <main className="page page--playground">
      <ComponentIsolator>
        <Button buttonRole="link" variant="primary" to="/" text="hey, i'm working on this" Icon={Tent} />
      </ComponentIsolator>
    </main>
  );
}

export default Playground;
