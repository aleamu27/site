import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../styles/colors';

const Placeholder = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  background: ${COLORS.offWhite};
  border: 2px dashed ${COLORS.darkTeal};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${COLORS.darkTeal};
  font-size: 1.25rem;
  font-weight: 500;
  margin: 1rem 0;
`;

const ImagePlaceholder = ({ label = 'Image Placeholder' }) => (
  <Placeholder role="img" aria-label={label}>
    {label}
  </Placeholder>
);

export default ImagePlaceholder; 