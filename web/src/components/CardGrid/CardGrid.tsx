/* eslint-disable react/jsx-props-no-spreading */
// Types
import type { Props } from './CardGrid.types';
// Components
import Section from '../shared/Section/Section';
import Card from '../Card/Card';
import Heading from '../shared/Heading/Heading';
import Button from '../shared/Button/Button';
// Styled Components
import { CardGridStyled, CardGridCell, CardGridCellBottom } from './CardGrid.styles';

function CardGrid(props: Props) {
  const { contain, cardCells, customStyles, subheadingFont } = props;
  const { fontSize, headingLevel, fontWeight } = subheadingFont ?? {};

  return (
    <Section enableGutter contain={contain} customStyles={customStyles} paddingBottom={56} paddingTop={56}>
      <CardGridStyled>
        {cardCells.length > 0 &&
          cardCells.map((cellProps) => (
            <CardGridCell key={cellProps.id}>
              <Card {...cellProps.card} />
              <CardGridCellBottom>
                <Heading
                  text={cellProps.subheading}
                  fontSize={fontSize}
                  headingLevel={headingLevel}
                  fontWeight={fontWeight}
                />
                {cellProps.button && <Button {...cellProps.button} />}
              </CardGridCellBottom>
            </CardGridCell>
          ))}
      </CardGridStyled>
    </Section>
  );
}

export default CardGrid;
