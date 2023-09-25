// Components
import CardGrid from '@components/CardGrid/CardGrid';
import Heading from '@components/shared/Heading/Heading';
import Section from '@components/shared/Section/Section';
import ImageBanner from '@components/ImageBanner/ImageBanner';
import Accordion from '@components/shared/Accordion/Accordion';
import SplitContent, { SplitContentCustom } from '@components/SplitContent/SplitContent';
// Assets
// TODO - Change this image to the actual one
import placeholderImageBanner from '@assets/images/hero-banner-1.jpg';
// Content
import aboutCTA from '@content/About/aboutCTA';
import aboutDescription from '@content/About/aboutDescription';
import aboutHeroHeadingText from '@content/About/aboutHeroHeadingText';
import sharedContact from '@content/shared/sharedContact';
import aboutPortraits from '@content/About/aboutPortraits';
import { aboutValuesCards, aboutValuesHeader } from './content/About/aboutValues';
import aboutProcess, { aboutProcessItems } from './content/About/aboutProcess';

const aboutContact = sharedContact('primary');

function About() {
  return (
    <main className="page page--about">
      <Section enableGutter>
        <Heading headingLevel="h1" fontSize={{ all: '4.3vw' }}>
          {aboutHeroHeadingText}
        </Heading>
      </Section>

      <SplitContent
        contain
        leftContent={aboutCTA.leftContent}
        rightContent={aboutCTA.rightContent}
        customStyles={aboutCTA.customStyles}
      />
      <ImageBanner src={placeholderImageBanner} minHeight={{ all: '360px', md: '96svh' }} enableParallax />

      <SplitContent
        contain="margin"
        leftContent={aboutDescription.leftContent}
        rightContent={aboutDescription.rightContent}
        customStyles={aboutDescription.customStyles}
      />

      <CardGrid
        contain="margin"
        cardCells={aboutPortraits.cardCells}
        customStyles={aboutPortraits.customStyles}
        gridAutoRows={{ all: '50vh', md: '64vh' }}
        gridTemplateColumns={{ md: '1.25fr .75fr;' }}
      />

      <SplitContent
        contain="padding"
        leftContent={aboutValuesHeader.leftContent}
        rightContent={aboutValuesHeader.rightContent}
        customStyles={aboutValuesHeader.customStyles}
      />

      <CardGrid
        contain="padding"
        gridAutoRows={{ all: 'auto' }}
        cardCells={aboutValuesCards.cardCells}
        customStyles={aboutValuesCards.customStyles}
        gridTemplateColumns={{ sm: '1fr 1fr', md: '1fr 1fr 1fr', lg: '1fr 1fr 1fr 1fr' }}
      />

      <SplitContent
        contain="margin"
        leftContent={aboutProcess.leftContent}
        rightContent={aboutProcess.rightContent}
        customStyles={aboutProcess.customStyles}
      >
        <SplitContentCustom location="second">
          <Accordion accordionItems={aboutProcessItems} />
        </SplitContentCustom>
      </SplitContent>

      <SplitContent
        contain="margin"
        leftContent={aboutContact.leftContent}
        rightContent={aboutContact.rightContent}
        customStyles={aboutContact.customStyles}
      />
    </main>
  );
}

export default About;
