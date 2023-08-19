/* eslint-disable max-len */
// Dependencies
import { ArrowRight } from '@styled-icons/fluentui-system-filled';
// Types
import type { Service } from './services.types';
import type { Props as ButtonProps } from '@/components/shared/Button/Button.types';

const contactLink: ButtonProps = {
  to: '/contact',
  role: 'link',
  variant: 'primary',
  text: 'Contact',
  Icon: ArrowRight,
};

const data: Service[] = [
  {
    $keyId: crypto.randomUUID(),
    heading: {
      children: 'SHOPIFY DEVELOPMENT',
    },
    texts: [
      {
        $keyId: crypto.randomUUID(),
        fontWeight: 500,
        children:
          "Your website is the face of your online business, and it needs to perform just as well as it looks. That's why I specialise in creating scalable and customer-focused websites that are tailored to meet the specific needs of your business. My bespoke web designs are designed with both your business model and target audience in mind, ensuring that your website is not only attractive but also functional and effective.",
      },
      {
        $keyId: crypto.randomUUID(),
        children:
          "Whether you're a small start-up or a large enterprise, I have the expertise and experience to create a website that meets your unique needs and exceeds your expectations. My approach to web design prioritises both the user experience and the success of your business, ensuring that your website is optimised to drive engagement, conversion, and growth.",
      },
    ],
    links: [
      {
        $keyId: crypto.randomUUID(),
        ...contactLink,
      },
      {
        $keyId: crypto.randomUUID(),
        to: '/shopify',
        role: 'link',
        variant: 'secondary',
        Icon: ArrowRight,
        text: 'Learn more',
      },
    ],
  },
];

export default data;
