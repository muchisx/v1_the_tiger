import Section from '../components/shared/Section/Section';
import Heading from '../components/shared/Heading/Heading';
import { WorkHeroHeadingText, workCTA } from './content/Work';
import SplitContent from '../components/SplitContent/SplitContent';

function Work() {
  return (
    <main className="page page--work">
      <Section enableGutter>
        <Heading text={WorkHeroHeadingText} headingLevel="h1" fontSize="4.1vw" />
      </Section>
      <SplitContent leftContent={workCTA.leftContent} rightContent={workCTA.rightContent} />
    </main>
  );
}

export default Work;
