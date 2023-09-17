/* eslint-disable max-len */
// Dependencies
import { ArrowRight } from '@styled-icons/fluentui-system-filled';
// Components
import Text from '@components/shared/Text/Text';
// Types
import type { Service } from './services.types';
import type { Props as ButtonProps } from '@/components/shared/Button/Button.types';

const contactLink: ButtonProps = {
  to: '/contact',
  buttonRole: 'link',
  variant: 'primary',
  text: 'Contact',
  Icon: ArrowRight,
};

const servicesData: Service[] = [
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
          'As the front of your business, your website demands equal dedication and investment in both its aesthetics and functionality. This is precisely why I prioritize the development of adaptable, customer-focused features that align seamlessly with your business needs.',
      },
      {
        $keyId: crypto.randomUUID(),
        children:
          "I specialize in delivering tailored solutions to businesses of all sizes. Whether you're a small startup or a thriving enterprise, I excel at crafting practical and robust solutions to tackle your development challenges. Beyond just code, I offer guidance on technical aspects that influence user experience and website performance. Partner with me to transform your Shopify store into a powerful online presence that leaves a lasting impression.",
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
        buttonRole: 'link',
        variant: 'secondary',
        Icon: ArrowRight,
        text: 'Learn more',
      },
    ],
    features: [
      {
        $keyId: crypto.randomUUID(),
        question: 'THEME DEVELOPMENT',
        answer: {
          children: (
            <>
              <Text>
                Numerous Shopify base and paid themes often lack the specific features necessary to achieve your unique
                goals. This is where my expertise comes into play. With my extensive knowledge in Theme Development, I
                can assist you in the following ways:
              </Text>

              <ol>
                <li>
                  <Text tag="span" fontWeight={500} textColor="var(--text-highlight-secondary)">
                    New & Existing Sections Development:{' '}
                  </Text>
                  Empower your Shopify Store by introducing totally custom and new sections or by extending existing
                  ones, with all of the controls that you need.
                </li>
                <li>
                  <Text tag="span" fontWeight={500} textColor="var(--text-highlight-secondary)">
                    Bug Fixing:{' '}
                  </Text>
                  If a Theme&rsquo;s default functionality is not working as you expected, or you had a previous code
                  change that broke your theme, I can come in and fix any issues.
                </li>
                <li>
                  <Text tag="span" fontWeight={500} textColor="var(--text-highlight-secondary)">
                    Complex System Integration:{' '}
                  </Text>
                  If you have a complex workflow involving elements such as Metafields, MetaObjects, Tags, Pages, or any
                  custom systems, I specialize in seamlessly integrating them with your Shopify Theme.
                </li>
                <li>And virtually anything Theme-related!</li>
              </ol>
            </>
          ),
        },
      },
      {
        $keyId: crypto.randomUUID(),
        question: 'APP INTEGRATIONS',
        answer: {
          children:
            'Occasionally, certain Shopify Apps may not seamlessly integrate with all Shopify Themes, or they may not function correctly at all. In such instances, I offer specialized Custom Development services to ensure these Apps are harmoniously tailored to your Theme for a smooth and effective integration.',
        },
      },
      {
        $keyId: crypto.randomUUID(),
        question: 'OPTIMIZATION & PERFORMANCE',
        answer: {
          children:
            'I excel at implementing optimization strategies for your Shopify Theme to tackle common issues such as slow initial loading, low PageSpeed, Lighthouse, or GTMetrix scores. These improvements translate into enhanced SEO performance and a superior user experience.',
        },
      },
      {
        $keyId: crypto.randomUUID(),
        question: 'ACCESSIBILITY & UX ',
        answer: {
          children: (
            <>
              <Text
                tag="span"
                fontWeight={500}
                textColor="var(--text-highlight-secondary)"
                style={{ display: 'block' }}
              >
                Service - Accesiblity
              </Text>
              Accessibility plays a crucial role in influencing your SEO rankings and enhancing user interface usability
              across the entire human spectrum. In my portfolio of services, I offer solutions to address
              accessibility-related issues that can, in turn, boost your conversion rates.
              <br />
              <br />
              <Text
                tag="span"
                fontWeight={500}
                textColor="var(--text-highlight-secondary)"
                style={{ display: 'block' }}
              >
                Service - UX Improvements
              </Text>
              I offer UX Audits, Guidelines, and practical Implementation services. While I excel in UX (User
              Experience) rather than UI/UX design, my expertise lies in user navigation, feature workflows, and
              device-specific interactions.
              <br />
              <br />
              <Text fontSize="1.4rem">
                If you need any help with UI/UX Design-related work, I can assist you by handing you direct contact
                references of known professional Designers.
              </Text>
            </>
          ),
        },
      },
    ],
  },
  {
    $keyId: crypto.randomUUID(),
    heading: {
      children: 'REACT DEVELOPMENT',
    },
    texts: [
      {
        $keyId: crypto.randomUUID(),
        fontWeight: 500,
        children:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto blanditiis labore ipsa incidunt delectus veritatis quasi accusamus non? Quasi rem voluptates minima tempora doloremque. Ullam corrupti est soluta. Quas, temporibus?',
      },
      {
        $keyId: crypto.randomUUID(),
        children:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, assumenda et! Fugit itaque beatae quos dolore ex est dignissimos necessitatibus numquam rem, culpa architecto labore. Aspernatur molestiae sequi ipsam similique!',
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
        buttonRole: 'link',
        variant: 'secondary',
        Icon: ArrowRight,
        text: 'Learn more',
      },
    ],
    features: [
      {
        $keyId: crypto.randomUUID(),
        question: 'QUESTION QST',
        answer: {
          children:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat ab quas dicta ex, amet tenetur. Sunt animi magnam, deserunt iste corporis distinctio itaque laudantium, obcaecati nulla dolorum enim nemo ad.',
        },
      },
      {
        $keyId: crypto.randomUUID(),
        question: 'QUESTION QST',
        answer: {
          children:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat ab quas dicta ex, amet tenetur. Sunt animi magnam, deserunt iste corporis distinctio itaque laudantium, obcaecati nulla dolorum enim nemo ad.',
        },
      },
      {
        $keyId: crypto.randomUUID(),
        question: 'QUESTION QST',
        answer: {
          children:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat ab quas dicta ex, amet tenetur. Sunt animi magnam, deserunt iste corporis distinctio itaque laudantium, obcaecati nulla dolorum enim nemo ad.',
        },
      },
    ],
  },
  {
    $keyId: crypto.randomUUID(),
    heading: {
      children: 'HELPING STARTUPS',
    },
    texts: [
      {
        $keyId: crypto.randomUUID(),
        fontWeight: 500,
        children:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto blanditiis labore ipsa incidunt delectus veritatis quasi accusamus non? Quasi rem voluptates minima tempora doloremque. Ullam corrupti est soluta. Quas, temporibus?',
      },
      {
        $keyId: crypto.randomUUID(),
        children:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, assumenda et! Fugit itaque beatae quos dolore ex est dignissimos necessitatibus numquam rem, culpa architecto labore. Aspernatur molestiae sequi ipsam similique!',
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
        buttonRole: 'link',
        variant: 'secondary',
        Icon: ArrowRight,
        text: 'Learn more',
      },
    ],
    features: [
      {
        $keyId: crypto.randomUUID(),
        question: 'QUESTION QST',
        answer: {
          children:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat ab quas dicta ex, amet tenetur. Sunt animi magnam, deserunt iste corporis distinctio itaque laudantium, obcaecati nulla dolorum enim nemo ad.',
        },
      },
      {
        $keyId: crypto.randomUUID(),
        question: 'QUESTION QST',
        answer: {
          children:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat ab quas dicta ex, amet tenetur. Sunt animi magnam, deserunt iste corporis distinctio itaque laudantium, obcaecati nulla dolorum enim nemo ad.',
        },
      },
      {
        $keyId: crypto.randomUUID(),
        question: 'QUESTION QST',
        answer: {
          children:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat ab quas dicta ex, amet tenetur. Sunt animi magnam, deserunt iste corporis distinctio itaque laudantium, obcaecati nulla dolorum enim nemo ad.',
        },
      },
    ],
  },
  {
    $keyId: crypto.randomUUID(),
    heading: {
      children: 'BACKING EST. BUSINESSES',
    },
    texts: [
      {
        $keyId: crypto.randomUUID(),
        fontWeight: 500,
        children:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto blanditiis labore ipsa incidunt delectus veritatis quasi accusamus non? Quasi rem voluptates minima tempora doloremque. Ullam corrupti est soluta. Quas, temporibus?',
      },
      {
        $keyId: crypto.randomUUID(),
        children:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, assumenda et! Fugit itaque beatae quos dolore ex est dignissimos necessitatibus numquam rem, culpa architecto labore. Aspernatur molestiae sequi ipsam similique!',
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
        buttonRole: 'link',
        variant: 'secondary',
        Icon: ArrowRight,
        text: 'Learn more',
      },
    ],
    features: [
      {
        $keyId: crypto.randomUUID(),
        question: 'QUESTION QST',
        answer: {
          children:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat ab quas dicta ex, amet tenetur. Sunt animi magnam, deserunt iste corporis distinctio itaque laudantium, obcaecati nulla dolorum enim nemo ad.',
        },
      },
      {
        $keyId: crypto.randomUUID(),
        question: 'QUESTION QST',
        answer: {
          children:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat ab quas dicta ex, amet tenetur. Sunt animi magnam, deserunt iste corporis distinctio itaque laudantium, obcaecati nulla dolorum enim nemo ad.',
        },
      },
      {
        $keyId: crypto.randomUUID(),
        question: 'QUESTION QST',
        answer: {
          children:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat ab quas dicta ex, amet tenetur. Sunt animi magnam, deserunt iste corporis distinctio itaque laudantium, obcaecati nulla dolorum enim nemo ad.',
        },
      },
    ],
  },
  {
    $keyId: crypto.randomUUID(),
    heading: {
      children: 'FREE WEBSITE REVIEW',
    },
    texts: [
      {
        $keyId: crypto.randomUUID(),
        fontWeight: 500,
        children:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto blanditiis labore ipsa incidunt delectus veritatis quasi accusamus non? Quasi rem voluptates minima tempora doloremque. Ullam corrupti est soluta. Quas, temporibus?',
      },
      {
        $keyId: crypto.randomUUID(),
        children:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, assumenda et! Fugit itaque beatae quos dolore ex est dignissimos necessitatibus numquam rem, culpa architecto labore. Aspernatur molestiae sequi ipsam similique!',
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
        buttonRole: 'link',
        variant: 'secondary',
        Icon: ArrowRight,
        text: 'Learn more',
      },
    ],
    features: [
      {
        $keyId: crypto.randomUUID(),
        question: 'QUESTION QST',
        answer: {
          children:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat ab quas dicta ex, amet tenetur. Sunt animi magnam, deserunt iste corporis distinctio itaque laudantium, obcaecati nulla dolorum enim nemo ad.',
        },
      },
      {
        $keyId: crypto.randomUUID(),
        question: 'QUESTION QST',
        answer: {
          children:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat ab quas dicta ex, amet tenetur. Sunt animi magnam, deserunt iste corporis distinctio itaque laudantium, obcaecati nulla dolorum enim nemo ad.',
        },
      },
      {
        $keyId: crypto.randomUUID(),
        question: 'QUESTION QST',
        answer: {
          children:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat ab quas dicta ex, amet tenetur. Sunt animi magnam, deserunt iste corporis distinctio itaque laudantium, obcaecati nulla dolorum enim nemo ad.',
        },
      },
    ],
  },
];

export default servicesData;
