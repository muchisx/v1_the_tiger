/* eslint-disable react/jsx-props-no-spreading */
import Heading from '../shared/Heading/Heading';
import { CardStyled, HeaderIconWrap, CardHeader, TagsContainer, CardBody } from './Card.styles';
import Tag from '../shared/Tag/Tag';
import type { Props } from './Card.types';
import Text from '../shared/Text/Text';

function Card(props: Props) {
  const { HeaderIcon, headerHeading, headerTags, bodyText, className, customStyles } = props;

  // Check if any of the children exist before rendering it's parent
  const renderCardHeader = HeaderIcon || headerHeading || headerTags;
  const renderCardBody = bodyText;

  if (!renderCardHeader && !renderCardBody) {
    return null;
  }

  return (
    <CardStyled className={className} customStyles={customStyles}>
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
    </CardStyled>
  );
}

export default Card;
