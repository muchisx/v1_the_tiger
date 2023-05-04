import Heading from '../components/Heading';
import { HeroHeadingText, HomeCTA } from '../components/pages/home';
import SectionStyled from '../components/styled/SectionStyled';

const Section = SectionStyled;

function Home() {
  return (
    <main className="page page--home">
      <Section enableGutter marginBottom={20}>
        <Heading text={HeroHeadingText} headingLevel="h1" $fontSize="6.6vw" />
      </Section>
      <HomeCTA />
    </main>
  );
}

export default Home;
