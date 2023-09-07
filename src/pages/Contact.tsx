// Dependencies
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
// Components
import Text from '@components/shared/Text/Text';
import Button from '@components/shared/Button/Button';
import Heading from '@components/shared/Heading/Heading';
import Checkbox from '@components/shared/Checkbox/Checkbox';
import InputText from '@components/shared/InputText/InputText';
import SplitContent, { SplitContentCustom } from '@components/SplitContent/SplitContent';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  // phone: string;
  message: string;
  referredBy: string;
  agreePolicy: boolean;
};

// https://emailregex.com/index.html
const EMAIL_REGEX =
  // eslint-disable-next-line max-len
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// const PHONE_REGEX = /^(\+\d{1,3})?[-\s]?[(]?\d{3}[)]?[-\s.]?\d{3}[-\s.]?\d{4}$/;

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
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
    console.log(data);

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
      console.log(res);
    } catch (error) {
      // console.error(error);
    }
  };

  return (
    <main className="page page--contact">
      <SplitContent leftContent={{}} rightContent={{}}>
        <SplitContentCustom location="first">
          <Heading fontSize={{ all: '3.8rem', md: '4.8rem' }}>
            <span className="highlight-primary">GOT AN IDEA?</span>
            <br />
            <span>LET&#39;S WORK TOGETHER!</span>
          </Heading>

          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, culpa maxime? Molestias nesciunt natus
            excepturi odio impedit sapiente explicabo provident, itaque reiciendis atque, rem illum reprehenderit eum
            amet soluta ipsa.
          </Text>
        </SplitContentCustom>

        <SplitContentCustom location="second">
          <form onSubmit={handleSubmit((data) => submitForm(data))}>
            <InputText
              type="text"
              placeholder="First Name"
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
            {errors.firstName && <p>{errors.firstName.message}</p>}

            <InputText type="text" placeholder="Last Name" {...register('lastName', { minLength: 2 })} />
            {errors.lastName && <p>{errors.lastName.message}</p>}

            <InputText
              type="email"
              placeholder="Email"
              {...register('email', {
                minLength: {
                  value: 5,
                  message: '🥸 An email has atleast 5 characters (a@b.c)',
                },
                pattern: {
                  value: EMAIL_REGEX,
                  message: "🤔 This doesn't look like a valid email",
                },
                required: '😉 I need you to fill this out so I can get back to you.',
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

            <textarea
              placeholder="Write here..."
              {...register('message', { required: '🤚🏻 Wait, wait, tell me how can I help first.' })}
            />
            {errors.message && <p>{errors.message.message}</p>}

            <InputText
              type="text"
              placeholder="Start typing..."
              {...register('referredBy', {
                maxLength: {
                  value: 200,
                  message: '🤔 This is a bit too long, friend.',
                },
              })}
            />
            {errors.referredBy && <p>{errors.referredBy.message}</p>}

            <Checkbox
              {...register('agreePolicy', {
                required: '🫱🏼‍🫲🏼 Your data is safe, but I need your permission.',
              })}
              label="Agree to the policy"
              type="submit"
            />
            {errors.agreePolicy && <p>{errors.agreePolicy.message}</p>}

            <Button
              buttonRole="submit"
              variant="tertiary"
              text="Send"
              isDisabled={isSubmitting || isSubmitSuccessful}
            />
            <p>{`isSubmitting: ${isSubmitting}`}</p>
            <p>{`isSubmitSuccessful: ${isSubmitSuccessful}`}</p>
          </form>
        </SplitContentCustom>
      </SplitContent>
    </main>
  );
}

export default Contact;
