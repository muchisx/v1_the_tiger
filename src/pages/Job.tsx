// Dependencies
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
// Components
import ImageBanner from '../components/ImageBanner/ImageBanner';
import Heading from '../components/shared/Heading/Heading';
import Section from '../components/shared/Section/Section';
import SplitContent, { SplitContentCustom } from '../components/SplitContent/SplitContent';
import ImageResponsive from '../components/shared/ImageResponsive/ImageResponsive';
import TabbedContent from '../components/TabbedContent/TabbedContent';
// Styled Components
import customImageBannerStyles from './content/Job/job.styles';
// Types
import type { Props as ImageBannerProps } from '../components/ImageBanner/imageBanner.types';
import type { Props as SplitContentProps } from '../components/SplitContent/SplitContent.types';
// Content
import data from './content/Job/job.data';
import arrowDownRight from '../assets/svgs/arrow_down-right.svg';
import sharedContact from './content/shared/sharedContact';
import CardGrid from '../components/CardGrid/CardGrid';
import jobMoreJobs from './content/Job/jobMoreJobs';
import jobFeaturedTasks from './content/Job/jobFeaturedTasks';

const jobContact = sharedContact('secondary');

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

  const { jobRole, jobSerial, jobTitle, jobYear, jobAllies, heroBannerImage, jobFeaturedPhrase, jobAdditionalInfo } =
    jobData;

  const heroBannerBottom: ImageBannerProps['bottomContent'] = [
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

  const jobAdditionalInfoContent: SplitContentProps['rightContent'] = {
    rightTexts: [
      {
        id: 1,
        children: jobAdditionalInfo,
      },
    ],
  };

  return (
    <main className="page page--job">
      <ImageBanner
        customStyles={customImageBannerStyles}
        src={heroBannerImage}
        enableParallax
        minHeight={{ all: '100svh' }}
        imgOverlayColor="rgba(0,0,0,0.36)"
        bottomContent={heroBannerBottom}
        heading={{ text: jobTitle, headingLevel: 'h1', fontSize: 'clamp(3rem, 6vw, 14rem)' }}
      />
      <Section contain="margin" enableGutter marginTop={100}>
        <Heading className="uppercase" text={jobFeaturedPhrase} fontSize="clamp(24px, 3.2vw, 46px)" />
      </Section>
      <SplitContent leftContent={{}} rightContent={jobAdditionalInfoContent} contain="margin">
        <SplitContentCustom location="first">
          <ImageResponsive
            src={arrowDownRight}
            width="clamp(80px, 20vw, 92px)"
            height="clamp(80px, 20vw, 92px)"
            fit="contain"
          />
        </SplitContentCustom>
      </SplitContent>
      <TabbedContent tabbedContent={jobFeaturedTasks.tabbedContent} contain={jobFeaturedTasks.contain} />
      <SplitContent
        leftContent={jobContact.leftContent}
        rightContent={jobContact.rightContent}
        customStyles={jobContact.customStyles}
        contain="padding"
      />
      <CardGrid
        contain
        cardCells={jobMoreJobs.cardCells}
        customStyles={jobMoreJobs.customStyles}
        gridTemplateColumns={{ md: 'repeat(3, 1fr)' }}
        gridAutoRows={{ md: '36vh' }}
      />
    </main>
  );
}

export default Job;
