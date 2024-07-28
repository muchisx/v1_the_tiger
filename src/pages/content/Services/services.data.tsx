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
        question: {
          children: 'APP DEVELOPMENT (PUBLIC & PRIVATE)',
        },
        answer: {
          children: (
            <>
              <Text>
                With extensive experience in Shopify App Development, I can help you create custom
                apps that cater to your unique business requirements. Whether you are creating a
                public app to release it to the App Store or a private app to streamline your
                internal processes, I&apos;ve got you covered.
              </Text>

              <ol>
                <li>
                  <Text tag="span" fontWeight={500} textColor="var(--text-highlight-secondary)">
                    Public App Development:{' '}
                  </Text>
                  I can assist you in developing a public app that is compliant with Shopify&apos;s
                  guidelines and requirements, ensuring a seamless integration with everything
                  Shopify.
                </li>
                <li>
                  <Text tag="span" fontWeight={500} textColor="var(--text-highlight-secondary)">
                    Custom Private App Development:{' '}
                  </Text>
                  If you require a custom private app to streamline your business processes, I can
                  help you create a tailored solution that meets your specific needs.
                </li>
                <li>
                  <Text tag="span" fontWeight={500} textColor="var(--text-highlight-secondary)">
                    Existing App Customization:{' '}
                  </Text>
                  If you already have a Shopify app but need to customize it to better suit your
                  business requirements, I can help you make the necessary changes.
                </li>
                <li>And virtually anything App-related!</li>
              </ol>
            </>
          ),
        },
      },
      {
        $keyId: crypto.randomUUID(),
        question: {
          children: 'THEME DEVELOPMENT',
        },
        answer: {
          children: (
            <>
              <Text>
                Numerous Shopify base and paid themes often lack the specific features necessary to
                achieve your unique goals. This is where my expertise comes into play. With my
                extensive knowledge in Theme Development, I can assist you in the following ways:
              </Text>

              <ol>
                <li>
                  <Text tag="span" fontWeight={500} textColor="var(--text-highlight-secondary)">
                    New & Existing Sections Development:{' '}
                  </Text>
                  Empower your Shopify Store by introducing totally custom and new sections or by
                  extending existing ones, with all of the controls that you need.
                </li>
                <li>
                  <Text tag="span" fontWeight={500} textColor="var(--text-highlight-secondary)">
                    Bug Fixing:{' '}
                  </Text>
                  If a Theme&apos;s default functionality is not working as you expected, or you had
                  a previous code change that broke your theme, I can come in and fix any issues.
                </li>
                <li>
                  <Text tag="span" fontWeight={500} textColor="var(--text-highlight-secondary)">
                    Complex System Integration:{' '}
                  </Text>
                  If you have a complex workflow involving elements such as Metafields, MetaObjects,
                  Tags, Pages, or any custom systems, I specialize in seamlessly integrating them
                  with your Shopify Theme.
                </li>
                <li>And virtually anything Theme-related!</li>
              </ol>
            </>
          ),
        },
      },
      {
        $keyId: crypto.randomUUID(),
        question: {
          children: 'HEADLESS STOREFRONT',
        },
        answer: {
          children:
            'Headless commerce is a rapidly growing trend that decouples the front-end and back-end of an e-commerce platform. By leveraging the power of Shopify as a headless CMS, I can help you create a unique and engaging shopping experience that is tailored to your brand. No matter the framework, I can help you build a headless storefront that is fast, flexible, and scalable.',
        },
      },
      {
        $keyId: crypto.randomUUID(),
        question: {
          children: 'APP INTEGRATIONS',
        },
        answer: {
          children:
            'Occasionally, certain Shopify Apps may not seamlessly integrate with all Shopify Themes, or they may not function correctly at all. In such instances, I offer specialized Custom Development services to ensure these Apps are harmoniously tailored to your Theme for a smooth and effective integration.',
        },
      },
      {
        $keyId: crypto.randomUUID(),
        question: {
          children: 'OPTIMIZATION & PERFORMANCE',
        },
        answer: {
          children:
            'I excel at implementing optimization strategies for your Shopify Theme to tackle common issues such as slow initial loading, low PageSpeed, Lighthouse, or GTMetrix scores. These improvements translate into enhanced SEO performance and a superior user experience.',
        },
      },
      {
        $keyId: crypto.randomUUID(),
        question: {
          children: 'ACCESSIBILITY & UX',
        },
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
              Accessibility plays a crucial role in influencing your SEO rankings and enhancing user
              interface usability across the entire human spectrum. In my portfolio of services, I
              offer solutions to address accessibility-related issues that can, in turn, boost your
              conversion rates.
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
              I offer UX Audits, Guidelines, and practical Implementation services. While I excel in
              UX (User Experience) rather than UI/UX design, my expertise lies in user navigation,
              feature workflows, and device-specific interactions.
              <br />
              <br />
              <Text fontSize="1.4rem">
                If you need any help with UI/UX Design-related work, I can assist by handing you
                direct contact references of known professional Designers.
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
          'Utilizing my knowledge in web development, along with technical skills in React and extensive CSS & JS knowledge, I am a perfect fit for any new component development tasks, bug fixing or for tweaking existing components to suit your needs.',
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
        question: {
          children: 'FULL-STACK FRAMERWORKS',
        },
        answer: {
          children:
            'Choose your React stack and let me handle the rest. Whether it is Remix, Next.js, Astro... no matter. I can help you with your project, from the initial setup to the final deployment, ensuring that your project is built with the best practices and the latest (or legacy, if required) technologies.',
        },
      },
      {
        $keyId: crypto.randomUUID(),
        question: {
          children: 'NEW & EXISTING COMPONENTS',
        },
        answer: {
          children:
            'Are you looking to add new features to your app or enhance your existing components? Look no further. I offer expert assistance in crafting high-quality components while adhering to best and modern coding practices and seamlessly integrating them into your existing architecture.',
        },
      },
      {
        $keyId: crypto.randomUUID(),
        question: {
          children: 'BUG FIXING',
        },
        answer: {
          children:
            "Web development is a dynamic field where new technologies and devices are introduced constantly. It's only natural that occasional bugs and issues arise. When they do, I'm here to help. With my expertise in bug fixing, I'll swiftly restore your features to their optimal state, so you can confidently pursue your goals without interruption.",
        },
      },
      {
        $keyId: crypto.randomUUID(),
        question: {
          children: 'MIGRATIONS',
        },
        answer: {
          children:
            "In today's rapidly evolving tech landscape, React and Next.js have become the preferred choices for startups and companies alike. If you're considering joining this trend, I offer expert assistance in seamlessly transitioning your project to these cutting-edge technologies. Let me guide you through a smooth migration process, ensuring your transition is painless and your goal is achieved.",
        },
      },
      {
        $keyId: crypto.randomUUID(),
        question: {
          children: 'FULL PROJECTS',
        },
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
      children: 'AIDING STARTUPS',
    },
    texts: [
      {
        $keyId: crypto.randomUUID(),
        fontWeight: 500,
        children:
          "Starting up a business comes with its fair share of challenges, but your website should not be one of them. That's where I come in. I provide thorough website audits and top-notch Web Development services, empowering startups to conquer their online goals.",
      },
      {
        $keyId: crypto.randomUUID(),
        children:
          "In today's digital age, your website is often the first impression potential customers have of your brand. It's not just about having an online presence; it's about having a captivating and user-friendly platform that converts visitors into loyal customers. With my expertise, I ensure that your website not only looks visually appealing but also functions seamlessly, creating an exceptional user experience.",
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
        question: {
          children: 'CONSULTATIONS',
        },
        answer: {
          children:
            "What sets my services apart is the option for experienced consultations. I understand that startups may have questions or uncertainties about web development, and that's where I step in. Whether you need advice on choosing the right technology stack, guidance on user experience design, or insights into the latest industry trends, my consultations are designed to provide you with actionable advice and solutions. Startups can come to me anytime they need an informed opinion about web development.",
        },
      },
      {
        $keyId: crypto.randomUUID(),
        question: {
          children: 'WEBSITE AUDITS',
        },
        answer: {
          children: (
            <>
              <Text>
                My website audits are a comprehensive analysis of your current online presence. I
                identify areas of improvement, from optimizing page load times, addressing
                accesibility issues, to enhancing SEO strategies. This valuable insight allows us to
                create a tailored plan to boost your online visibility and attract the right
                audience.
              </Text>
              <br />
              <Text fontSize="1.4rem">
                These are more in depth Audits than the Free Website Audit that I offer for
                first-commer clients.
              </Text>
            </>
          ),
        },
      },
      {
        $keyId: crypto.randomUUID(),
        question: {
          children: 'WEB DEVELOPMENT',
        },
        answer: {
          children:
            "When it comes to web development, I don't believe in one-size-fits-all solutions. Each business is unique, and I take the time to understand your goals, target audience, and industry. Whether you need an e-commerce platform, a content management system, or a custom web application, I craft a solution that aligns perfectly with your vision and objectives.",
        },
      },
      {
        $keyId: crypto.randomUUID(),
        question: {
          children: 'PARTNERSHIP',
        },
        answer: {
          children:
            "In today's fast-paced digital landscape, having a partner who can navigate the intricacies of web development, e-commerce, and digital strategy is essential. Together, we can ensure that your business not only maintains a strong online presence but thrives in the digital realm, capturing the attention and loyalty of your target audience. Let's collaborate to empower your digital success.",
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
          "Solid online presence is essential for established businesses in today's digital age. In an increasingly competitive marketplace, it's crucial to not just have a website, but to have a dynamic and engaging online platform that resonates with your target audience.",
      },
      {
        $keyId: crypto.randomUUID(),
        children:
          'My services encompass a wide range of expertise to help bolster your online presence. As a skilled Web Developer, I can create and optimize websites that not only look stunning but also function flawlessly, ensuring a seamless user experience. With a deep understanding of Shopify and React, I can customize and enhance your e-commerce capabilities, giving you the tools to thrive in the ever-evolving online retail landscape.',
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
        question: {
          children: 'WEB DEVELOPMENT',
        },
        answer: {
          children:
            "When it comes to web development, I don't believe in one-size-fits-all solutions. Each business is unique, and I take the time to understand your goals, target audience, and industry. Whether you need an e-commerce platform, a content management system, or a custom web application, I craft a solution that aligns perfectly with your vision and objectives.",
        },
      },
      {
        $keyId: crypto.randomUUID(),
        question: {
          children: 'WEBSITE AUDITS',
        },
        answer: {
          children: (
            <>
              <Text>
                My website audits are a comprehensive analysis of your current online presence. I
                identify areas of improvement, from optimizing page load times, addressing
                accesibility issues, to enhancing SEO strategies. This valuable insight allows us to
                create a tailored plan to boost your online visibility and attract the right
                audience.
              </Text>
              <br />
              <Text fontSize="1.4rem">
                These are more in depth Audits than the Free Website Audit that I offer for
                first-commer clients.
              </Text>
            </>
          ),
        },
      },
      {
        $keyId: crypto.randomUUID(),
        question: {
          children: 'CONSULTATIONS',
        },
        answer: {
          children:
            "What sets my services apart is the option for experienced consultations. I understand too that businesses may have questions or uncertainties about web development, and that's where I step in. Whether you need advice on choosing the right technology stack, guidance on user experience design, or insights into the latest industry trends, my consultations are designed to provide you with actionable advice and solutions. Businesses can come to me anytime they need an informed opinion about web development.",
        },
      },
      {
        $keyId: crypto.randomUUID(),
        question: {
          children: 'PARTNERSHIP',
        },
        answer: {
          children:
            "In today's fast-paced digital landscape, having a partner who can navigate the intricacies of web development, e-commerce, and digital strategy is essential. Together, we can ensure that your business not only maintains a strong online presence but thrives in the digital realm, capturing the attention and loyalty of your target audience. Let's collaborate to empower your digital success.",
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
          'Experiencing slow performance, a high bounce rate, or unsuccessful conversion strategies on your website? I offer a free website review that can help you identify areas for improvement that will bring you closer to your goals.',
      },
      {
        $keyId: crypto.randomUUID(),
        children:
          "In today's fast-paced digital landscape, your website is often the first interaction potential customers have with your brand. If it's not up to par, you could be losing valuable opportunities. My comprehensive website review will delve into various critical aspects of your site, uncovering hidden issues and untapped potential.",
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
        question: {
          children: 'OPTIMIZATION & PERFORMANCE',
        },
        answer: {
          children:
            'I excel at implementing optimization strategies for Web projects to tackle common issues such as slow initial loading, low PageSpeed, Lighthouse, or GTMetrix scores. These improvements translate into enhanced SEO performance and a superior user experience.',
        },
      },
      {
        $keyId: crypto.randomUUID(),
        question: {
          children: 'ACCESSIBILITY & UX ',
        },
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
              Accessibility plays a crucial role in influencing your SEO rankings and enhancing user
              interface usability across the entire human spectrum. In my portfolio of services, I
              offer solutions to address accessibility-related issues that can, in turn, boost your
              conversion rates.
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
              I offer UX Audits, Guidelines, and practical Implementation services. While I excel in
              UX (User Experience) rather than UI/UX design, my expertise lies in user navigation,
              feature workflows, and device-specific interactions.
              <br />
              <br />
              <Text fontSize="1.4rem">
                If you need any help with UI/UX Design-related work, I can assist by handing you
                direct contact references of known professional Designers.
              </Text>
            </>
          ),
        },
      },
      {
        $keyId: crypto.randomUUID(),
        question: {
          children: 'BUG FIXING',
        },
        answer: {
          children:
            "Web development is a dynamic field where new technologies and devices are introduced constantly. It's only natural that occasional bugs and issues arise. When they do, I'm here to help. With my expertise in bug fixing, I'll guide you through strategies that will help you restore your features to their optimal state, so you can confidently pursue your goals without interruption.",
        },
      },
    ],
  },
];

export default servicesData;
