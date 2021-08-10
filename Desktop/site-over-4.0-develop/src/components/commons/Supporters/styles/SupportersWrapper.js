import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';

export const SupportersWrapper = styled.div`
  padding: 100px 8%;
  margin: 100px 0;

  ${breakpointsMedia({
    xs: css`
      padding: 0 5%;
    `,
    md: css`
      padding: 0 15%;
    `,
  })}
`;

SupportersWrapper.SupportersImages = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10%;
  margin-top: 40px;
`;
