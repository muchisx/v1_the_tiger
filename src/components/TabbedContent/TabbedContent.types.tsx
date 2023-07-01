import { Props as SectionProps } from '../shared/Section/Section';

export type Content = {
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
