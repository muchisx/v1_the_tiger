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
  const { leftContent, rightContent, customStyles } = props;
  const { topButton, leftTextList, backgroundShapeURL, buttonListLabel, leftButtonList, maskedImageURL } = leftContent;
  const { rightButtonList, rightTextsList } = rightContent;

  const { scrollYProgress } = useScroll();
  const shapeRotation = useTransform(scrollYProgress, [0, 1], [180, 192]);

  return (
    <Section css={SectionCSS.concat(customStyles)} contain enableGutter paddingTop={32} paddingBottom={32}>
      {backgroundShapeURL && <BackgroundShape src={backgroundShapeURL} style={{ rotateZ: shapeRotation }} />}

      <SubSection className="split-content__first">
        {topButton && <Button {...topButton} />}

        {leftTextList?.length && leftTextList.map((textProps) => <Text key={textProps.id} {...textProps} />)}

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
        {rightTextsList?.length && rightTextsList.map((textProps) => <Text key={textProps.id} {...textProps} />)}

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
    topButton: undefined,
    leftTextList: undefined,
    maskedImageURL: undefined,
    backgroundShapeURL: undefined,
    buttonListLabel: undefined,
    leftButtonList: undefined,
  },
  rightContent: {
    rightTextsList: undefined,
    rightButtonList: undefined,
  },
};

export default SplitContent;
