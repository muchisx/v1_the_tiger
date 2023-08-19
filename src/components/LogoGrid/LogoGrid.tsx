// Componets
import Heading from '@components/shared/Heading/Heading';
import Section from '@components/shared/Section/Section';
import ImageResponsive from '@components/shared/ImageResponsive/ImageResponsive';
// Styled Components
import { Grid, GridItem, sectionCSS } from './LogoGrid.styles';
// Types
import type { Props } from './LogoGrid.types';

function LogoGrid(props: Props) {
  const { customStyles, logoUrls, title } = props;
  return (
    <Section customStyles={sectionCSS.concat(customStyles)} contain enableGutter marginTop={32} marginBottom={32}>
      {title && (
        <Heading fontWeight={400} fontSize="1.6rem" className="logo-grid__heading">
          {title}
        </Heading>
      )}
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
