// Components
import ImageResponsive from '../shared/ImageResponsive/ImageResponsive';
import Section from '../shared/Section/Section';
import Text from '../shared/Text/Text';
import Tabs from '../shared/Tabs/Tabs';
// Styled Components
import { TabbedContentStyled, Content, Media, Description } from './TabbedContent.styles';
// Types
import type { Props } from './TabbedContent.types';

import placeholderImg from '../../assets/images/hero-banner-1.jpg';

function TabbedContent(props: Props) {
  const { tabbedContent, contain, customStyles } = props;
  return (
    <Section contain={contain} enableGutter marginTop={40} marginBottom={40}>
      <TabbedContentStyled>
        <Tabs tabs={[{ children: 'hey', id: '1', isActive: true }]} />
        <Content>
          <Media>
            <ImageResponsive src={placeholderImg} height="100%" width="100%" />
          </Media>
          <Description>
            <Text fontSize="2.4rem" fontWeight={500}>
              AWESOME HEADING
            </Text>
            <Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis distinctio nam aperiam ea! Expedita
              sit, temporibus sunt ducimus aliquid quia dolor ex, ipsum possimus in at earum eligendi, numquam iste?
            </Text>
          </Description>
        </Content>
      </TabbedContentStyled>
    </Section>
  );
}

export default TabbedContent;
