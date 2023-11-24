// Dependencies
import { useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AnimatePresence, useAnimate } from 'framer-motion';
// Components
import Text from '@components/shared/Text/Text';
import Button from '@components/shared/Button/Button';
import Heading from '@components/shared/Heading/Heading';
import Checkbox from '@components/shared/Checkbox/Checkbox';
import TextArea from '@components/shared/TextArea/Textarea';
import InputText from '@components/shared/InputText/InputText';
// Types
import type { FormData } from '@content/Contact/ContactForm/ContactForm.types';
// Styled Components
import {
  StyledForm,
  FormOverlay,
  SuccessIcon,
  SuccessText,
  SubmitContainer,
  SuccessContainer,
} from './ContactForm.styles';

// https://emailregex.com/index.html
const EMAIL_REGEX =
  // eslint-disable-next-line max-len
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function ContactForm() {
  const {
    register,
    handleSubmit,
    setError,
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

  const submitForm = async (data: FormData) => {
    // Answer about exposing my public key
    // https://www.emailjs.com/docs/faq/is-it-okay-to-expose-my-public-key/
    try {
      await emailjs.send(
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
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      setError('root.serverSideError', {
        type: 'serverSide',
        message: 'Something went wrong, please try again.',
      });
    }
  };

  const shouldPauseForm = isSubmitting || isSubmitSuccessful;

  const [successIconScope, successIconAnimate] = useAnimate();

  useEffect(() => {
    if (isSubmitSuccessful) {
      const enterAnimation = async () => {
        await successIconAnimate(
          'path',
          { pathLength: 0, fill: 'rgba(0, 0, 0, 0.0)', opacity: 0 },
          {
            duration: 0.000000000000001,
          }
        );
        await successIconAnimate(successIconScope.current, { opacity: 1 }, { duration: 0.4 });
        await successIconAnimate(
          'path',
          { pathLength: 1.1, fill: 'rgba(255, 0, 4, 1)', opacity: 1 },
          {
            duration: 1.2,
            opacity: {
              duration: 0.4,
            },
            fill: {
              delay: 0.8,
              duration: 0.4,
            },
          }
        );
      };
      enterAnimation();
    }
  }, [isSubmitSuccessful, successIconScope, successIconAnimate]);

  return (
    <>
      <StyledForm onSubmit={handleSubmit((data) => submitForm(data))}>
        <AnimatePresence>
          {shouldPauseForm && (
            <FormOverlay initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              {isSubmitSuccessful && (
                <SuccessContainer>
                  <SuccessIcon size={120} ref={successIconScope} />
                  <SuccessText
                    fontWeight={500}
                    textAlign="center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 1.6, delay: 1 } }}
                    exit={{ opacity: 0 }}
                  >
                    Success! <br /> We&rsquo;re one step closer to your goal!
                  </SuccessText>
                </SuccessContainer>
              )}
            </FormOverlay>
          )}
        </AnimatePresence>

        <Heading
          headingLevel="h1"
          fontSize={{
            all: '3.2rem',
            md: '4rem',
          }}
        >
          SUBMIT A REQUEST
        </Heading>

        <Text
          className="form-heading"
          fontWeight={500}
          fontSize="2rem"
          fontFamily="var(--heading-family)"
        >
          ABOUT YOU
        </Text>

        <InputText
          type="text"
          placeholder="* First Name"
          disabled={shouldPauseForm}
          isError={!!errors.firstName}
          errorMessage={errors.firstName?.message}
          {...register('firstName', {
            required: '🙂 Come on, tell me your name.',
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

        <InputText
          type="text"
          placeholder="Last Name"
          isError={!!errors.lastName}
          errorMessage={errors.lastName?.message}
          disabled={shouldPauseForm}
          {...register('lastName', {
            maxLength: {
              value: 30,
              message: '🫠 Use a shorter last name.',
            },
          })}
        />

        <InputText
          type="email"
          placeholder="* Email"
          isError={!!errors.email}
          errorMessage={errors.email?.message}
          disabled={shouldPauseForm}
          {...register('email', {
            required: '😉 I need you to fill this out so I can get back to you.',
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

        <Text
          className="form-heading"
          fontWeight={500}
          fontSize="2rem"
          fontFamily="var(--heading-family)"
        >
          DESCRIBE YOUR PROJECT & NEEDS
        </Text>

        <TextArea
          rows={4}
          resize="vertical"
          isError={!!errors.message}
          errorMessage={errors.message?.message}
          placeholder="* Write here..."
          disabled={shouldPauseForm}
          {...register('message', {
            required: '🤚🏻 Wait, wait, tell me how can I help first.',
          })}
        />

        <Text
          className="form-heading"
          fontWeight={500}
          fontSize="2rem"
          fontFamily="var(--heading-family)"
        >
          HOW DID YOU LEARN ABOUT ME?
        </Text>
        <InputText
          type="text"
          placeholder="Start typing..."
          disabled={shouldPauseForm}
          isError={!!errors.referredBy}
          errorMessage={errors.referredBy?.message}
          {...register('referredBy', {
            maxLength: {
              value: 200,
              message: '🤔 This is a bit too long, friend.',
            },
          })}
        />

        <SubmitContainer>
          <Checkbox
            label={
              <>
                I agree to the <Link to="/privacy-policy">Privacy Policy</Link>
              </>
            }
            isError={!!errors.agreePolicy}
            errorMessage={errors.agreePolicy?.message}
            {...register('agreePolicy', {
              required: '🫱🏼‍🫲🏼 Your data is safe, but I need your permission.',
            })}
          />

          <Button text="Send" variant="tertiary" buttonRole="submit" isDisabled={shouldPauseForm} />
        </SubmitContainer>
        {errors.root?.serverSideError && <p>{errors.root?.serverSideError.message}</p>}
      </StyledForm>

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
    </>
  );
}

export default ContactForm;
