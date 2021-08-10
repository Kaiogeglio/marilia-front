import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';

export const DescWrapper = styled.div`
   
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.6em;
  margin: 100px 0;
  ${breakpointsMedia({
    xs: css`
      grid-template-columns: auto;
      padding: 0 5%;
      justify-content: center;
    `,
    md: css`
      grid-template-columns: 1fr 1fr;
      padding: 0 15%;
    `,
  })}
`;

DescWrapper.Right = styled.div`
  p {
    line-height: 1.7em;
  }

  ${breakpointsMedia({
    xs: css`
      border-left: 0;
      padding-left: 0;
    `,
    md: css`
      border-left: 1px solid #ddd5c3;
      padding-left: 20px;
    `,
  })}

`;

DescWrapper.Left = styled.div`
  margin: 0 0 30px;

  p {
    line-height: 1.7em;
  }
`;
