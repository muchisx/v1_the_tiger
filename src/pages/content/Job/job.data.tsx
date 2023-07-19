/* eslint-disable max-len */
// Media
import qdBanner from '../../../assets/images/companies/quality-door/featured-image.jpg';
import qdFeaturedTask1 from '../../../assets/videos/companies/quality-door/featured-task-1.mp4';
import qdFeaturedTask2 from '../../../assets/videos/companies/quality-door/featured-task-2.mp4';
import qdFeaturedTask3 from '../../../assets/videos/companies/quality-door/featured-task-3.mp4';
import qdFeaturedTask4 from '../../../assets/videos/companies/quality-door/featured-task-4.mp4';
import freshVictorBanner from '../../../assets/images/companies/fresh-victor/featured-image3.jpg';
import fvFeaturedTask1 from '../../../assets/videos/companies/fresh-victor/featured-task-1.mp4';
import fvFeaturedTask2 from '../../../assets/videos/companies/fresh-victor/featured-task-2.mp4';
import fvFeaturedTask3 from '../../../assets/videos/companies/fresh-victor/featured-task-3.mp4';
import responsibleBanner from '../../../assets/images/companies/responsible/featured-image.png';
import resFeaturedTask1 from '../../../assets/videos/companies/responsible/featured-task-1.mp4';
import resFeaturedTask2 from '../../../assets/videos/companies/responsible/featured-task-2.mp4';
import resFeaturedTask3 from '../../../assets/videos/companies/responsible/featured-task-3.mp4';
import resFeaturedTask4 from '../../../assets/videos/companies/responsible/featured-task-4.mp4';
import k9Banner from '../../../assets/images/companies/k9-arsenal/featured-image.jpg';
import k9FeaturedTask1 from '../../../assets/videos/companies/k9-arsenal/featured-task-1.mp4';
import k9FeaturedTask2 from '../../../assets/videos/companies/k9-arsenal/featured-task-2.mp4';
import diamondBanner from '../../../assets/images/companies/diamond-mattress/featured-image2.jpg';
import diamondFeaturedTask1 from '../../../assets/videos/companies/diamond-mattress/featured-task-1.mp4';
import diamondFeaturedTask2 from '../../../assets/videos/companies/diamond-mattress/featured-task-2.mp4';

// Types
import type { Job } from './job.types';

const data: Job[] = [
  {
    id: 1,
    jobId: 'quality-door',
    jobTitle: 'Quality Door',
    jobSerial: '01',
    jobRole: 'Shopify Developer',
    jobAllies: 'ColoredByte - Designers',
    jobYear: '2022',
    heroBannerImage: qdBanner,
    jobFeaturedPhrase:
      "Embarking on the challenge of enhancing Quality Door's development was a remarkable challenge. I skillfully developed two redesigned homepages that breathed new life into the brand, while seamlessly incorporating new sections and features throughout the entire store.",
    jobAdditionalInfo:
      'For over 35 years, QDH has been committed to the deliver of "Quality" products at competitive prices with great customer service. This steadfast dedication to service and dependability has shaped everything they do.',
    jobFeaturedTasks: {
      contain: 'margin',
      tabbedContent: [
        {
          $keyId: 1,
          title: 'Full Homepage',
          description:
            "Entrusted with the development of a redesign of an entire homepage, I successfully accomplished this formidable challenge while meticulously upholding clean and robust code. I skillfully crafted reusable sections that not only enhance the overall user experience but also align seamlessly with the client's preferred design system.",
          mediaIs: 'video',
          mediaType: 'video/mp4',
          mediaSource: qdFeaturedTask1,
        },
        {
          $keyId: 2,
          title: 'Sargent Door',
          description:
            'Sargent Door is an alternate site from the same project, I was also entrusted with the development of the redesign of this website. Whilst a little similar, it also entailed creating new sections and features that enhanced user-experience.',
          mediaIs: 'video',
          mediaType: 'video/mp4',
          mediaSource: qdFeaturedTask2,
        },
        {
          $keyId: 3,
          title: 'New Search',
          description:
            'Recreated the Search component and added new functionality to it, like linking to related categories (collections) and the posibility of adding found items to the cart directly.',
          mediaIs: 'video',
          mediaType: 'video/mp4',
          mediaSource: qdFeaturedTask3,
        },
        {
          $keyId: 4,
          title: 'Featured Section',
          description:
            'Collection Categories. This is a showcase of my favorite new section that I created. It allows to group multiple sections within drawers and feature its products.',
          mediaIs: 'video',
          mediaType: 'video/mp4',
          mediaSource: qdFeaturedTask4,
        },
      ],
    },
  },
  {
    id: 2,
    jobId: 'fresh-victor',
    jobTitle: 'Fresh Victor',
    jobSerial: '02',
    jobRole: 'Shopify Developer',
    jobAllies: 'ColoredByte - Designers',
    jobYear: '2022',
    heroBannerImage: freshVictorBanner,
    jobFeaturedPhrase:
      'fresh victor fresh victor fresh victor fresh victor fresh victor fresh victor fresh victor fresh victor fresh victor fresh victor fresh victor fresh victor fresh victor fresh victor fresh victor.',
    jobAdditionalInfo:
      'fresh victor fresh victor fresh victor fresh victor fresh victor fresh victor fresh victor fresh victor fresh victor fresh victor fresh victor fresh victor fresh victor fresh victor fresh victor.',
    jobFeaturedTasks: {
      contain: 'margin',
      tabbedContent: [
        {
          $keyId: 1,
          title: 'AWESOME FEATURE',
          description:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis distinctio nam aperiam ea! Expedita sit, temporibus sunt ducimus aliquid quia dolor ex, ipsum possimus in at earum eligendi, numquam iste?',
          mediaIs: 'video',
          mediaType: 'video/mp4',
          mediaSource: fvFeaturedTask1,
        },
        {
          $keyId: 2,
          title: 'ANOTHER FEATURE',
          description:
            'Lorem ipsum doloriciis distinctio nam aperiam ea! Expedita sit, temporibus sunt ducimus aliquid quia dolor ex, ipsum possimus in at earum eligendi, numquam iste?',
          mediaIs: 'video',
          mediaType: 'video/mp4',
          mediaSource: fvFeaturedTask2,
        },
        {
          $keyId: 3,
          title: 'FEATURE NAME',
          description: 'Lorem ipsum dolor,quia dolor ex, ipsum possimus in at earum eligendi, numquam iste?',
          mediaIs: 'video',
          mediaType: 'video/mp4',
          mediaSource: fvFeaturedTask3,
        },
      ],
    },
  },
  {
    id: 3,
    jobId: 'responsible',
    jobTitle: 'Responsible',
    jobSerial: '03',
    jobRole: 'Shopify Developer',
    jobAllies: 'ColoredByte - Designers',
    jobYear: '2022',
    heroBannerImage: responsibleBanner,
    jobFeaturedPhrase:
      'responsible responsible responsible responsible responsible responsible responsible responsible responsible responsible responsible responsible responsible responsible responsible responsible responsible.',
    jobAdditionalInfo:
      'responsible responsible responsible responsible responsible responsible responsible responsible responsible responsible responsible responsible responsible responsible responsible responsible responsible.',
    jobFeaturedTasks: {
      contain: 'margin',
      tabbedContent: [
        {
          $keyId: 1,
          title: 'AWESOME FEATURE',
          description:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis distinctio nam aperiam ea! Expedita sit, temporibus sunt ducimus aliquid quia dolor ex, ipsum possimus in at earum eligendi, numquam iste?',
          mediaIs: 'video',
          mediaType: 'video/mp4',
          mediaSource: resFeaturedTask1,
        },
        {
          $keyId: 2,
          title: 'ANOTHER FEATURE',
          description:
            'Lorem ipsum doloriciis distinctio nam aperiam ea! Expedita sit, temporibus sunt ducimus aliquid quia dolor ex, ipsum possimus in at earum eligendi, numquam iste?',
          mediaIs: 'video',
          mediaType: 'video/mp4',
          mediaSource: resFeaturedTask2,
        },
        {
          $keyId: 3,
          title: 'FEATURE NAME',
          description: 'Lorem ipsum dolor,quia dolor ex, ipsum possimus in at earum eligendi, numquam iste?',
          mediaIs: 'video',
          mediaType: 'video/mp4',
          mediaSource: resFeaturedTask3,
        },
        {
          $keyId: 4,
          title: 'FEATURE NAME',
          description: 'Lorem ipsum dolor,quia dolor ex, ipsum possimus in at earum eligendi, numquam iste?',
          mediaIs: 'video',
          mediaType: 'video/mp4',
          mediaSource: resFeaturedTask4,
        },
      ],
    },
  },
  {
    id: 4,
    jobId: 'k9-arsenal',
    jobTitle: 'K9 Arsenal',
    jobSerial: '04',
    jobRole: 'Shopify Developer',
    jobAllies: 'ColoredByte - Designers',
    jobYear: '2023',
    heroBannerImage: k9Banner,
    jobFeaturedPhrase:
      'k9 arsenal k9 arsenal k9 arsenal k9 arsenal k9 arsenal k9 arsenal k9 arsenal k9 arsenal k9 arsenal k9 arsenal k9 arsenal k9 arsenal k9 arsenal k9 arsenal k9 arsenal.',
    jobAdditionalInfo:
      'k9 arsenal k9 arsenal k9 arsenal k9 arsenal k9 arsenal k9 arsenal k9 arsenal k9 arsenal k9 arsenal k9 arsenal k9 arsenal k9 arsenal k9 arsenal k9 arsenal k9 arsenal.',
    jobFeaturedTasks: {
      contain: 'margin',
      tabbedContent: [
        {
          $keyId: 1,
          title: 'AWESOME FEATURE',
          description:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis distinctio nam aperiam ea! Expedita sit, temporibus sunt ducimus aliquid quia dolor ex, ipsum possimus in at earum eligendi, numquam iste?',
          mediaIs: 'video',
          mediaType: 'video/mp4',
          mediaSource: k9FeaturedTask1,
        },
        {
          $keyId: 2,
          title: 'ANOTHER FEATURE',
          description:
            'Lorem ipsum doloriciis distinctio nam aperiam ea! Expedita sit, temporibus sunt ducimus aliquid quia dolor ex, ipsum possimus in at earum eligendi, numquam iste?',
          mediaIs: 'video',
          mediaType: 'video/mp4',
          mediaSource: k9FeaturedTask2,
        },
      ],
    },
  },
  {
    id: 5,
    jobId: 'diamond-mattress',
    jobTitle: 'Diamond mattress',
    jobSerial: '06',
    jobRole: 'Shopify Developer',
    jobAllies: 'ColoredByte - Designers',
    jobYear: '2022',
    heroBannerImage: diamondBanner,
    jobFeaturedPhrase:
      'I successfully built custom and customizable components for their Shopify Store, including upsell features directly on the product page. This implementation led to increased conversion rates and enhanced overall performance.',
    jobAdditionalInfo:
      'diamond mattress diamond mattress diamond mattress diamond mattress diamond mattress diamond mattress diamond mattress diamond mattress diamond mattress diamond mattress diamond mattress diamond mattress diamond mattress diamond mattress.',
    jobFeaturedTasks: {
      contain: 'margin',
      tabbedContent: [
        {
          $keyId: 1,
          title: 'AWESOME FEATURE',
          description:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis distinctio nam aperiam ea! Expedita sit, temporibus sunt ducimus aliquid quia dolor ex, ipsum possimus in at earum eligendi, numquam iste?',
          mediaIs: 'video',
          mediaType: 'video/mp4',
          mediaSource: diamondFeaturedTask1,
        },
        {
          $keyId: 2,
          title: 'ANOTHER FEATURE',
          description:
            'Lorem ipsum doloriciis distinctio nam aperiam ea! Expedita sit, temporibus sunt ducimus aliquid quia dolor ex, ipsum possimus in at earum eligendi, numquam iste?',
          mediaIs: 'video',
          mediaType: 'video/mp4',
          mediaSource: diamondFeaturedTask2,
        },
      ],
    },
  },
];

export default data;
