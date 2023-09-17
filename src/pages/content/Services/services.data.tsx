/* eslint-disable max-len */
// Dependencies
import { ArrowRight, CalendarLtr } from '@styled-icons/fluentui-system-filled';
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
                If you need any help with UI/UX Design-related work, I can assist by handing you direct contact
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
          'Utilizing my knowledge in web development, along with technical skills in React and extensive CSS & JS knowledge, I am a perfect fit for any custom component development, bug fixing or tweaking existing components to suit your needs.',
      },
      {
        $keyId: crypto.randomUUID(),
        children:
          "My commitment to excellence and innovation ensures that your web solutions are not just functional but exceptional. Let's collaborate to bring your ideas to life, leveraging the full potential of React for a seamless, tailored online experience that leaves a lasting impact.",
      },
    ],
    links: [
      {
        $keyId: crypto.randomUUID(),
        ...contactLink,
      },
    ],
    features: [
      {
        $keyId: crypto.randomUUID(),
        question: 'NEW & EXISTING COMPONENTS',
        answer: {
          children:
            'Are you looking to add new features to your app or enhance your existing components? Look no further. I offer expert assistance in crafting high-quality components while adhering to best and modern coding practices and seamlessly integrating them into your existing architecture.',
        },
      },
      {
        $keyId: crypto.randomUUID(),
        question: 'BUG FIXING',
        answer: {
          children:
            "Web development is a dynamic field where new technologies and devices are introduced constantly. It's only natural that occasional bugs and issues arise. When they do, I'm here to help. With my expertise in bug fixing, I'll swiftly restore your features to their optimal state, so you can confidently pursue your goals without interruption.",
        },
      },
      {
        $keyId: crypto.randomUUID(),
        question: 'MIGRATIONS',
        answer: {
          children:
            "In today's rapidly evolving tech landscape, React and Next.js have become the preferred choices for startups and companies alike. If you're considering joining this trend, I offer expert assistance in seamlessly transitioning your project to these cutting-edge technologies. Let me guide you through a smooth migration process, ensuring your transition is painless and your goal is achieved.",
        },
      },
      {
        $keyId: crypto.randomUUID(),
        question: 'FULL PROJECTS',
        answer: {
          children:
            "While I often tackle specific tasks as a freelancer, I'm also open to embarking on full-scale projects that align with our mutual goals and interests. By working together from inception to completion, we can exert full control over your project's journey, ensuring a comprehensive and successful outcome.",
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
        buttonRole: 'link',
        newTab: true,
        Icon: CalendarLtr,
        variant: 'primary',
        text: 'Reserve a free meeting',
        to: 'https://calendly.com/miguel-angel-creator/free-meeting',
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
