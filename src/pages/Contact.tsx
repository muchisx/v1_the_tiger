// Dependencies
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { CalendarLtr, Chat, Mail } from '@styled-icons/fluentui-system-filled';
// Components
import Text from '@components/shared/Text/Text';
import Button from '@components/shared/Button/Button';
import Heading from '@components/shared/Heading/Heading';
import Checkbox from '@components/shared/Checkbox/Checkbox';
import TextArea from '@components/shared/TextArea/Textarea';
import InputText from '@components/shared/InputText/InputText';
import SplitContent, { SplitContentCustom } from '@components/SplitContent/SplitContent';
// Styled Components
import { Form, SubmitContainer, contactFormCustomStyles } from '@content/Contact/contactForm';
// Assets
import contactFormBgShape from '@assets/svgs/abstract-8.svg';
// Types
import type { FormData } from '@content/Contact/contactForm.types';

// https://emailregex.com/index.html
const EMAIL_REGEX =
  // eslint-disable-next-line max-len
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// const PHONE_REGEX = /^(\+\d{1,3})?[-\s]?[(]?\d{3}[)]?[-\s.]?\d{3}[-\s.]?\d{4}$/;

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormData>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
      referredBy: '',
      agreePolicy: false,
    },
    shouldUseNativeValidation: true,
  });

  // console.log(errors);

  const submitForm = async (data: FormData) => {
    // console.log(data);

    // Answer about exposing my public key
    // https://www.emailjs.com/docs/faq/is-it-okay-to-expose-my-public-key/
    try {
      const res = await emailjs.send(
        'service_pe12xwh',
        'template_9rkxv1s',
        {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          message: data.message,
          referredBy: data.referredBy,
        },
        'vSvfUoAjZmx5qhA9w'
      );
      // console.log(res);
    } catch (error) {
      // console.error(error);
    }
  };

  return (
    <main className="page page--contact">
      <SplitContent
        contain="padding"
        leftContent={{
          backgroundShape: {
            url: contactFormBgShape,
          },
        }}
        rightContent={{}}
        customStyles={contactFormCustomStyles}
      >
        <SplitContentCustom location="first">
          <div className="contact-sticky">
            <Heading fontSize={{ all: '3.8rem', md: '4.8rem' }}>
              <span className="highlight-primary">GOT AN IDEA?</span>
              <br />
              <span>LET&#39;S WORK TOGETHER!</span>
            </Heading>

            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              <br />
              excepturi odio impedit sapiente explicabo provident, itaque reiciendis
            </Text>

            <div className="contact-methods">
              <Button
                Icon={Chat}
                text="Telegram"
                variant="primary"
                buttonRole="link"
                to="https://t.me/muchisx"
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
          <Form onSubmit={handleSubmit((data) => submitForm(data))}>
            <Text className="form-heading" fontWeight={500} fontSize="2rem" fontFamily="var(--heading-family)">
              ABOUT YOU
            </Text>

            <InputText
              type="text"
              placeholder="* First Name"
              {...register('firstName', {
                required: '🙂 Come on, tell me your name.',
                disabled: isSubmitting || isSubmitSuccessful,
                minLength: {
                  value: 2,
                  message: '🤔 Type atleast 2 characters',
                },
                maxLength: {
                  value: 30,
                  message: '🫠 Use a shorter name.',
                },
              })}
            />
            {errors.firstName && <p>{errors.firstName.message}</p>}

            <InputText
              type="text"
              placeholder="Last Name"
              {...register('lastName', {
                disabled: isSubmitting || isSubmitSuccessful,
                maxLength: {
                  value: 30,
                  message: '🫠 Use a shorter last name.',
                },
              })}
            />
            {errors.lastName && <p>{errors.lastName.message}</p>}

            <InputText
              type="email"
              placeholder="* Email"
              {...register('email', {
                required: '😉 I need you to fill this out so I can get back to you.',
                disabled: isSubmitting || isSubmitSuccessful,
                minLength: {
                  value: 5,
                  message: '🥸 An email has atleast 5 characters (a@b.c)',
                },
                pattern: {
                  value: EMAIL_REGEX,
                  message: "🤔 This doesn't look like a valid email",
                },
              })}
            />
            {errors.email && <p>{errors.email.message}</p>}

            {/* <input
              type="tel"
              {...register('phone', {
                minLength: {
                  value: 10,
                  message: '🥸 Our goal here is atleast 10 digits.',
                },
                pattern: {
                  value: PHONE_REGEX,
                  message: '🫠 Try a simpler phone format.',
                },
              })}
            />
            {errors.phone && <p>{errors.phone.message}</p>} */}

            <Text className="form-heading" fontWeight={500} fontSize="2rem" fontFamily="var(--heading-family)">
              DESCRIBE YOUR PROJECT & NEEDS
            </Text>

            <TextArea
              rows={4}
              resize="vertical"
              placeholder="* Write here..."
              {...register('message', {
                required: '🤚🏻 Wait, wait, tell me how can I help first.',
                disabled: isSubmitting || isSubmitSuccessful,
              })}
            />

            {errors.message && <p>{errors.message.message}</p>}

            <Text className="form-heading" fontWeight={500} fontSize="2rem" fontFamily="var(--heading-family)">
              HOW DID YOU LEARN ABOUT ME?
            </Text>
            <InputText
              type="text"
              placeholder="Start typing..."
              {...register('referredBy', {
                disabled: isSubmitting || isSubmitSuccessful,
                maxLength: {
                  value: 200,
                  message: '🤔 This is a bit too long, friend.',
                },
              })}
            />
            {errors.referredBy && <p>{errors.referredBy.message}</p>}

            <SubmitContainer>
              <Checkbox
                label="I agree to the Privacy Policy*"
                {...register('agreePolicy', {
                  required: '🫱🏼‍🫲🏼 Your data is safe, but I need your permission.',
                  disabled: isSubmitting || isSubmitSuccessful,
                })}
              />
              {errors.agreePolicy && <p>{errors.agreePolicy.message}</p>}

              <Button
                text="Send"
                variant="tertiary"
                buttonRole="submit"
                isDisabled={isSubmitting || isSubmitSuccessful}
              />
            </SubmitContainer>

            <Text fontSize="1.4rem">
              If you face issues with this form, please{' '}
              <Link to="mailto:miguel.angel.creator@gmail.com?subject=Miguel!%20-%20Help%20me%20with:%20">
                deliver an ordinary email
              </Link>
              {' or '}
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to="https://calendly.com/miguel-angel-creator/free-meeting"
              >
                schedule a meeting
              </Link>
              .
            </Text>

            <p>{`isSubmitting: ${isSubmitting}`}</p>
            <p>{`isSubmitSuccessful: ${isSubmitSuccessful}`}</p>
          </Form>
        </SplitContentCustom>
      </SplitContent>
    </main>
  );
}

export default Contact;
