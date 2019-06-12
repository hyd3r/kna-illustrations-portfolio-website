import React from 'react';
import { Box } from 'rebass';

export interface Props {
  variant?: 'light' | 'dark';
  [propName: string]: any; // TODO: Extend type of `Box`
}

const Section2 = ({ variant, ...props }: Props) => (
  <Box
    as="section"
    {...(variant === 'dark' && { bg: 'darkgray', color: 'white' })}
    {...props}
  />
);

export default Section2;
