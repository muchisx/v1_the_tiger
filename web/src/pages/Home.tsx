import Heading from '../components/Heading/Heading';
import ImageBanner from '../components/ImageBanner/ImageBanner';
import Section from '../components/Section/Section';
import SplitContent from '../components/SplitContent/SplitContent';
import { HeroHeadingText, HomeCTA, homeAboutMe, heroImage } from './content/Home';

const { leftContent, rightContent } = homeAboutMe;

function Home() {
  return (
    <main className="page page--home">
      <Section enableGutter marginBottom={20}>
        <Heading text={HeroHeadingText} headingLevel="h1" fontSize="6.6vw" />
      </Section>
      <HomeCTA />
      <ImageBanner src={heroImage} enableParallax />
      <SplitContent leftContent={leftContent} rightContent={rightContent} />
    </main>
  );
}

export default Home;
