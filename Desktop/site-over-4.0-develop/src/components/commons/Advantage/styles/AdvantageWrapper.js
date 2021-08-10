import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';

export const AdvantageWrapper = styled.div`
   
  margin-top: 100px;

  ${breakpointsMedia({
    xs: css`
      padding: 0 5%;
    `,
    md: css`
      padding: 0 15%;
    `,
  })}
`;

AdvantageWrapper.CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 20px;
  grid-column-gap: 3%;
  margin: 100px 0;

  ${breakpointsMedia({
    xs: css`
      grid-template-columns: repeat(1, 1fr);
    `,
    md: css`
      grid-template-columns: repeat(2, 1fr);
    `,
    lg: css`
      grid-template-columns: repeat(2, 1fr);
    `,
    xl: css`
      grid-template-columns: repeat(3, 1fr);
    `,
  })}
`;

AdvantageWrapper.Card = styled.div`
  border-radius: 3px;
  background: var(--color-gray-secondary);
  padding: 10%;
  border-top: 2px solid rgb(130, 87, 230);
`;
