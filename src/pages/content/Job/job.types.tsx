import type { Props as ImageBannerProps } from '../../../components/ImageBanner/imageBanner.types';

export type Job = {
  id: number;
  jobId: string;
  jobTitle: string;
  jobSerial: string;
  jobRole: string;
  jobAllies?: string;
  jobYear: string;
  heroBannerImage: ImageBannerProps['src'];
  jobFeaturedPhrase: string;
  jobAdditionalInfo: string;
};
