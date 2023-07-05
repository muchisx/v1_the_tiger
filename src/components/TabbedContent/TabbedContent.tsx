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
  const [activeTab, setActiveTab] = useState<ContentProps['$keyId']>('');
  const [showTabs, setShowTabs] = useState<boolean>(false);

  useEffect(() => {
    setActiveTab(tabbedContent[0].$keyId);
  }, [tabbedContent]);

  const isMedium = useIsMedium();
  const handleTabClick = (keyId: ContentProps['$keyId']) => {
    if (isMedium || showTabs) {
      setActiveTab(keyId);
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
              isActive={activeTab === item.$keyId}
              key={item.$keyId}
              onClick={() => handleTabClick(item.$keyId)}
              isShown={showTabs}
            >
              {item.title}
            </Tab>
          ))}
        </Tabs>

        {tabbedContent.map(
          (item) =>
            activeTab === item.$keyId && (
              <Content key={item.$keyId}>
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
