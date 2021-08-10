import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';

export const EventHomeResumeWrapper = styled.div`
   
  padding: 0 15%; 
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${breakpointsMedia({
    xs: css`
       padding: 0 5%;
       flex-direction: column;
    `,
    md: css`
      padding: 0 15%;
      flex-direction: initial;
    `,
  })}
`;

EventHomeResumeWrapper.ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${breakpointsMedia({
    xs: css`
       flex-direction: column;
    `,
  })}
`;
