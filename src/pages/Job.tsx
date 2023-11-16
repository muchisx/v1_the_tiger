// Dependencies
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
// Components
import CardGrid from '@components/CardGrid/CardGrid';
import Heading from '@components/shared/Heading/Heading';
import Section from '@components/shared/Section/Section';
import ImageBanner from '@components/ImageBanner/ImageBanner';
import TabbedContent from '@components/TabbedContent/TabbedContent';
import ImageResponsive from '@components/shared/ImageResponsive/ImageResponsive';
import SplitContent, { SplitContentCustom } from '@components/SplitContent/SplitContent';
// Styled Components
import { customImageBannerStyles, additionalInfoCSS } from '@content/Job/job.styles';
// Types
import type { Props as ImageBannerProps } from '@components/ImageBanner/imageBanner.types';
import type { Props as SplitContentProps } from '@components/SplitContent/SplitContent.types';
// Content
import data from '@content/Job/job.data';
import jobMoreJobs from '@content/Job/jobMoreJobs';
import sharedContact from '@content/shared/sharedContact';
import arrowDownRight from '@assets/svgs/arrow_down-right.svg';

const jobContact = sharedContact('secondary');

function Job() {
  const { jobSlug } = useParams();
  const navigate = useNavigate();

  const jobData = data.find((job) => job.jobSlug === jobSlug);

  useEffect(() => {
    if (!jobData) {
      navigate('/404', { replace: true });
    }
  }, [jobData, navigate]);

  if (!jobData) {
    return null;
  }

  const {
    jobRole,
    jobTitle,
    jobSerial,
    jobYear,
    jobAllies,
    heroBannerImage,
    jobFeaturedPhrase,
    jobAdditionalInfo,
    jobFeaturedTasks,
  } = jobData;

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
        $keyId: crypto.randomUUID(),
        children: jobAdditionalInfo,
      },
    ],
  };

  return (
    <main className="page page--job" key={jobSlug}>
      <ImageBanner
        enableParallax
        src={heroBannerImage}
        minHeight={{ all: '100svh' }}
        bottomContent={heroBannerBottom}
        imgOverlayColor="rgba(0,0,0,0.36)"
        customStyles={customImageBannerStyles}
        heading={{
          children: jobTitle,
          headingLevel: 'h1',
          fontSize: { all: 'clamp(3rem, 6vw, 14rem)' },
        }}
      />
      <Section contain="margin" enableGutter marginTop={100}>
        <Heading fontSize={{ all: 'clamp(24px, 3.2vw, 46px)' }}>{jobFeaturedPhrase}</Heading>
      </Section>
      <SplitContent
        contain="margin"
        leftContent={{}}
        customStyles={additionalInfoCSS}
        rightContent={jobAdditionalInfoContent}
      >
        <SplitContentCustom location="first">
          <ImageResponsive
            src={arrowDownRight}
            width="clamp(80px, 20vw, 92px)"
            height="clamp(80px, 20vw, 92px)"
            fit="contain"
          />
        </SplitContentCustom>
      </SplitContent>
      <TabbedContent
        tabbedContent={jobFeaturedTasks.tabbedContent}
        contain={jobFeaturedTasks.contain}
      />
      <SplitContent
        contain="padding"
        leftContent={jobContact.leftContent}
        rightContent={jobContact.rightContent}
        customStyles={jobContact.customStyles}
      />
      <CardGrid
        contain
        gridAutoRows={{ md: '36vh' }}
        cardCells={jobMoreJobs.cardCells(jobData)}
        customStyles={jobMoreJobs.customStyles}
        gridTemplateColumns={{ md: 'repeat(3, 1fr)' }}
        footerButton={jobMoreJobs.footerButton}
      />
    </main>
  );
}

export default Job;
