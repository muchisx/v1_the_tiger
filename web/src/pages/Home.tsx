import Heading from '../components/shared/Heading/Heading';
import ImageBanner from '../components/ImageBanner/ImageBanner';
import Section from '../components/shared/Section/Section';
import SplitContent from '../components/SplitContent/SplitContent';
import { HeroHeadingText, homeCTA, homeAboutMe, heroImage } from './content/Home';

function Home() {
  return (
    <main className="page page--home">
      <Section enableGutter>
        <Heading text={HeroHeadingText} headingLevel="h1" fontSize="6.5vw" />
      </Section>
      <SplitContent
        leftContent={homeCTA.leftContent}
        rightContent={homeCTA.rightContent}
        customStyles={homeCTA.customStyles}
      />
      <ImageBanner src={heroImage} enableParallax />
      <SplitContent leftContent={homeAboutMe.leftContent} rightContent={homeAboutMe.rightContent} />
    </main>
  );
}

export default Home;
