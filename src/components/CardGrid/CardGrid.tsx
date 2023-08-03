// Components
import Card from '@components/Card/Card';
import Button from '@components/shared/Button/Button';
import Heading from '@components/shared/Heading/Heading';
import Section from '@components/shared/Section/Section';
// Styled Components
import { CardGridStyled, CardGridCell, CardGridCellBottom } from './CardGrid.styles';
// Types
import type { Props } from './CardGrid.types';

function CardGrid(props: Props) {
  const { contain, cardCells, customStyles, subheadingFont, gridTemplateColumns, gridAutoRows } = props;
  const { fontSize, headingLevel, fontWeight } = subheadingFont ?? {};

  return (
    <Section enableGutter contain={contain} customStyles={customStyles} paddingBottom={56} paddingTop={56}>
      <CardGridStyled $gridTemplateColumns={gridTemplateColumns} $gridAutoRows={gridAutoRows}>
        {!!cardCells.length &&
          cardCells.map((cellProps) => (
            <CardGridCell key={cellProps.$keyId}>
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
