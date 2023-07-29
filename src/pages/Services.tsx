// Components
import Section from '@components/shared/Section/Section';
import Heading from '@components/shared/Heading/Heading';
import SplitContent from '@components/SplitContent/SplitContent';
import ImageBanner from '@components/ImageBanner/ImageBanner';
// Assets
// TODO - Change this image to the actual one
import placeholderImageBanner from '@assets/images/hero-banner-1.jpg';
// Content
import { ServicesHeroHeadingText, servicesCTA } from '@content/Services';
import sharedContact from '@content/shared/sharedContact';

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
