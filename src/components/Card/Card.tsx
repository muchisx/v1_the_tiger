// Dependencies
import type { Variants } from 'framer-motion';
// Context
import { useMediaQueryContext } from '@context/MediaQueryContext';
// Components
import Tag from '@components/shared/Tag/Tag';
import Text from '@components/shared/Text/Text';
import Button from '@components/shared/Button/Button';
import Heading from '@components/shared/Heading/Heading';
// Styled Components
import {
  CardBody,
  CardBgImg,
  CardStyled,
  CardHeader,
  CardFooter,
  CardLinkWrap,
  TagsContainer,
  HeaderIconWrap,
  bgImgMotionMedium,
} from './Card.styles';
// Types
import type { Props } from './Card.types';

function Card(props: Props) {
  const {
    bodyText,
    className,
    HeaderIcon,
    headerTags,
    customStyles,
    footerButton,
    headerHeading,
    backgroundImg,
    cardLinkWrap = { to: '', newTab: false, rel: 'noopener noreferrer' },
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
          width="100%"
          height="100%"
          refTarget="container"
          variants={bgImgMotion}
          src={backgroundImg.src}
          transition={{ duration: 0.4 }}
          loading={backgroundImg.loading}
          position={backgroundImg.position}
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
            <Heading className="card__heading" headingLevel="h3" fontSize={{ all: '2.4rem' }}>
              {headerHeading}
            </Heading>
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
