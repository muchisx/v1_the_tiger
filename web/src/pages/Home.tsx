import Heading from '../components/Heading';

const homeHeading = (
  <>
    <span className="highlight-primary">FREELANCE </span> WEB DEVELOPER, REACT
    <span className="highlight-primary"> & </span>SHOPIFY EXPERT⚡
  </>
);

function Home() {
  return (
    <main className="page page--home">
      <Heading text={homeHeading} headingLevel="h1" className="hero-heading" />
    </main>
  );
}

export default Home;
