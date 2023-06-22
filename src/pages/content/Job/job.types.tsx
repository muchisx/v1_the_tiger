import type { Props as ImageBannerProps } from '../../../components/ImageBanner/imageBanner.types';

export type Job = {
  jobId: string;
  jobTitle: string;
  jobSerial: string;
  jobRole: string;
  jobAllies?: string;
  jobYear: string;
  heroBannerImage: ImageBannerProps['src'];
};
