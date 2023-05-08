import styled, { css } from 'styled-components';
import { ArrowRight } from '@styled-icons/fluentui-system-filled';
import Button from '../../Button/Button';
import Section from '../../Section/Section';
import Text from '../../Text/Text';
import ImageMasked from '../../ImageMasked/ImageMasked';
import ProfilePicture from '../../../assets/images/profile-pic.jpeg';

const SubSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ImageMaskedCSS = css`
  position: absolute;
  right: 0;
  top: 0;
`;

const SectionCSS = css`
  display: flex;
  justify-content: space-between;
  gap: 6rem;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }

  ${SubSection} {
    position: relative;
    flex: 1;
  }
`;

function HomeAboutMe() {
  return (
    <Section css={SectionCSS} contain enableGutter>
      <SubSection>
        <Button text="About me" variant="tertiary" role="link" to="/about" />
        <Text>Socials</Text>
        <Button text="Github" variant="quaternary" role="link" to="https://github.com/muchisx" newTab />
        <Button
          text="LinkedIn"
          variant="quaternary"
          role="link"
          to="https://www.linkedin.com/in/miguelangelpro/"
          newTab
        />
        <ImageMasked height={144} width={144} src={ProfilePicture} css={ImageMaskedCSS} />
      </SubSection>
      <SubSection>
        <Text fontWeight={500}>
          I&#39;m glad you&#39;re here! <br /> My name is Miguel Ángel, and as a dedicated and imaginative freelance Web
          Developer, my goal is to develop projects that I can take pride in. I am a member Shopify Partners Program,
          adept at in React Development, and I excel at creating digital services that include stunning user interfaces
          and reliable code.
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
