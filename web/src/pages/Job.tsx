// Dependencies
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import data from './content/Job/job.data';
// Components
import ImageBanner from '../components/ImageBanner/ImageBanner';

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

  return (
    <main className="page page--job">
      <ImageBanner src={heroBannerImage} enableParallax />
      <h1>{jobId}</h1>
    </main>
  );
}

export default Job;
