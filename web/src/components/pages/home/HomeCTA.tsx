import { ArrowRight } from '@styled-icons/fluentui-system-filled';
import styled, { css } from 'styled-components';
import SectionStyled from '../../styled/SectionStyled';
import Text from '../../Text';
import Button from '../../Button/Button';

const Section = SectionStyled;

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
    <Section css={SectionCSS} id="home-cta" enableGutter>
      <SubSection>
        <Text fontWeight={500}>
          EXPERIENCED WEB DEVELOPER HARNESSING THE POWER OF CODE TO ACHIEVE YOUR CREATIVE GOALS.
        </Text>
      </SubSection>
      <SubSection>
        <Text>
          I create successful digital presences for innovative startups and established businesses with robust coding
          practices on Shopify or React Development.
        </Text>
        <Button text="Book a free call" role="link" to="/contact" variant="primary" Icon={ArrowRight} />
      </SubSection>
    </Section>
  );
}

export default HomeCTA;
