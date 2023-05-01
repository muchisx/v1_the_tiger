import { ArrowRight } from '@styled-icons/fluentui-system-filled';
import styled, { css } from 'styled-components';
import Button from '../Button';
import SectionStyled from '../styled/SectionStyled';

const Section = SectionStyled;

const SectionCSS = css`
  display: flex;
  justify-content: space-between;
`;

const SubSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 44%;
`;

function HomeCTA() {
  return (
    <Section css={SectionCSS} id="home-cta" enableGutter>
      <SubSection>
        <p>FREELANCE WEB DEVELOPER HARNESSING THE POWER OF CODE TO ACHIEVE YOUR ONLINE GOALS.</p>
      </SubSection>
      <SubSection>
        <p>
          I create successful digital presences for innovative startups and established businesses with robust coding
          practices on Shopify or React Development.
        </p>
        <Button text="Book a free call" role="link" to="/contact" variant="primary" Icon={ArrowRight} />
      </SubSection>
    </Section>
  );
}

export default HomeCTA;
