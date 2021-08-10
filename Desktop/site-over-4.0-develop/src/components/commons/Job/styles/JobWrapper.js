import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';

export const JobWrapper = styled.div`
   margin-top: 100px;
  
  ${breakpointsMedia({
    xs: css`
      display: block;
      padding: 0 5%;
    `,
    md: css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 15%;
    `,
  })}
`;

JobWrapper.Description = styled.div`
  img {
    width: 400px;
  }

  ${breakpointsMedia({
    xs: css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `,
    md: css`
      display: block;
    `,
    lg: css`
      display: block;
    `,
    xl: css`
      display: block;
    `,
  })}
`;

JobWrapper.Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
