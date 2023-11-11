// Dependencies
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { WindowNew } from '@styled-icons/fluentui-system-filled';
// Components
import Text from '@components/shared/Text/Text';
import Button from '@components/shared/Button/Button';
import Section from '@components/shared/Section/Section';
import ImageResponsive from '@components/shared/ImageResponsive/ImageResponsive';
import VideoResponsive from '@components/shared/VideoResponsive/VideoResponsive';
// Context
import { useMediaQueryContext } from '@context/MediaQueryContext';
// Media
import poster from '@assets/images/video-poster.webp';
// Styled Components
import {
  Media,
  Content,
  TabMotion,
  TabsMotion,
  TabVariants,
  Description,
  ContentVariants,
  TabbedContentStyled,
} from './TabbedContent.styles';
// Types
import type { Props, Content as ContentProps } from './TabbedContent.types';

function TabbedContent(props: Props) {
  const { tabbedContent, contain, customStyles } = props;
  const [activeTab, setActiveTab] = useState<ContentProps['$keyId']>('');
  const [showTabs, setShowTabs] = useState<boolean>(false);
  const [canMountContent, setCanMountContent] = useState<boolean>(true);

  useEffect(() => {
    setActiveTab(tabbedContent[0].$keyId);
  }, [tabbedContent]);

  const { isMedium } = useMediaQueryContext();

  const handleTabClick = (keyId: ContentProps['$keyId']) => {
    if (isMedium || showTabs) {
      setActiveTab(keyId);
      setShowTabs(false);
      setCanMountContent(false);
    } else {
      setShowTabs(true);
    }
  };

  return (
    <Section contain={contain} enableGutter marginTop={40} marginBottom={40} customStyles={customStyles}>
      <TabbedContentStyled>
        <TabsMotion>
          {tabbedContent.map((tab) => {
            const isActive = activeTab === tab.$keyId;
            return (
              <TabMotion
                key={tab.$keyId}
                isActive={isActive}
                variants={TabVariants}
                initial={isMedium || isActive ? 'open' : 'closed'}
                animate={isMedium || isActive || showTabs ? 'open' : 'closed'}
                onClick={() => handleTabClick(tab.$keyId)}
              >
                {tab.title}
              </TabMotion>
            );
          })}
        </TabsMotion>
        <AnimatePresence onExitComplete={() => setCanMountContent(true)}>
          {tabbedContent.map(
            (item) =>
              activeTab === item.$keyId &&
              canMountContent && (
                <Content
                  key={item.mediaSource}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={ContentVariants}
                >
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
        </AnimatePresence>
      </TabbedContentStyled>
    </Section>
  );
}

export default TabbedContent;
