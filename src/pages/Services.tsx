// Components
import Divider from '@components/Divider/Divider';
import Heading from '@components/shared/Heading/Heading';
import Section from '@components/shared/Section/Section';
import ImageBanner from '@components/ImageBanner/ImageBanner';
import SplitContent, { SplitContentCustom } from '@components/SplitContent/SplitContent';
// Styled Components
import { serviceCustomCSS, serviceDividerCustomCSS } from '@content/Services/services.styles';
// Assets
// TODO - Change this image to the actual one
import placeholderImageBanner from '@assets/images/hero-banner-1.jpg';
// Content
import { ServicesHeroHeadingText, servicesCTA } from '@content/Services';
import sharedContact from '@content/shared/sharedContact';
// Data
import data from '@content/Services/services.data';
import Accordion from '@components/shared/Accordion/Accordion';

// TODO - Create tertiary variant of this with light greyish background
const servicesContact = sharedContact('primary');

function Services() {
  return (
    <main className="page page--services">
      <Section enableGutter>
        <Heading headingLevel="h1" fontSize={{ all: '4vw' }}>
          {ServicesHeroHeadingText}
        </Heading>
      </Section>
      <SplitContent contain leftContent={servicesCTA.leftContent} rightContent={servicesCTA.rightContent} />
      <ImageBanner src={placeholderImageBanner} minHeight={{ all: '360px', md: '96svh' }} enableParallax />

      <Divider customStyles={serviceDividerCustomCSS} paddingBottom={60} />
      {data.map((service, index) => (
        <SplitContent
          customStyles={serviceCustomCSS}
          contain="padding"
          key={service.$keyId}
          leftContent={{
            topTag: { children: `${index + 1}  /  ${data.length}`, variant: 'tertiary' },
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
        leftContent={servicesContact.leftContent}
        rightContent={servicesContact.rightContent}
        customStyles={servicesContact.customStyles}
        contain="padding"
      />
    </main>
  );
}

export default Services;
