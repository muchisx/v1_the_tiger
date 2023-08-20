import React from 'react';
import Section from '@components/shared/Section/Section';
import type { Props as SectionProps } from '@components/shared/Section/Section';

export type Props = SectionProps;

function Divider(props: Props) {
  return <Section {...props} />;
}

export default Divider;
