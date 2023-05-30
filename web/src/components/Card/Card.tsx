import Heading from '../shared/Heading/Heading';
import { CardStyled, HeaderIconWrap, CardHeader, TagsContainer } from './Card.styles';
import Tag from '../shared/Tag/Tag';
import type { Props } from './Card.types';

function Card(props: Props) {
  const { HeaderIcon, headerHeading, tags } = props;

  return (
    <CardStyled>
      <CardHeader>
        {HeaderIcon && (
          <HeaderIconWrap>
            <HeaderIcon />
          </HeaderIconWrap>
        )}
        {headerHeading && (
          <Heading text={headerHeading} className="card__heading" headingLevel="h3" fontSize="2.4rem" />
        )}
        {tags && (
          <TagsContainer>
            {tags.map((tag) => (
              <Tag variant={tag.variant} key={tag.id}>
                {tag.text}
              </Tag>
            ))}
          </TagsContainer>
        )}
      </CardHeader>
    </CardStyled>
  );
}

export default Card;
