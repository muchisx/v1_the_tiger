import styled from 'styled-components';
import Tab, { type Props as TabProps } from '../Tab/Tab';

type Props = {
  tabs: (TabProps & { id: string })[];
};

export const TabsStyled = styled.ul`
  display: flex;
`;

function Tabs({ tabs }: Props) {
  return (
    <TabsStyled>
      {tabs.map((tab) => (
        <Tab isActive={tab.isActive} key={tab.id}>
          {tab.children}
        </Tab>
      ))}
    </TabsStyled>
  );
}

export default Tabs;
