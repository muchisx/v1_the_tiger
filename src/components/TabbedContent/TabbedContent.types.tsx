import { Props as SectionProps } from '../shared/Section/Section';

export type Content = {
  id: string | number;
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
