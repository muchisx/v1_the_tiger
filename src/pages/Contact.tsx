// Dependencies
import { useForm } from 'react-hook-form';
// Components
import Text from '@components/shared/Text/Text';
import Button from '@components/shared/Button/Button';
import Heading from '@components/shared/Heading/Heading';
import SplitContent, { SplitContentCustom } from '@components/SplitContent/SplitContent';

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors);

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
          <form
            onSubmit={handleSubmit((data) => {
              console.log(data);
            })}
          >
            <input
              type="text"
              {...register('firstName', {
                required: 'This is required',
                minLength: {
                  value: 2,
                  message: 'Minimum length is 2',
                },
              })}
            />
            <input type="text" {...register('lastName', { minLength: 2 })} />
            <input type="email" {...register('email', { minLength: 5 })} />
            <input type="tel" {...register('phone')} />
            <textarea {...register('message')} />

            <input type="text" {...register('referredBy')} />

            <input type="checkbox" {...register('agreePolicy')} />

            <Button buttonRole="submit" variant="tertiary" text="Send" />
          </form>
        </SplitContentCustom>
      </SplitContent>
    </main>
  );
}

export default Contact;
