import Heading from '../components/Heading/Heading';
import Section from '../components/Section/Section';
import { HeroHeadingText, HomeCTA } from '../components/pages/home';
import HomeAboutMe from '../components/pages/home/HomeAboutMe';

function Home() {
  return (
    <main className="page page--home">
      <Section enableGutter marginBottom={20}>
        <Heading text={HeroHeadingText} headingLevel="h1" fontSize="6.6vw" />
      </Section>
      <HomeCTA />
      <HomeAboutMe />
    </main>
  );
}

export default Home;
