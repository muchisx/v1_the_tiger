// Dependencies
import { css } from 'styled-components';
import { useRef, Children } from 'react';
import { useScroll, useSpring, useTransform } from 'framer-motion';
// Components
import Card from '@components/Card/Card';
import Tag from '@components/shared/Tag/Tag';
import Text from '@components/shared/Text/Text';
import Button from '@components/shared/Button/Button';
import Heading from '@components/shared/Heading/Heading';
import Section from '@components/shared/Section/Section';
import ImageMasked from '@components/shared/ImageMasked/ImageMasked';
// Styled Components
import {
  SectionCSS,
  SubSection,
  ButtonsHeading,
  ImageMaskedCSS,
  TextsContainer,
  CardsContainer,
  BackgroundShape,
  ButtonsContainer,
} from './SplitContent.styles';
// Types
import { Props, SplitContentCustomProps } from './SplitContent.types';

function SplitContent(props: Props) {
  const { leftContent, rightContent, customStyles, contain, children } = props;
  const { topTag, leftTexts, backgroundShape, buttonsLabel, leftButtons, maskedImageURL, leftHeading } =
    leftContent || {};
  const { rightHeading, rightButtons, rightTexts, cards } = rightContent || {};

  // 1️⃣ Filtering of {children} because one goes in the left and another in the right
  // This uses the custom exported component in the bottom of the file to make it work
  // Any other use of children will be ignored if not used with these components
  // -------------------------- --------------------------
  // TODO : Make this trully only accept the custom component,
  // TODO : So far it takes any component aslong as it has a 'location' prop
  // TODO : with a value that matches the check below.
  const leftCustomChild = Children.map(children, (child) => (child?.props.location === 'first' ? child : null))?.[0];
  const rightCustomChild = Children.map(children, (child) => (child?.props.location === 'second' ? child : null))?.[0];
  // -------------------------- --------------------------

  // 2️⃣ Render Validations
  // -------------------------- --------------------------
  // Check if any of the children exist before rendering it's parent
  const renderLeftContent =
    topTag ||
    leftTexts ||
    backgroundShape ||
    buttonsLabel ||
    leftButtons ||
    maskedImageURL ||
    leftHeading ||
    leftCustomChild;
  const renderRightContent = rightHeading || rightButtons || rightTexts || cards || rightCustomChild;

  if (!renderLeftContent && !renderRightContent) {
    throw new Error('SplitContent: top-level children must exist');
  }
  // -------------------------- --------------------------

  // Animations - Scroll Progress variables - checks the scroll progress of the page and assigns its value in a variable
  const sectionRef = useRef(null);
  const rotationValues = backgroundShape?.rotation || [0, 20];
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', '132vh end'] });
  const shapeRotation = useTransform(scrollYProgress, [0, 1], rotationValues);
  const shapeRotationSpring = useSpring(shapeRotation, { stiffness: 10, damping: 10, mass: 1 });

  return (
    <Section
      customStyles={SectionCSS.concat(customStyles)}
      contain={contain}
      enableGutter
      paddingTop={40}
      paddingBottom={40}
      ref={sectionRef}
    >
      {backgroundShape && (
        <BackgroundShape src={backgroundShape.url} style={{ rotateZ: shapeRotationSpring }} loading="lazy" />
      )}

      {renderLeftContent && (
        <SubSection className="split-content__first" {...leftContent}>
          {topTag && <Tag {...topTag} />}
          {leftHeading && <Heading {...leftHeading} />}

          {leftCustomChild && leftCustomChild}

          {!!leftTexts?.length && (
            <TextsContainer>
              {leftTexts.map((textProps) => (
                <Text key={textProps.$keyId} {...textProps} />
              ))}
            </TextsContainer>
          )}

          {!!leftButtons?.length && (
            <ButtonsContainer>
              {buttonsLabel && <ButtonsHeading>{buttonsLabel}</ButtonsHeading>}
              {leftButtons.map((buttonProps) => (
                <Button key={buttonProps.$keyId} {...buttonProps} />
              ))}
            </ButtonsContainer>
          )}

          {maskedImageURL && (
            <ImageMasked height="144px" width="144px" src={maskedImageURL} customStyles={ImageMaskedCSS} />
          )}
        </SubSection>
      )}

      {renderRightContent && (
        <SubSection className="split-content__second">
          {rightHeading && <Heading {...rightHeading} />}

          {rightCustomChild && rightCustomChild}

          {!!rightTexts?.length && (
            <TextsContainer>
              {rightTexts.map((textProps) => (
                <Text key={textProps.$keyId} {...textProps} />
              ))}
            </TextsContainer>
          )}

          {!!cards?.length && (
            <CardsContainer>
              {cards.map((cardProps, index) => (
                <Card
                  key={cardProps.$keyId}
                  {...cardProps}
                  customStyles={css`
                    --order: ${index + 1};
                  `}
                />
              ))}
            </CardsContainer>
          )}

          {!!rightButtons?.length && (
            <ButtonsContainer>
              {rightButtons.map((buttonProps) => (
                <Button key={buttonProps.$keyId} {...buttonProps} />
              ))}
            </ButtonsContainer>
          )}
        </SubSection>
      )}
    </Section>
  );
}

function SplitContentCustom({ children }: SplitContentCustomProps) {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
}
export { SplitContentCustom };
export default SplitContent;
