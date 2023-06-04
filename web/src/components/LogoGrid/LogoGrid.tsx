import Section from '../shared/Section/Section';
import type { Props } from './LogoGrid.types';
import { Grid, GridItem, sectionCSS } from './LogoGrid.styles';
import ImageResponsive from '../shared/ImageResponsive/ImageResponsive';
import Heading from '../shared/Heading/Heading';

function LogoGrid(props: Props) {
  const { customStyles, logoUrlWithIdList, title } = props;
  return (
    <Section
      customStyles={sectionCSS.concat(customStyles)}
      contain
      containType="margin"
      enableGutter
      marginTop={32}
      marginBottom={32}
    >
      {title && <Heading text={title} fontWeight={400} fontSize="1.6rem" className="logo-grid__heading" />}
      <Grid>
        {logoUrlWithIdList.map((logo) => (
          <GridItem key={logo.id}>
            <ImageResponsive src={logo.url} height="100%" width="max(116px, 68%)" fit="contain" />
          </GridItem>
        ))}
      </Grid>
    </Section>
  );
}

export default LogoGrid;
