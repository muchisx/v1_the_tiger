import Heading from '../components/Heading';
import homeContent from './content/homeContent';

const { homeHeading } = homeContent;

function Home() {
  return (
    <main className="page page--home">
      <Heading text={homeHeading} headingLevel="h1" className="hero-heading" />
    </main>
  );
}

export default Home;
