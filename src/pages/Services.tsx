// Components
import Divider from '@components/Divider/Divider';
import CardGrid from '@components/CardGrid/CardGrid';
import Heading from '@components/shared/Heading/Heading';
import Section from '@components/shared/Section/Section';
import ImageBanner from '@components/ImageBanner/ImageBanner';
import Accordion from '@components/shared/Accordion/Accordion';
import SplitContent, { SplitContentCustom } from '@components/SplitContent/SplitContent';
// Styled Components
import { serviceCustomCSS, serviceDividerCustomCSS } from '@content/Services/services.styles';
// Assets
import websitesboard from '@assets/images/websites-board.webp';
// Content
import sharedContact from '@content/shared/sharedContact';
import servicesWork from '@content/Services/servicesWork';
import servicesJobs from '@content/Services/servicesJobs';
import { ServicesHeroHeadingText, servicesCTA } from '@content/Services';
// Utils
import getFixedCSSvw from '@utils/getFixedCSSvw';
// Data
import servicesData from '@content/Services/services.data';
import data from '@content/Job/job.data';

const servicesContact = sharedContact('secondary');
const servicesJobsData = servicesJobs(data);

function Services() {
  return (
    <main className="page page--services">
      <Section enableGutter>
        <Heading headingLevel="h1" fontSize={{ all: getFixedCSSvw(4) }}>
          {ServicesHeroHeadingText}
        </Heading>
      </Section>
      <SplitContent
        contain
        leftContent={servicesCTA.leftContent}
        rightContent={servicesCTA.rightContent}
        customStyles={servicesCTA.customStyles}
      />
      <ImageBanner
        src={websitesboard}
        minHeight={{ all: '320px', md: '50svh', lg: '96svh' }}
        enableParallax
      />

      <Divider customStyles={serviceDividerCustomCSS} paddingBottom={60} />
      {servicesData.map((service, index) => (
        <SplitContent
          contain="padding"
          key={service.$keyId}
          customStyles={serviceCustomCSS}
          leftContent={{
            topTag: { children: `${index + 1}  /  ${servicesData.length}`, variant: 'tertiary' },
            leftHeading: {
              children: service.heading.children,
              fontSize: { all: '3.8rem', md: '4.8rem' },
            },
          }}
          rightContent={{
            rightTexts: service.texts,
            rightButtons: service.links,
          }}
        >
          <SplitContentCustom location="second">
            <Accordion accordionItems={service.features} />
          </SplitContentCustom>
        </SplitContent>
      ))}
      <Divider customStyles={serviceDividerCustomCSS} paddingBottom={116} />

      <SplitContent
        contain="padding"
        leftContent={servicesWork.leftContent}
        rightContent={servicesWork.rightContent}
        customStyles={servicesWork.customStyles}
      />

      <CardGrid
        contain="padding"
        gridAutoRows={{ md: '36vh' }}
        cardCells={servicesJobsData.cardCells}
        customStyles={servicesJobsData.customStyles}
        footerButton={servicesJobsData.footerButton}
        gridTemplateColumns={{ md: 'repeat(3, 1fr)' }}
      />

      <SplitContent
        contain="padding"
        leftContent={servicesContact.leftContent}
        rightContent={servicesContact.rightContent}
        customStyles={servicesContact.customStyles}
      />
    </main>
  );
}

export default Services;
