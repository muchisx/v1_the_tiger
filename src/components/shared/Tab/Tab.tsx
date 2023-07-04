// Dependencies
import { ChevronUpDown } from '@styled-icons/fluentui-system-filled';
// Styled Components
import { TabAnchor, TabStyled } from './Tab.styles';
// Types
import type { Props } from './Tab.types';

function Tab(props: Props) {
  const { children, isActive, isShown, onClick } = props;

  const id = children.replace(' ', '').toLowerCase();
  const href = `#${id}`;

  return (
    <TabStyled isActive={isActive} isShown={isShown} onClick={onClick}>
      <TabAnchor href={href} role="tab" draggable={false}>
        {children}
        {isActive && <ChevronUpDown />}
      </TabAnchor>
    </TabStyled>
  );
}

export default Tab;
