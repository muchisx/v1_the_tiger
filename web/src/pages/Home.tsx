import Heading from '../components/shared/Heading/Heading';
import ImageBanner from '../components/ImageBanner/ImageBanner';
import Section from '../components/shared/Section/Section';
import SplitContent from '../components/SplitContent/SplitContent';
import LogoGrid from '../components/LogoGrid/LogoGrid';
import { HeroHeadingText, homeCTA, homeAboutMe, heroImage, homeLogoGrid, homeServices } from './content/Home';

function Home() {
  return (
    <main className="page page--home">
      <Section enableGutter>
        <Heading text={HeroHeadingText} headingLevel="h1" fontSize="6.5vw" />
      </Section>
      <SplitContent
        leftContent={homeCTA.leftContent}
        rightContent={homeCTA.rightContent}
        customStyles={homeCTA.customStyles}
        contain
        containType="margin"
      />
      <ImageBanner src={heroImage} enableParallax />
      <SplitContent
        leftContent={homeAboutMe.leftContent}
        rightContent={homeAboutMe.rightContent}
        contain
        containType="margin"
      />
      <LogoGrid logoUrlWithIdList={homeLogoGrid.logoUrlWithIdList} title="PROUD TO WORK WITH" />
      <SplitContent
        leftContent={homeServices.leftContent}
        rightContent={homeServices.rightContent}
        customStyles={homeServices.customStyles}
        contain
        containType="padding"
      />
    </main>
  );
}

export default Home;
