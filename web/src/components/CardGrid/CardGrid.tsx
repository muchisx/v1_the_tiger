/* eslint-disable react/jsx-props-no-spreading */
import type { Props } from './CardGrid.types';
import Section from '../shared/Section/Section';
import Card from '../Card/Card';
import Heading from '../shared/Heading/Heading';
import Button from '../shared/Button/Button';
import { CardGridStyled, CardGridCell, CardGridCellBottom } from './CardGrid.styles';

function CardGrid(props: Props) {
  const { contain, cardCells } = props;
  return (
    <Section enableGutter contain={contain}>
      <CardGridStyled>
        {cardCells.length > 0 &&
          cardCells.map((cellProps) => (
            <CardGridCell key={cellProps.id}>
              <Card {...cellProps.card} />
              <CardGridCellBottom>
                <Heading text={cellProps.subheading} />
                {cellProps.button && <Button {...cellProps.button} />}
              </CardGridCellBottom>
            </CardGridCell>
          ))}
      </CardGridStyled>
    </Section>
  );
}

export default CardGrid;
