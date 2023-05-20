import Heading from '../shared/Heading/Heading';
import { CardStyled, HeaderIcon, CardHeader, TagsContainer } from './Card.styles';
import Tag from '../shared/Tag/Tag';

function Card() {
  return (
    <CardStyled>
      <CardHeader>
        <HeaderIcon />
        <Heading text="SHOPIFY ROCKS" className="card__heading" headingLevel="h3" fontSize="2.4rem" />
        <TagsContainer>
          <Tag variant="primary">Example</Tag>
          <Tag variant="tertiary">Example Ex</Tag>
          <Tag variant="quaternary">Example Example</Tag>
        </TagsContainer>
      </CardHeader>
    </CardStyled>
  );
}

export default Card;
