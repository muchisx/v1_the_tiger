// Dependencies
import { forwardRef, BaseHTMLAttributes } from 'react';
import styled from 'styled-components';
import { type StyledIcon } from '@styled-icons/styled-icon';
// Components
import Text from '../Text/Text';
// Types
import type { Props as CustomIconProps } from '../CustomIcon/CustomIcon.types';

type Props = {
  children: string;
  Icon: StyledIcon | CustomIconProps['svgrIcon'];
} & BaseHTMLAttributes<HTMLDivElement>;

const StyledBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: var(--btn-color-bg-primary);
  color: var(--btn-color-text-primary);
  padding: 8px 10px;
  width: fit-content;
  line-height: 1;
  border-radius: 4px;

  svg {
    height: 16px;
    width: 16px;
  }
`;

const Badge = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { children, Icon, ...attrs } = props;

  return (
    <StyledBadge ref={ref} {...attrs}>
      <Icon />
      <Text fontSize="1.4rem" fontWeight={500}>
        {children}
      </Text>
    </StyledBadge>
  );
});

Badge.displayName = 'Badge';

export default Badge;
