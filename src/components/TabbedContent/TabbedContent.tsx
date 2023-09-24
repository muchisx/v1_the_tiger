// Dependencies
import { useState, useEffect } from 'react';
import { WindowNew } from '@styled-icons/fluentui-system-filled';
// Components
import Tab from '@components/shared/Tab/Tab';
import Text from '@components/shared/Text/Text';
import Tabs from '@components/shared/Tabs/Tabs';
import Button from '@components/shared/Button/Button';
import Section from '@components/shared/Section/Section';
import ImageResponsive from '@components/shared/ImageResponsive/ImageResponsive';
import VideoResponsive from '@components/shared/VideoResponsive/VideoResponsive';
// Utils
import { useIsMedium } from '@hooks';
// Media
import poster from '@assets/images/video-poster.webp';
// Styled Components
import { TabbedContentStyled, Content, Media, Description } from './TabbedContent.styles';
// Types
import type { Props, Content as ContentProps } from './TabbedContent.types';

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
              key={item.$keyId}
              isShown={showTabs}
              isActive={activeTab === item.$keyId}
              onClick={() => handleTabClick(item.$keyId)}
            >
              {item.title}
            </Tab>
          ))}
        </Tabs>

        {tabbedContent.map(
          (item) =>
            activeTab === item.$keyId && (
              <Content key={item.mediaSource}>
                <Media>
                  {item.mediaIs === 'image' ? (
                    <ImageResponsive src={item.mediaSource} height="auto" width="100%" />
                  ) : (
                    <VideoResponsive
                      loop
                      muted
                      controls
                      autoPlay
                      playsInline
                      width="100%"
                      height="auto"
                      poster={poster}
                      preload="metadata"
                      $src={{ srcType: item.mediaType, srcURL: item.mediaSource }}
                    />
                  )}
                </Media>
                <Description>
                  <Text fontSize="2.4rem" fontWeight={500}>
                    {item.title}
                  </Text>
                  <Text>{item.description}</Text>
                  <Button
                    newTab
                    buttonRole="link"
                    Icon={WindowNew}
                    text="Expand media"
                    variant="quaternary"
                    to={item.mediaSource}
                  />
                </Description>
              </Content>
            )
        )}
      </TabbedContentStyled>
    </Section>
  );
}

export default TabbedContent;
