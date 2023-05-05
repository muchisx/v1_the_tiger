import Heading from '../components/Heading/Heading';
import Section from '../components/Section/Section';
import { HeroHeadingText, HomeCTA } from '../components/pages/home';

function Home() {
  return (
    <main className="page page--home">
      <Section enableGutter marginBottom={20}>
        <Heading text={HeroHeadingText} headingLevel="h1" fontSize="6.6vw" />
      </Section>
      <HomeCTA />
    </main>
  );
}

export default Home;
