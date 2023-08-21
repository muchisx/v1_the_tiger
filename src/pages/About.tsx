// Components
import Heading from '@components/shared/Heading/Heading';
import Section from '@components/shared/Section/Section';
import ImageBanner from '@components/ImageBanner/ImageBanner';
import SplitContent from '@components/SplitContent/SplitContent';
// Assets
// TODO - Change this image to the actual one
import placeholderImageBanner from '@assets/images/hero-banner-1.jpg';
// Content
import aboutCTA from '@content/About/aboutCTA';
import aboutDescription from '@content/About/aboutDescription';
import aboutHeroHeadingText from '@content/About/aboutHeroHeadingText';

function About() {
  return (
    <main className="page page--about">
      <Section enableGutter>
        <Heading headingLevel="h1" fontSize={{ all: '4vw' }}>
          {aboutHeroHeadingText}
        </Heading>
      </Section>

      <SplitContent contain leftContent={aboutCTA.leftContent} rightContent={aboutCTA.rightContent} />
      <ImageBanner src={placeholderImageBanner} minHeight={{ all: '360px', md: '96svh' }} enableParallax />

      <SplitContent
        contain="margin"
        leftContent={aboutDescription.leftContent}
        rightContent={aboutDescription.rightContent}
        customStyles={aboutDescription.customStyles}
      />
    </main>
  );
}

export default About;
