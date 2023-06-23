// Dependencies
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
// Components
import ImageBanner from '../components/ImageBanner/ImageBanner';
import Heading from '../components/shared/Heading/Heading';
import Section from '../components/shared/Section/Section';
import SplitContent, { SplitContentCustomFirst } from '../components/SplitContent/SplitContent';
import ImageResponsive from '../components/shared/ImageResponsive/ImageResponsive';
// Styled Components
import customImageBannerStyles from './content/Job/job.styles';
// Types
import type { Props as ImageBannerProps } from '../components/ImageBanner/imageBanner.types';
import type { Props as SplitContentProps } from '../components/SplitContent/SplitContent.types';
// Content
import data from './content/Job/job.data';
import arrowDownRight from '../assets/svgs/arrow_down-right.svg';

function Job() {
  const { jobId } = useParams();
  const navigate = useNavigate();

  const jobData = data.find((job) => job.jobId === jobId);

  useEffect(() => {
    if (!jobData) {
      navigate('/404', { replace: true });
    }
  }, [jobData, navigate]);

  if (!jobData) {
    return null;
  }

  const { jobRole, jobSerial, jobTitle, jobYear, jobAllies, heroBannerImage, jobFeaturedPhrase } = jobData;

  const bottomContent: ImageBannerProps['bottomContent'] = [
    {
      title: 'PROJECT',
      info: jobSerial,
    },
    {
      title: 'ROLE',
      info: jobRole,
    },
    {
      title: 'ALLIES',
      info: jobAllies,
    },
    {
      title: 'YEAR',
      info: jobYear,
    },
  ];

  const firstSplitContent: SplitContentProps = {
    leftContent: {
      maskedImageURL: arrowDownRight,
    },
    rightContent: {
      rightTexts: [
        {
          id: 1,
          children:
            // eslint-disable-next-line max-len
            'I have researched their target audience and competitors and designed a website that was best suited for them. The client was pleased with the experience and agreed to go to the development team and have it built.',
        },
      ],
    },
  };

  return (
    <main className="page page--job">
      <ImageBanner
        customStyles={customImageBannerStyles}
        src={heroBannerImage}
        enableParallax
        height="100lvh"
        imgOverlayColor="rgba(0,0,0,0.36)"
        bottomContent={bottomContent}
        heading={{ text: jobTitle, headingLevel: 'h1', fontSize: 'clamp(3rem, 6vw, 14rem)' }}
      />
      <Section contain="margin" enableGutter marginTop={100}>
        <Heading className="uppercase" text={jobFeaturedPhrase} fontSize="clamp(24px, 3.2vw, 46px)" />
      </Section>
      <SplitContent leftContent={{}} rightContent={firstSplitContent.rightContent}>
        <SplitContentCustomFirst>
          <ImageResponsive
            src={arrowDownRight}
            width="clamp(80px, 20vw, 92px)"
            height="clamp(80px, 20vw, 92px)"
            fit="contain"
          />
        </SplitContentCustomFirst>
      </SplitContent>
    </main>
  );
}

export default Job;
