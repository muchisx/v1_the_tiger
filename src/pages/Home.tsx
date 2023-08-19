// Components
import LogoGrid from '@components/LogoGrid/LogoGrid';
import Heading from '@components/shared/Heading/Heading';
import Section from '@components/shared/Section/Section';
import ImageBanner from '@components/ImageBanner/ImageBanner';
import SplitContent from '@components/SplitContent/SplitContent';
// Content
import {
  homeCTA,
  homeAboutMe,
  homeLogoGrid,
  homeServices,
  homeLogoGridTwo,
  homeImageBanner,
  HomeHeroHeadingText,
} from './content/Home';
import sharedContact from './content/shared/sharedContact';

const homeContact = sharedContact('primary');

function Home() {
  return (
    <main className="page page--home">
      <Section enableGutter>
        <Heading headingLevel="h1" fontSize="6.4vw">
          {HomeHeroHeadingText}
        </Heading>
      </Section>
      <SplitContent
        contain
        leftContent={homeCTA.leftContent}
        rightContent={homeCTA.rightContent}
        customStyles={homeCTA.customStyles}
      />
      <ImageBanner
        enableParallax
        src={homeImageBanner.src}
        minHeight={{ md: '560px' }}
        customStyles={homeImageBanner.customStyles}
      />
      <SplitContent leftContent={homeAboutMe.leftContent} rightContent={homeAboutMe.rightContent} contain />
      <LogoGrid logoUrls={homeLogoGrid.logoUrls} title="PROUD TO WORK WITH" />
      <SplitContent
        contain="padding"
        leftContent={homeServices.leftContent}
        rightContent={homeServices.rightContent}
        customStyles={homeServices.customStyles}
      />
      <SplitContent
        contain
        leftContent={homeContact.leftContent}
        rightContent={homeContact.rightContent}
        customStyles={homeContact.customStyles}
      />
      <LogoGrid logoUrls={homeLogoGridTwo.logoUrls} title="TRUSTED BY" />
    </main>
  );
}

export default Home;
