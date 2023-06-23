// Dependencies
import { useRef, type ReactNode } from 'react';
import { useScroll, useSpring, useTransform } from 'framer-motion';
import { css } from 'styled-components';
// Types
import { Props } from './SplitContent.types';
// Components
import Button from '../shared/Button/Button';
import Section from '../shared/Section/Section';
import ImageMasked from '../shared/ImageMasked/ImageMasked';
import Text from '../shared/Text/Text';
import Card from '../Card/Card';
import Heading from '../shared/Heading/Heading';
// Styled Components
import {
  SectionCSS,
  BackgroundShape,
  ButtonsContainer,
  ButtonsHeading,
  ImageMaskedCSS,
  SubSection,
  CardsContainer,
} from './SplitContent.styles';

function SplitContent(props: Props) {
  const { leftContent, rightContent, customStyles, contain, children } = props;
  const { topButton, leftTexts, backgroundShape, buttonsLabel, leftButtons, maskedImageURL, leftHeading } =
    leftContent || {};
  const { rightHeading, rightButtons, rightTexts, cards } = rightContent || {};

  // 1️⃣ Filtering of {children} because one goes in the left and another in the right
  // This uses the custom exported components in the bottom of the file to make it work
  // Any other use of children will be ignored if not used with these components
  // -------------------------- --------------------------
  let firstCustomChild;
  let secondCustomChild;
  if (Array.isArray(children)) {
    firstCustomChild = children.find((child) => child.type.name === 'SplitContentCustomFirst');
    secondCustomChild = children.find((child) => child.type.name === 'SplitContentCustomSecond');
  } else {
    firstCustomChild = children?.type.name === 'SplitContentCustomFirst' && children;
    secondCustomChild = children?.type.name === 'SplitContentCustomSecond' && children;
  }
  // -------------------------- --------------------------

  // 2️⃣ Render Validations
  // -------------------------- --------------------------
  // Check if any of the children exist before rendering it's parent
  const renderLeftContent =
    topButton ||
    leftTexts ||
    backgroundShape ||
    buttonsLabel ||
    leftButtons ||
    maskedImageURL ||
    leftHeading ||
    firstCustomChild;
  const renderRightContent = rightHeading || rightButtons || rightTexts || cards || secondCustomChild;

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
      paddingTop={56}
      paddingBottom={56}
      ref={sectionRef}
    >
      {backgroundShape && (
        <BackgroundShape src={backgroundShape.url} style={{ rotateZ: shapeRotationSpring }} loading="lazy" />
      )}

      {renderLeftContent && (
        <SubSection className="split-content__first" {...leftContent}>
          {topButton && <Button {...topButton} />}
          {leftHeading && <Heading {...leftHeading} />}

          {firstCustomChild && firstCustomChild}

          {leftTexts?.length && leftTexts.map((textProps) => <Text key={textProps.id} {...textProps} />)}

          {leftButtons?.length && (
            <ButtonsContainer>
              {buttonsLabel && <ButtonsHeading>{buttonsLabel}</ButtonsHeading>}
              {leftButtons.map((buttonProps) => (
                <Button key={buttonProps.id} {...buttonProps} />
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

          {secondCustomChild && secondCustomChild}

          {rightTexts?.length && rightTexts.map((textProps) => <Text key={textProps.id} {...textProps} />)}

          {cards?.length && (
            <CardsContainer>
              {cards.map((cardProps, index) => (
                <Card
                  key={cardProps.id}
                  {...cardProps}
                  customStyles={css`
                    --order: ${index + 1};
                  `}
                />
              ))}
            </CardsContainer>
          )}

          {rightButtons?.length && (
            <ButtonsContainer>
              {rightButtons.map((buttonProps) => (
                <Button key={buttonProps.id} {...buttonProps} />
              ))}
            </ButtonsContainer>
          )}
        </SubSection>
      )}
    </Section>
  );
}

export default SplitContent;

type ChildrenProps = { children: ReactNode };
export function SplitContentCustomFirst({ children }: ChildrenProps) {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
}
export function SplitContentCustomSecond({ children }: ChildrenProps) {
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
}
