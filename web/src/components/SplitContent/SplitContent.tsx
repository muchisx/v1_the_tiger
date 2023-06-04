/* eslint-disable react/jsx-props-no-spreading */
import { useRef } from 'react';
import { useScroll, useSpring, useTransform } from 'framer-motion';
import { css } from 'styled-components';
import Button from '../shared/Button/Button';
import Section from '../shared/Section/Section';
import ImageMasked from '../shared/ImageMasked/ImageMasked';
import Text from '../shared/Text/Text';
import Card from '../Card/Card';
import Heading from '../shared/Heading/Heading';
import {
  SectionCSS,
  BackgroundShape,
  ButtonsContainer,
  ButtonsHeading,
  ImageMaskedCSS,
  SubSection,
  CardsContainer,
} from './SplitContent.styles';
import { Props } from './SplitContent.types';

function SplitContent(props: Props) {
  const { leftContent, rightContent, customStyles, contain, containType } = props;
  const { topButton, leftTexts, backgroundShape, buttonsLabel, leftButtons, maskedImageURL, leftHeading } = leftContent;
  const { rightHeading, rightButtons, rightTexts, cards } = rightContent;

  // Validation - Section Props - checks if contain is passed in before passing down containType
  const containProps = contain ? { contain, containType } : { contain };

  // Validation - Parent Renders - checks if children exist before rendering parents
  const renderLeftContent =
    topButton || leftTexts || backgroundShape || buttonsLabel || leftButtons || maskedImageURL || leftHeading;
  const renderRightContent = rightHeading || rightButtons || rightTexts || cards;

  // Animations - Scroll Progress variables - checks the scroll progress of the page and assigns its value in a variable
  const sectionRef = useRef(null);
  const rotationValues = backgroundShape?.rotation || [180, 220];
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', '132vh end'] });
  const shapeRotation = useTransform(scrollYProgress, [0, 1], rotationValues);
  const shapeRotationSpring = useSpring(shapeRotation, { stiffness: 10, damping: 10, mass: 1 });

  return (
    <Section
      customStyles={SectionCSS.concat(customStyles)}
      {...containProps}
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

          {leftTexts?.length && leftTexts.map((textProps) => <Text key={textProps.id} {...textProps} />)}

          {leftButtons?.length && (
            <ButtonsContainer>
              {buttonsLabel && <ButtonsHeading>{buttonsLabel}</ButtonsHeading>}
              {leftButtons.map((buttonProps) => (
                <Button key={buttonProps.id} {...buttonProps} />
              ))}
            </ButtonsContainer>
          )}

          {maskedImageURL && <ImageMasked height={144} width={144} src={maskedImageURL} css={ImageMaskedCSS} />}
        </SubSection>
      )}

      {renderRightContent && (
        <SubSection className="split-content__second">
          {rightHeading && <Heading {...rightHeading} />}

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
