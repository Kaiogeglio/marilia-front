import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';

export const Selectiveprocess = styled.div`
  ${breakpointsMedia({
    xs: css`
      padding: 50px 5%;
    `,
    md: css`
      padding: 100px 15%;
    `,
  })}
`;

Selectiveprocess.Box = styled.div`
  
`;

Selectiveprocess.Step = styled.div`
  border-radius: 6px;
  padding: 3%;
  box-shadow: 0 15px 35px rgb(126 87 88 / 10%), 0 5px 15px rgb(0 0 0 / 7%);
  p,
  span {
    font-size: 20px;
    color: ${({ theme }) => `${theme.colors.tertiary.light.color}`};
  }

  h3 {
    font-size: 28px;
    margin: 10px 0;
  }
`;
