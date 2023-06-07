import Section from '../components/shared/Section/Section';
import Heading from '../components/shared/Heading/Heading';
import SplitContent from '../components/SplitContent/SplitContent';
import ImageBanner from '../components/ImageBanner/ImageBanner';
import LogoGrid from '../components/LogoGrid/LogoGrid';
import {
  HomeHeroHeadingText,
  homeCTA,
  homeAboutMe,
  heroImage,
  homeLogoGrid,
  homeServices,
  homeLogoGridTwo,
  homeContact,
} from './content/Home';

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
      <ImageBanner src={heroImage} enableParallax />
      <SplitContent leftContent={homeAboutMe.leftContent} rightContent={homeAboutMe.rightContent} contain />
      <LogoGrid logoUrlWithIdList={homeLogoGrid.logoUrlWithIdList} title="PROUD TO WORK WITH" />
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
      <LogoGrid logoUrlWithIdList={homeLogoGridTwo.logoUrlWithIdList} title="TRUSTED BY" />
    </main>
  );
}

export default Home;
