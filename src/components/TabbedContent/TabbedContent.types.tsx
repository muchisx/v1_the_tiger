import { Props as SectionProps } from '../shared/Section/Section';
import { type KeyId } from '../../types/general.types';
import type { VideoType, ImageType } from '../../types/media.types';

export type ConditionalContent =
  | { mediaIs: 'image'; mediaType: ImageType }
  | { mediaIs: 'video'; mediaType: VideoType };

export type Content = KeyId & {
  title: string;
  description: string;
  mediaSource: string;
} & ConditionalContent;

export type Props = {
  contain?: SectionProps['contain'];
  customStyles?: SectionProps['customStyles'];
  tabbedContent: Content[];
};
