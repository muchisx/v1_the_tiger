/* eslint-disable react/jsx-props-no-spreading */
import { useScroll, useTransform } from 'framer-motion';
import Button from '../Button/Button';
import Section from '../Section/Section';
import ImageMasked from '../ImageMasked/ImageMasked';
import Text from '../Text/Text';
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
  const { leftContent, rightContent } = props;
  const { topButton, backgroundShapeURL, buttonListLabel, leftButtonList, maskedImageURL } = leftContent;
  const { rightButtonList, textsList } = rightContent;
  const { scrollYProgress } = useScroll();
  const shapeRotation = useTransform(scrollYProgress, [0, 1], [180, 192]);

  return (
    <Section css={SectionCSS} contain enableGutter paddingTop={20} paddingBottom={20}>
      {backgroundShapeURL && <BackgroundShape src={backgroundShapeURL} style={{ rotateZ: shapeRotation }} />}

      <SubSection className="split-content__first">
        {topButton && <Button {...topButton} />}

        {leftButtonList?.length && (
          <ButtonsContainer>
            {buttonListLabel && <ButtonsHeading>{buttonListLabel}</ButtonsHeading>}
            {leftButtonList.map((buttonProps) => (
              <Button key={buttonProps.id} {...buttonProps} />
            ))}
          </ButtonsContainer>
        )}

        {maskedImageURL && <ImageMasked height={144} width={144} src={maskedImageURL} css={ImageMaskedCSS} />}
      </SubSection>
      <SubSection className="split-content__second">
        {textsList?.length && textsList.map((textProps) => <Text key={textProps.id} {...textProps} />)}

        {rightButtonList?.length && (
          <ButtonsContainer>
            {rightButtonList.map((buttonProps) => (
              <Button key={buttonProps.id} {...buttonProps} />
            ))}
          </ButtonsContainer>
        )}
      </SubSection>
    </Section>
  );
}

SplitContent.defaultProps = {
  leftContent: {
    maskedImageURL: undefined,
    backgroundShapeURL: undefined,
    buttonListLabel: undefined,
    leftButtonList: undefined,
  },
  rightContent: {
    text: undefined,
  },
};

export default SplitContent;
