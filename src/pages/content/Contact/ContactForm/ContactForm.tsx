// Dependencies
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AnimatePresence } from 'framer-motion';
// Components
import Text from '@components/shared/Text/Text';
import Button from '@components/shared/Button/Button';
import Checkbox from '@components/shared/Checkbox/Checkbox';
import TextArea from '@components/shared/TextArea/Textarea';
import InputText from '@components/shared/InputText/InputText';
// Types
import type { FormData } from '@content/Contact/ContactForm/ContactForm.types';
// Styled Components
import { StyledForm, FormOverlay, SubmitContainer } from './ContactForm.styles';

// https://emailregex.com/index.html
const EMAIL_REGEX =
  // eslint-disable-next-line max-len
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function ContactForm() {
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
    <>
      <StyledForm onSubmit={handleSubmit((data) => submitForm(data))}>
        <AnimatePresence>
          {isSubmitSuccessful ||
            (isSubmitting && <FormOverlay initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />)}
        </AnimatePresence>

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

          <Button text="Send" variant="tertiary" buttonRole="submit" isDisabled={isSubmitting || isSubmitSuccessful} />
        </SubmitContainer>
      </StyledForm>

      <Text fontSize="1.4rem">
        If you face issues with this form, please{' '}
        <Link to="mailto:miguel.angel.creator@gmail.com?subject=Miguel!%20-%20Help%20me%20with:%20">
          deliver an ordinary email
        </Link>
        {' or '}
        <Link target="_blank" rel="noopener noreferrer" to="https://calendly.com/miguel-angel-creator/free-meeting">
          schedule a meeting
        </Link>
        .
      </Text>
    </>
  );
}

export default ContactForm;
