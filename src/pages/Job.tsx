// Dependencies
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import data from './content/Job/job.data';
// Components
import ImageBanner from '../components/ImageBanner/ImageBanner';
import type { Props as ImageBannerProps } from '../components/ImageBanner/imageBanner.types';
// Styled Components
import customImageBannerStyles from './content/Job/job.styles';

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

  const { jobRole, jobSerial, jobTitle, jobYear, jobAllies, heroBannerImage } = jobData;

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
    </main>
  );
}

export default Job;
