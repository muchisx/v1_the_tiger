import styled from 'styled-components';

type TabStyledProps = {
  isActive?: Props['isActive'];
};

export type Props = {
  children: React.ReactNode;
  isActive?: boolean;
};

export const TabStyled = styled.li<TabStyledProps>`
  box-shadow: 1px -1px 0 var(--neutral-color-quaternary);
`;

function Tab(props: Props) {
  const { children, isActive } = props;
  return <TabStyled isActive={isActive}>{children}</TabStyled>;
}

export default Tab;
