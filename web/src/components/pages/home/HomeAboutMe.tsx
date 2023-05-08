import styled, { css } from 'styled-components';
import { ArrowRight } from '@styled-icons/fluentui-system-filled';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '../../Button/Button';
import Section from '../../Section/Section';
import Text from '../../Text/Text';
import ImageMasked from '../../ImageMasked/ImageMasked';
import ProfilePicture from '../../../assets/images/profile-pic.jpeg';
import AbstractShape from '../../../assets/svgs/abstract-1.svg';

const ImageMaskedCSS = css`
  position: absolute;
  right: 0;
  top: 0;
`;

const ButtonsHeading = styled(Text)`
  width: 100%;
`;

const ButtonsContainer = styled.div`
  margin-top: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const SubSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const BackgroundShape = styled(motion.img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  opacity: 0.1;
  transform: rotate(180deg);

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const SectionCSS = css`
  display: flex;
  justify-content: space-between;
  gap: 6rem;
  position: relative;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }

  ${SubSection} {
    position: relative;
    flex: 1;
  }
`;
function HomeAboutMe() {
  const { scrollYProgress } = useScroll();
  const shapeRotation = useTransform(scrollYProgress, [0, 1], [180, 192]);

  return (
    <Section css={SectionCSS} contain enableGutter>
      <BackgroundShape src={AbstractShape} style={{ rotateZ: shapeRotation }} />
      <SubSection>
        <Button text="About me" variant="tertiary" role="link" to="/about" />
        <ButtonsContainer>
          <ButtonsHeading>Socials</ButtonsHeading>
          <Button
            text="LinkedIn"
            variant="quaternary"
            role="link"
            to="https://www.linkedin.com/in/miguelangelpro/"
            newTab
          />
          <Button text="Github" variant="quaternary" role="link" to="https://github.com/muchisx" newTab />
        </ButtonsContainer>
        <ImageMasked height={144} width={144} src={ProfilePicture} css={ImageMaskedCSS} />
      </SubSection>
      <SubSection>
        <Text fontWeight={500}>
          I&#39;m glad you&#39;re here! <br />
          My name is Miguel Ángel, and as a dedicated and imaginative freelance Web Developer, my goal is to develop
          projects that I can take pride in. I am a member Shopify Partners Program, adept at in React Development, and
          I excel at creating digital services that include stunning user interfaces and reliable code.
        </Text>
        <Text>
          Driven by passion for technology and a focus on Shopify and React development, I craft stunning digital
          experiences that deliver real-world value for my clients and their end-users. I place a strong emphasis on
          collaboration, partnering closely with clients to create custom solutions that perfectly meet their needs and
          exceed their goals.
        </Text>
        <Button text="Get the full story" role="link" variant="secondary" to="/about" Icon={ArrowRight} />
      </SubSection>
    </Section>
  );
}

export default HomeAboutMe;
