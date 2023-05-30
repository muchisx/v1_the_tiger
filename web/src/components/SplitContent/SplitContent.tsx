/* eslint-disable react/jsx-props-no-spreading */
import { useScroll, useTransform } from 'framer-motion';
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
} from './SplitContent.styles';
import { Props } from './SplitContent.types';

function SplitContent(props: Props) {
  const { leftContent, rightContent, customStyles, contain, containType } = props;
  const { topButton, leftTexts, backgroundShapeURL, buttonsLabel, leftButtons, maskedImageURL, leftHeading } =
    leftContent;
  const { rightButtons, rightTexts, cards } = rightContent;
  const containProps = contain ? { contain, containType } : { contain };

  const { scrollYProgress } = useScroll();
  const shapeRotation = useTransform(scrollYProgress, [0, 1], [180, 192]);

  return (
    <Section css={SectionCSS.concat(customStyles)} {...containProps} enableGutter paddingTop={32} paddingBottom={32}>
      {backgroundShapeURL && (
        <BackgroundShape src={backgroundShapeURL} style={{ rotateZ: shapeRotation }} loading="lazy" />
      )}

      <SubSection className="split-content__first">
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
      <SubSection className="split-content__second">
        {rightTexts?.length && rightTexts.map((textProps) => <Text key={textProps.id} {...textProps} />)}

        {cards?.length && cards.map((cardProps) => <Card key={cardProps.id} {...cardProps} />)}

        {rightButtons?.length && (
          <ButtonsContainer>
            {rightButtons.map((buttonProps) => (
              <Button key={buttonProps.id} {...buttonProps} />
            ))}
          </ButtonsContainer>
        )}
      </SubSection>
    </Section>
  );
}

export default SplitContent;
