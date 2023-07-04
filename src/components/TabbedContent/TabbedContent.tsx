// Dependencies
import { useState, useEffect } from 'react';
// Components
import ImageResponsive from '../shared/ImageResponsive/ImageResponsive';
import Section from '../shared/Section/Section';
import Text from '../shared/Text/Text';
import Tabs from '../shared/Tabs/Tabs';
import Tab from '../shared/Tab/Tab';
// Styled Components
import { TabbedContentStyled, Content, Media, Description } from './TabbedContent.styles';
// Utils
import { useIsMedium } from '../../hooks';
// Types
import type { Props, Content as ContentProps } from './TabbedContent.types';

import placeholderImg from '../../assets/images/hero-banner-1.jpg';

function TabbedContent(props: Props) {
  const { tabbedContent, contain, customStyles } = props;
  const [activeTab, setActiveTab] = useState<ContentProps['id']>('');
  const [showTabs, setShowTabs] = useState<boolean>(false);

  useEffect(() => {
    setActiveTab(tabbedContent[0].id);
  }, [tabbedContent]);

  const isMedium = useIsMedium();
  const handleTabClick = (id: ContentProps['id']) => {
    if (isMedium || showTabs) {
      setActiveTab(id);
      setShowTabs(false);
    } else {
      setShowTabs(true);
    }
  };

  return (
    <Section contain={contain} enableGutter marginTop={40} marginBottom={40} customStyles={customStyles}>
      <TabbedContentStyled>
        <Tabs>
          {tabbedContent.map((item) => (
            <Tab
              isActive={activeTab === item.id}
              key={item.title}
              onClick={() => handleTabClick(item.id)}
              isShown={showTabs}
            >
              {item.title}
            </Tab>
          ))}
        </Tabs>

        {tabbedContent.map(
          (item) =>
            activeTab === item.id && (
              <Content key={item.title}>
                <Media>
                  <ImageResponsive src={placeholderImg} height="auto" width="100%" />
                </Media>
                <Description>
                  <Text fontSize="2.4rem" fontWeight={500}>
                    {item.title}
                  </Text>
                  <Text>{item.description}</Text>
                </Description>
              </Content>
            )
        )}
      </TabbedContentStyled>
    </Section>
  );
}

export default TabbedContent;
