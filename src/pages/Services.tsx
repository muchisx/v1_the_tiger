// Components
import Section from '@components/shared/Section/Section';
import Heading from '@components/shared/Heading/Heading';
import SplitContent, { SplitContentCustom } from '@components/SplitContent/SplitContent';
import ImageBanner from '@components/ImageBanner/ImageBanner';
// Styled Components
import serviceCustomCSS from '@content/Services/services.styles';
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
        <Heading text={ServicesHeroHeadingText} headingLevel="h1" fontSize="4vw" />
      </Section>
      <SplitContent contain leftContent={servicesCTA.leftContent} rightContent={servicesCTA.rightContent} />
      <ImageBanner src={placeholderImageBanner} minHeight={{ all: '360px', md: '96svh' }} enableParallax />

      {data.map((service, index) => (
        <SplitContent
          customStyles={serviceCustomCSS}
          contain="margin"
          key={service.$keyId}
          leftContent={{
            topTag: { children: `${index + 1}   /   ${data.length}`, variant: 'tertiary' },
            leftHeading: {
              text: service.heading.text,
              fontSize: '4.8rem',
            },
          }}
          rightContent={{
            rightTexts: service.texts,
            rightButtons: service.links,
          }}
        >
          <SplitContentCustom location="second">
            <Accordion />
          </SplitContentCustom>
        </SplitContent>
      ))}
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
