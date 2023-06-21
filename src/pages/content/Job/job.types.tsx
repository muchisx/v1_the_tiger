import type { Props as ImageBannerProps } from '../../../components/ImageBanner/imageBanner.types';

export type Job = {
  jobId: string;
  jobTitle: string;
  jobSerial: number | string;
  jobRole: string;
  jobAllies?: string;
  jobYear: number;
  heroBannerImage: ImageBannerProps['src'];
};
