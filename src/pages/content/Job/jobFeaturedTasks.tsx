/* eslint-disable max-len */
import type { Props as TabbedContentProps } from '../../../components/TabbedContent/TabbedContent.types';

import placeholderImage from '../../../assets/images/hero-banner-1.jpg';

const jobFeaturedTasks: TabbedContentProps = {
  contain: 'margin',
  tabbedContent: [
    {
      id: 1,
      title: 'AWESOME FEATURE',
      description:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis distinctio nam aperiam ea! Expedita sit, temporibus sunt ducimus aliquid quia dolor ex, ipsum possimus in at earum eligendi, numquam iste?',
      mediaType: 'image',
      mediaSource: placeholderImage,
    },
    {
      id: 2,
      title: 'ANOTHER FEATURE',
      description:
        'Lorem ipsum doloriciis distinctio nam aperiam ea! Expedita sit, temporibus sunt ducimus aliquid quia dolor ex, ipsum possimus in at earum eligendi, numquam iste?',
      mediaType: 'image',
      mediaSource: placeholderImage,
    },
    {
      id: 3,
      title: 'FEATURE NAME',
      description: 'Lorem ipsum dolor,quia dolor ex, ipsum possimus in at earum eligendi, numquam iste?',
      mediaType: 'image',
      mediaSource: placeholderImage,
    },
  ],
};

export default jobFeaturedTasks;
