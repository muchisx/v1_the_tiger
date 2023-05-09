import { ArrowRight } from '@styled-icons/fluentui-system-filled';
import styled, { css } from 'styled-components';
import Text from '../../../components/Text/Text';
import Button from '../../../components/Button/Button';
import Section from '../../../components/Section/Section';

const SubSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 44%;
`;

const SectionCSS = css`
  display: flex;
  justify-content: space-between;
  gap: 12px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;

    & ${SubSection} {
      width: 100%;
      gap: 32px;
    }
  }
`;

function HomeCTA() {
  return (
    <Section css={SectionCSS} id="home-cta" enableGutter marginBottom={32}>
      <SubSection>
        <Text fontWeight={500}>
          SKILLED WEB DEVELOPER CAPITALIZING ON THE POTENTIAL OF CODING TO ACCOMPLISH YOUR CREATIVE ASPIRATIONS.
        </Text>
      </SubSection>
      <SubSection>
        <Text>
          I use my proficiency in Shopify or React Development and thorough coding practices to create robust digital
          presences for innovative startups and established businesses alike.
        </Text>
        <Button
          text="Reserve a free meeting"
          role="link"
          to="https://calendly.com/miguel-angel-creator/free-meeting"
          newTab
          variant="primary"
          Icon={ArrowRight}
        />
      </SubSection>
    </Section>
  );
}

export default HomeCTA;
