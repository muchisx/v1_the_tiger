// Components
import Card from '@components/Card/Card';
import Button from '@components/shared/Button/Button';
import Heading from '@components/shared/Heading/Heading';
import Section from '@components/shared/Section/Section';
// Styled Components
import { CardGridStyled, CardGridCell, CardGridCellBottom, CardGridFooter } from './CardGrid.styles';
// Types
import type { Props } from './CardGrid.types';

function CardGrid(props: Props) {
  const { contain, cardCells, customStyles, subheadingFont, gridTemplateColumns, gridAutoRows, footerButton } = props;
  const { fontSize, headingLevel, fontWeight } = subheadingFont ?? {};

  return (
    <Section enableGutter contain={contain} customStyles={customStyles} paddingBottom={56} paddingTop={56}>
      <CardGridStyled $gridTemplateColumns={gridTemplateColumns} $gridAutoRows={gridAutoRows}>
        {!!cardCells.length &&
          cardCells.map((cell) => {
            const renderCardGridCellBottom = cell.subheading || cell.button;

            return (
              <CardGridCell key={cell.$keyId}>
                <Card {...cell.card} />

                {renderCardGridCellBottom && (
                  <CardGridCellBottom>
                    <Heading fontSize={fontSize} headingLevel={headingLevel} fontWeight={fontWeight}>
                      {cell.subheading}
                    </Heading>
                    {cell.button && <Button {...cell.button} />}
                  </CardGridCellBottom>
                )}
              </CardGridCell>
            );
          })}
      </CardGridStyled>

      {footerButton && (
        <CardGridFooter>
          <Button {...footerButton} />
        </CardGridFooter>
      )}
    </Section>
  );
}

export default CardGrid;
