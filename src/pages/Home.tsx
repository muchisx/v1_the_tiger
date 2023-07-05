// Components
import Section from '../components/shared/Section/Section';
import Heading from '../components/shared/Heading/Heading';
import SplitContent from '../components/SplitContent/SplitContent';
import ImageBanner from '../components/ImageBanner/ImageBanner';
import LogoGrid from '../components/LogoGrid/LogoGrid';
// Content
import {
  HomeHeroHeadingText,
  homeCTA,
  homeAboutMe,
  homeImageBanner,
  homeLogoGrid,
  homeServices,
  homeLogoGridTwo,
} from './content/Home';
import sharedContact from './content/shared/sharedContact';

const homeContact = sharedContact('primary');

function Home() {
  return (
    <main className="page page--home">
      <Section enableGutter>
        <Heading text={HomeHeroHeadingText} headingLevel="h1" fontSize="6.4vw" />
      </Section>
      <SplitContent
        leftContent={homeCTA.leftContent}
        rightContent={homeCTA.rightContent}
        customStyles={homeCTA.customStyles}
        contain
      />
      <ImageBanner
        src={homeImageBanner.src}
        enableParallax
        customStyles={homeImageBanner.customStyles}
        minHeight={{ md: '560px' }}
      />
      <SplitContent leftContent={homeAboutMe.leftContent} rightContent={homeAboutMe.rightContent} contain />
      <LogoGrid logoUrls={homeLogoGrid.logoUrls} title="PROUD TO WORK WITH" />
      <SplitContent
        leftContent={homeServices.leftContent}
        rightContent={homeServices.rightContent}
        customStyles={homeServices.customStyles}
        contain="padding"
      />
      <SplitContent
        leftContent={homeContact.leftContent}
        rightContent={homeContact.rightContent}
        customStyles={homeContact.customStyles}
        contain
      />
      <LogoGrid logoUrls={homeLogoGridTwo.logoUrls} title="TRUSTED BY" />
    </main>
  );
}

export default Home;
