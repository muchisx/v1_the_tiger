// Dependencies
import styled from 'styled-components';
// Utils
import { getMediaQueryValue } from '@utils';
import { forwardRef } from 'react';

type Props = {
  children: React.ReactNode;
};

export const TabsStyled = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  border-radius: 8px;
  overflow: hidden;
  outline: 1px solid var(--neutral-color-quaternary);

  @media only screen and (min-width: ${getMediaQueryValue('md')}) {
    flex-direction: row;
  }
`;

const Tabs = forwardRef<HTMLUListElement, Props>(({ children }, ref) => <TabsStyled ref={ref}>{children}</TabsStyled>);

Tabs.displayName = 'Tabs';

export default Tabs;
