/* eslint-disable max-len */
// Media
import qdThumb from '@/assets/images/companies/quality-door/featured-image.webp';
import qdBanner from '@/assets/images/companies/quality-door/qualitydoor-laptop.webp';
import qdFeaturedTask1 from '@/assets/videos/companies/quality-door/featured-task-1.mp4';
import qdFeaturedTask2 from '@/assets/videos/companies/quality-door/featured-task-2.mp4';
import qdFeaturedTask3 from '@/assets/videos/companies/quality-door/featured-task-3.mp4';
import qdFeaturedTask4 from '@/assets/videos/companies/quality-door/featured-task-4.mp4';
import freshVictorThumb from '@/assets/images/companies/fresh-victor/featured-image3.webp';
import freshVictorBanner from '@/assets/images/companies/fresh-victor/freshvictor-laptop.jpg';
import fvFeaturedTask1 from '@/assets/videos/companies/fresh-victor/featured-task-1.mp4';
import fvFeaturedTask2 from '@/assets/videos/companies/fresh-victor/featured-task-2.mp4';
import fvFeaturedTask3 from '@/assets/videos/companies/fresh-victor/featured-task-3.mp4';
import responsibleThumb from '@/assets/images/companies/responsible/featured-image.webp';
import responsibleBanner from '@/assets/images/companies/responsible/responsible-laptop.webp';
import resFeaturedTask1 from '@/assets/videos/companies/responsible/featured-task-1.mp4';
import resFeaturedTask2 from '@/assets/videos/companies/responsible/featured-task-2.mp4';
import resFeaturedTask3 from '@/assets/videos/companies/responsible/featured-task-3.mp4';
import resFeaturedTask4 from '@/assets/videos/companies/responsible/featured-task-4.mp4';
import k9Banner from '@/assets/images/companies/k9-arsenal/featured-image-2.webp';
import k9FeaturedTask1 from '@/assets/videos/companies/k9-arsenal/featured-task-1.mp4';
import k9FeaturedTask2 from '@/assets/videos/companies/k9-arsenal/featured-task-2.mp4';
import diamondBanner from '@/assets/images/companies/diamond-mattress/featured-image2.webp';
import diamondFeaturedTask1 from '@/assets/videos/companies/diamond-mattress/featured-task-1.mp4';
import diamondFeaturedTask2 from '@/assets/videos/companies/diamond-mattress/featured-task-2.mp4';

// Types
import type { Job } from './job.types';

const data: Job[] = [
  {
    $keyId: crypto.randomUUID(),
    jobId: 'quality-door',
    jobTitle: 'Quality Door',
    jobSerial: '01',
    jobRole: 'Shopify Developer',
    jobAllies: 'ColoredByte - Designers',
    jobYear: '2022',
    thumbnailImage: {
      src: qdThumb,
      position: 'center 30%',
    },
    heroBannerImage: qdBanner,
    jobFeaturedPhrase:
      "Embarking on the challenge of enhancing Quality Door's stores was a remarkable feat. I skillfully developed two redesigned homepages that breathed new life into the brand, while seamlessly incorporating new sections and features throughout the entire store.",
    jobAdditionalInfo:
      'For over 35 years, QDH has been committed to the deliver of "Quality" products at competitive prices with great customer service. This steadfast dedication to service and dependability has shaped everything they do.',
    jobFeaturedTasks: {
      contain: 'margin',
      tabbedContent: [
        {
          $keyId: crypto.randomUUID(),
          title: 'Full Homepage',
          description:
            "Entrusted with the development of a redesign of an entire homepage, I successfully accomplished this formidable challenge while meticulously upholding clean and robust code. I skillfully crafted reusable sections that not only enhance the overall user experience but also align seamlessly with the client's preferred design system.",
          mediaIs: 'video',
          mediaType: 'video/mp4',
          mediaSource: qdFeaturedTask1,
        },
        {
          $keyId: crypto.randomUUID(),
          title: 'Sargent Door',
          description:
            'Sargent Door is an alternate site from the same project, I was also entrusted with the development of the redesign of this website. Whilst a little similar, it also entailed creating new sections and features that enhanced user-experience.',
          mediaIs: 'video',
          mediaType: 'video/mp4',
          mediaSource: qdFeaturedTask2,
        },
        {
          $keyId: crypto.randomUUID(),
          title: 'New Search',
          description:
            'Recreated the Search component and added new functionality to it, like linking to related categories (collections) and the posibility of adding found items to the cart directly.',
          mediaIs: 'video',
          mediaType: 'video/mp4',
          mediaSource: qdFeaturedTask3,
        },
        {
          $keyId: crypto.randomUUID(),
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
    $keyId: crypto.randomUUID(),
    jobId: 'fresh-victor',
    jobTitle: 'Fresh Victor',
    jobSerial: '02',
    jobRole: 'Shopify Developer',
    jobAllies: 'ColoredByte - Designers',
    jobYear: '2022',
    thumbnailImage: {
      src: freshVictorThumb,
    },
    heroBannerImage: freshVictorBanner,
    jobFeaturedPhrase:
      "Fresh Victor's project achieved immediate success. This innovative US-based start-up had a clear goal, and my development services brought them closer to achieving it.",
    jobAdditionalInfo:
      "With Fresh Victor's premium, cold-pressed juice mixers, you are the victor! Get out from behind the bar and back to the party. This is how you make fast, delicious craft cocktails and amazing mocktails -- Every. Single. Time. Just mix with your favorite spirit or non-alcoholic beverage, stir and sip. With their clean-label, fresh-ingredients mixers, you'll serve up beautiful, great tasting and surprisingly healthy drinks that your friends will be talking about for weeks.",
    jobFeaturedTasks: {
      contain: 'margin',
      tabbedContent: [
        {
          $keyId: crypto.randomUUID(),
          title: 'Product Page',
          description:
            'Implemented several enhancements to the Product Page (PDP) to enhance accessibility and usability. These included the addition of Upsell sections, which significantly boosted conversion rates, and the incorporation of customizable dynamic payment buttons.',
          mediaIs: 'video',
          mediaType: 'video/mp4',
          mediaSource: fvFeaturedTask1,
        },
        {
          $keyId: crypto.randomUUID(),
          title: 'Video Section',
          description:
            "Developed a fully native Video Section within a theme initially lacking video support. Additionally, I implemented comprehensive Admin Controls to enable seamless customization of the section's appearance and functionality on both Desktop and Mobile platforms. This allowed my client to seamlessly integrate the section with their existing design system.",
          mediaIs: 'video',
          mediaType: 'video/mp4',
          mediaSource: fvFeaturedTask2,
        },
        {
          $keyId: crypto.randomUUID(),
          title: 'Homepage',
          description:
            'I provided several feature updates to the Homepage, introducing extensive controls for customizing the appearance of various sections. This greatly facilitated achieving the precise style they desired.',
          mediaIs: 'video',
          mediaType: 'video/mp4',
          mediaSource: fvFeaturedTask3,
        },
      ],
    },
  },
  {
    $keyId: crypto.randomUUID(),
    jobId: 'responsible',
    jobTitle: 'Responsible',
    jobSerial: '03',
    jobRole: 'Shopify Developer',
    jobAllies: 'ColoredByte - Designers',
    jobYear: '2022',
    thumbnailImage: {
      src: responsibleThumb,
      position: '40% top',
    },
    heroBannerImage: responsibleBanner,
    jobFeaturedPhrase:
      'I was immediately drawn to this project due to its alignment with environmental values. Together, we implemented remarkable site-wide features that guided users and drove sales growth.',
    jobAdditionalInfo:
      "RESPONSIBLE is the new brand-approved recommerce platform for streetwear. With a price-promise, quality guarantee and Buy back offered across all of their garments, it's never been so easy, affordable and sustainable to keep your look fresh.",
    jobFeaturedTasks: {
      contain: 'margin',
      tabbedContent: [
        {
          $keyId: crypto.randomUUID(),
          title: 'Homepage',
          description:
            "RESPONSIBLE's goal homepage featured custom elements unsupported by their Shopify Theme. Through our close collaboration, we successfully implemented these features promptly, giving the homepage the fresh look they desired.",
          mediaIs: 'video',
          mediaType: 'video/mp4',
          mediaSource: resFeaturedTask1,
        },
        {
          $keyId: crypto.randomUUID(),
          title: 'Infinite Collection',
          description:
            "The RESPONSIBLE team admired the infinite collections found on platforms like Amazon and other websites, and they sought to integrate this feature into their Shopify Theme. I stepped in and successfully recreated this functionality while preserving the external apps' features, such as the wishlist app showcased in the video.",
          mediaIs: 'video',
          mediaType: 'video/mp4',
          mediaSource: resFeaturedTask2,
        },
        {
          $keyId: crypto.randomUUID(),
          title: 'Mobile Nav',
          description:
            'I successfully developed a completely customized Mobile Navigation from a provided design, featuring nested and subnested menus, additional root links, and display for various supported payment types.',
          mediaIs: 'video',
          mediaType: 'video/mp4',
          mediaSource: resFeaturedTask3,
        },
        {
          $keyId: crypto.randomUUID(),
          title: 'Product Page',
          description:
            'RESPONSIBLE managed different types of prices depending on different internal factors, I was tasked then to develop, based on a design, a connection in which we could display those prices and trigger them when those factors were met.',
          mediaIs: 'video',
          mediaType: 'video/mp4',
          mediaSource: resFeaturedTask4,
        },
      ],
    },
  },
  {
    $keyId: crypto.randomUUID(),
    jobId: 'k9-arsenal',
    jobTitle: 'K9 Arsenal',
    jobSerial: '04',
    jobRole: 'Shopify Developer',
    jobAllies: 'ColoredByte - Designers',
    jobYear: '2023',
    thumbnailImage: {
      src: k9Banner,
      position: '32% 28%',
    },
    heroBannerImage: k9Banner,
    jobFeaturedPhrase:
      'In this project, I was able to help an upcoming start-up setup the logic for their most important product in the Front-End and Back-End of Shopify.',
    jobAdditionalInfo:
      "At K9 Arsenal, they're passionate about providing the highest quality equipment for trainers, decoys, handlers and their k9's.",
    jobFeaturedTasks: {
      contain: 'margin',
      tabbedContent: [
        {
          $keyId: crypto.randomUUID(),
          title: 'Custom Product',
          description:
            'I effectively created a custom Product Page experience featuring multiple custom fields and functionalities that operated seamlessly in both the Front-End (updating prices dynamically) and Back-End, preserving all selected custom fields.',
          mediaIs: 'video',
          mediaType: 'video/mp4',
          mediaSource: k9FeaturedTask1,
        },
        {
          $keyId: crypto.randomUUID(),
          title: 'Cart Recap',
          description:
            'I seamlessly incorporated Custom Product Fields into the Cart Page, allowing users to visually review their selections, including custom fields such as files and color choices.',
          mediaIs: 'video',
          mediaType: 'video/mp4',
          mediaSource: k9FeaturedTask2,
        },
      ],
    },
  },
  {
    $keyId: crypto.randomUUID(),
    jobId: 'diamond-mattress',
    jobTitle: 'Diamond mattress',
    jobSerial: '06',
    jobRole: 'Shopify Developer',
    jobAllies: 'ColoredByte - Designers',
    jobYear: '2022',
    thumbnailImage: {
      src: diamondBanner,
      position: 'center 80%',
    },
    heroBannerImage: diamondBanner,
    jobFeaturedPhrase:
      'I successfully built custom and customizable components for their Shopify Store, including upsell features directly on the product page. This implementation led to increased conversion rates and enhanced overall performance.',
    jobAdditionalInfo:
      'Diamond Mattress believes that sleep has the power to change our lives. It is the path to feeling more fulfilled and finding a deeper connection to the beauty of life. Diamond Mattress is dedicated to pursuing people-first innovation to improve life and transform our relationship with sleep. More than just making mattresses, Diamond is defining a better way to live by perfecting the art of sleep wellness.',
    jobFeaturedTasks: {
      contain: 'margin',
      tabbedContent: [
        {
          $keyId: crypto.randomUUID(),
          title: 'Product Page',
          description:
            "I introduced fresh visual assets (based from an external skilled designer) to Diamond's Product Page, incorporating attention-grabbing disclaimers for Upselling features that contributed to a boost in conversion rates.",
          mediaIs: 'video',
          mediaType: 'video/mp4',
          mediaSource: diamondFeaturedTask1,
        },
        {
          $keyId: crypto.randomUUID(),
          title: 'Upsell Function',
          description:
            'I effectively developed an upsell mechanism that automatically included a complimentary product in the cart when a specific item (configurable in the Shopify Editor Admin) was chosen.',
          mediaIs: 'video',
          mediaType: 'video/mp4',
          mediaSource: diamondFeaturedTask2,
        },
      ],
    },
  },
];

export default data;
