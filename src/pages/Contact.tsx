// Dependencies
import { CalendarLtr, Chat, Mail } from '@styled-icons/fluentui-system-filled';
// Components
import Text from '@components/shared/Text/Text';
import Button from '@components/shared/Button/Button';
import Heading from '@components/shared/Heading/Heading';
import ContactForm from '@content/Contact/ContactForm/ContactForm';
import SplitContent, { SplitContentCustom } from '@components/SplitContent/SplitContent';
// Styled Components
import contactFormSectionCSS from '@content/Contact/contactFormSection';
// Assets
import contactFormBgShape from '@assets/svgs/abstract-8.svg';

function Contact() {
  return (
    <main className="page page--contact">
      <SplitContent
        contain="padding"
        leftContent={{
          backgroundShape: {
            url: contactFormBgShape,
            rotation: [-30, 32],
          },
        }}
        rightContent={{}}
        customStyles={contactFormSectionCSS}
      >
        <SplitContentCustom location="first">
          <div className="contact-sticky">
            <Heading fontSize={{ all: '3.8rem', md: '4.8rem' }}>
              <span className="highlight-primary">GOT AN IDEA?</span>
              <br />
              <span>LET&#39;S WORK TOGETHER!</span>
            </Heading>

            <Text>
              Reach out to me, and together, we&rsquo;ll craft a website that outshines the competition,
              <br />
              leaving us proud of the exceptional results we achieve.
            </Text>

            <div className="contact-methods">
              <Button
                Icon={Chat}
                text="Telegram"
                variant="primary"
                buttonRole="link"
                to="https://t.me/migxang"
                newTab
              />
              <Button
                text="Reserve a free meeting"
                Icon={CalendarLtr}
                variant="primary"
                buttonRole="link"
                to="https://calendly.com/miguel-angel-creator/free-meeting"
                newTab
              />
              <Button
                text="miguel.angel.creator@gmail.com"
                Icon={Mail}
                variant="primary"
                buttonRole="link"
                to="mailto:miguel.angel.creator@gmail.com?subject=Miguel!%20-%20Help%20me%20with:%20"
              />
            </div>
          </div>
        </SplitContentCustom>

        <SplitContentCustom location="second">
          <ContactForm />
        </SplitContentCustom>
      </SplitContent>
    </main>
  );
}

export default Contact;
