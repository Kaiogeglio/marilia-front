import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';

export const DominateImagesWrapper = styled.div`
  padding: 100px 8%;

  ${breakpointsMedia({
    xs: css`
      padding: 0 5%;
    `,
    md: css`
      padding: 0 15%;
    `,
  })}
`;

DominateImagesWrapper.Images = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 50px;
  grid-column-gap: 10%;
  align-items: center;
  justify-items: center;
  padding: 80px 0;

  img {
    filter: grayscale(100%);
    cursor: pointer;
  }

  img:hover {
    filter: grayscale(0%);
  }

  @media (max-width: 1200px) {
    & {
      grid-template-columns: repeat(5, 1fr);
    }
  }

  @media (max-width: 1000px) {
    & {
      grid-template-columns: repeat(4, 1fr);
    }

    img {
      filter: grayscale(0%);
    }
  }

  @media (max-width: 600px) {
    & {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;
