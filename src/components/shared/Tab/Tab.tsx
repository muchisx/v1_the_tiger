// Dependencies
import { forwardRef } from 'react';
import { ChevronUpDown } from '@styled-icons/fluentui-system-filled';
// Styled Components
import { TabAnchor, TabStyled } from './Tab.styles';
// Types
import type { Props } from './Tab.types';

const Tab = forwardRef<HTMLLIElement, Props>((props: Props, ref) => {
  const { children, isActive, isShown, style, ...attrs } = props;

  return (
    <TabStyled isActive={isActive} isShown={isShown} ref={ref} style={style}>
      <TabAnchor role="tab" draggable={false} {...attrs}>
        {children}
        {isActive && <ChevronUpDown />}
      </TabAnchor>
    </TabStyled>
  );
});

Tab.displayName = 'Tab';

export default Tab;
