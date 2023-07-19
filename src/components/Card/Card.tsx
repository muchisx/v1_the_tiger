// Types
import type { Variants } from 'framer-motion';
import type { Props } from './Card.types';
// Context
import { useMediaQueryContext } from '../../context/MediaQueryContext';
// Components
import Heading from '../shared/Heading/Heading';
import Text from '../shared/Text/Text';
import Tag from '../shared/Tag/Tag';
import Button from '../shared/Button/Button';
// Styled Components
import {
  CardStyled,
  CardBgImg,
  CardLinkWrap,
  HeaderIconWrap,
  CardHeader,
  TagsContainer,
  CardBody,
  CardFooter,
  bgImgMotionMedium,
} from './Card.styles';

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

  // 1️⃣ To, Target and Rel setters for the CardLinkWrap component
  // -------------------------- --------------------------
  const { to } = cardLinkWrap;
  const target = cardLinkWrap?.newTab ? '_blank' : '_self';
  const relValue = cardLinkWrap?.newTab ? cardLinkWrap.rel : undefined;
  // -------------------------- --------------------------

  // 2️⃣ Animation Variants - @Framer Motion
  // -------------------------- --------------------------
  const { isMedium } = useMediaQueryContext();
  const bgImgMotion: Variants = isMedium ? bgImgMotionMedium : {};
  // -------------------------- --------------------------

  // 3️⃣ Render Validations
  // -------------------------- --------------------------
  // Check if any of the children exist before rendering it's parent
  const renderCardHeader = HeaderIcon || headerHeading || headerTags;
  const renderCardBody = bodyText;
  const renderCardFooter = footerButton;

  if (!renderCardHeader && !renderCardBody && !renderCardFooter && !backgroundImg) {
    return null;
  }
  // -------------------------- --------------------------

  return (
    <CardStyled className={className} customStyles={customStyles} whileHover="hover">
      {backgroundImg && (
        <CardBgImg
          src={backgroundImg}
          variants={bgImgMotion}
          transition={{ duration: 0.4 }}
          loading="lazy"
          width="100%"
          height="100%"
          refTarget="container"
        />
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
                <Tag variant={tag.variant} key={tag.$keyId}>
                  {tag.children}
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
