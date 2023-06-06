/* eslint-disable react/jsx-props-no-spreading */
import Heading from '../shared/Heading/Heading';
import {
  CardStyled,
  CardBgImg,
  CardLinkWrap,
  HeaderIconWrap,
  CardHeader,
  TagsContainer,
  CardBody,
  CardFooter,
  bgImgScaleMotion,
} from './Card.styles';
import Tag from '../shared/Tag/Tag';
import type { Props } from './Card.types';
import Text from '../shared/Text/Text';
import Button from '../shared/Button/Button';

function Card(props: Props) {
  const {
    backgroundImg,
    cardLinkWrap = { to: '', newTab: false, rel: 'noopener noreferrer' },
    HeaderIcon,
    headerHeading,
    headerTags,
    bodyText,
    footerButton,
    className,
    customStyles,
  } = props;

  const { to } = cardLinkWrap;
  const target = cardLinkWrap?.newTab ? '_blank' : '_self';
  const relValue = cardLinkWrap?.newTab ? cardLinkWrap.rel : undefined;

  // Check if any of the children exist before rendering it's parent
  const renderCardHeader = HeaderIcon || headerHeading || headerTags;
  const renderCardBody = bodyText;
  const renderCardFooter = footerButton;

  if (!renderCardHeader && !renderCardBody && !renderCardFooter && !backgroundImg) {
    return null;
  }

  return (
    <CardStyled className={className} customStyles={customStyles} whileHover="hover">
      {backgroundImg && (
        // TODO: make this use the ImageResponsive component instead,
        // maybe pass it as a styled() in the component styles
        // but need to figure out how to pass original props down
        <CardBgImg src={backgroundImg} variants={bgImgScaleMotion} transition={{ duration: 0.3 }} loading="lazy" />
      )}

      {cardLinkWrap.to && <CardLinkWrap to={to} rel={relValue} target={target} />}

      {renderCardHeader && (
        <CardHeader>
          {HeaderIcon && (
            <HeaderIconWrap>
              <HeaderIcon />
            </HeaderIconWrap>
          )}
          {headerHeading && (
            <Heading text={headerHeading} className="card__heading" headingLevel="h3" fontSize="2.4rem" />
          )}
          {headerTags && (
            <TagsContainer>
              {headerTags.map((tag) => (
                <Tag variant={tag.variant} key={tag.id}>
                  {tag.text}
                </Tag>
              ))}
            </TagsContainer>
          )}
        </CardHeader>
      )}
      {renderCardBody && <CardBody>{bodyText && <Text {...bodyText} />}</CardBody>}
      {renderCardFooter && (
        <CardFooter>
          <Button {...footerButton} />
        </CardFooter>
      )}
    </CardStyled>
  );
}

export default Card;
