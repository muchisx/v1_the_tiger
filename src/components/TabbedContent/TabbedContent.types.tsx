import { Props as SectionProps } from '../shared/Section/Section';
import { type KeyId } from '../../types/general.types';

export type Content = KeyId & {
  title: string;
  description: string;
  mediaType: 'image' | 'video';
  mediaSource: string;
};

export type Props = {
  contain?: SectionProps['contain'];
  customStyles?: SectionProps['customStyles'];
  tabbedContent: Content[];
};
