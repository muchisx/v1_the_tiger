// Types
import type { Props } from './LogoGrid.types';
// Componets
import Section from '../shared/Section/Section';
import Heading from '../shared/Heading/Heading';
import ImageResponsive from '../shared/ImageResponsive/ImageResponsive';
// Styled Components
import { Grid, GridItem, sectionCSS } from './LogoGrid.styles';

function LogoGrid(props: Props) {
  const { customStyles, logoUrls, title } = props;
  return (
    <Section customStyles={sectionCSS.concat(customStyles)} contain enableGutter marginTop={32} marginBottom={32}>
      {title && <Heading text={title} fontWeight={400} fontSize="1.6rem" className="logo-grid__heading" />}
      <Grid>
        {logoUrls.map((logo) => (
          <GridItem key={logo.$keyId}>
            <ImageResponsive src={logo.url} height="100%" width="max(116px, 68%)" fit="contain" />
          </GridItem>
        ))}
      </Grid>
    </Section>
  );
}

export default LogoGrid;
