// Types
import type { Props as ImageBannerProps } from '@/components/ImageBanner/imageBanner.types';
import type { Props as TabbedContentProps } from '@/components/TabbedContent/TabbedContent.types';
import type { Props as CardProps } from '@/components/Card/Card.types';
import type { KeyId } from '@/types/general.types';

export type Job = KeyId & {
  jobSlug: string;
  jobTitle: string;
  jobSerial: string;
  jobRole: string;
  jobAllies?: string;
  jobYear: string;
  thumbnailImage: NonNullable<CardProps['backgroundImg']>;
  heroBannerImage: ImageBannerProps['src'];
  jobFeaturedPhrase: string;
  jobAdditionalInfo: string;
  jobFeaturedTasks: TabbedContentProps;
};
