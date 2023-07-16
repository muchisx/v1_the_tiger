// Dependencies
import { ChevronUpDown } from '@styled-icons/fluentui-system-filled';
// Styled Components
import { TabAnchor, TabStyled } from './Tab.styles';
// Types
import type { Props } from './Tab.types';

function Tab(props: Props) {
  const { children, isActive, isShown, ...attrs } = props;

  return (
    <TabStyled isActive={isActive} isShown={isShown}>
      <TabAnchor role="tab" draggable={false} {...attrs}>
        {children}
        {isActive && <ChevronUpDown />}
      </TabAnchor>
    </TabStyled>
  );
}

export default Tab;
