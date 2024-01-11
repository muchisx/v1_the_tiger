// Components
import LogoGrid from '@components/LogoGrid/LogoGrid';
import Heading from '@components/shared/Heading/Heading';
import Section from '@components/shared/Section/Section';
import ImageBanner from '@components/ImageBanner/ImageBanner';
import SplitContent from '@components/SplitContent/SplitContent';
// Utils
import getFixedCSSvw from '@utils/getFixedCSSvw';
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
        <Heading headingLevel="h1" fontSize={{ all: getFixedCSSvw(6.4) }}>
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
      <SplitContent
        contain
        leftContent={homeAboutMe.leftContent}
        rightContent={homeAboutMe.rightContent}
        customStyles={homeAboutMe.customStyles}
      />
      <LogoGrid logoUrls={homeLogoGrid.logoUrls} title="PROUD TO WORK WITH" />
      <SplitContent
        contain="padding"
        leftContent={homeServices.leftContent}
        rightContent={homeServices.rightContent}
        customStyles={homeServices.customStyles}
      />

      <LogoGrid
        logoUrls={homeLogoGridTwo.logoUrls}
        title="DEVELOPED FOR"
        customStyles={homeLogoGridTwo.customStyles}
      />
      <SplitContent
        contain
        leftContent={homeContact.leftContent}
        rightContent={homeContact.rightContent}
        customStyles={homeContact.customStyles}
      />
    </main>
  );
}

export default Home;
