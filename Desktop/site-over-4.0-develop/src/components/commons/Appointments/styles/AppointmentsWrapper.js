import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';

export const AppointmentsWrapper = styled.div`
  padding: 100px 8%;

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

AppointmentsWrapper.Underline = styled.div`
  width: 50px;
  height: 6px;
  background-color: ${({ theme }) => `${theme.colors.background.light.color}`};
`;

AppointmentsWrapper.AppointmentsCard = styled.div`
  border: 2px solid ${({ theme }) => `${theme.colors.primary.main.color}`};
  padding: 50px;
  border-radius: 15px;
  display: grid;
  
  margin-bottom: 30px;
  grid-gap: 30px;
  align-items: center;

  strong {
    color: #fff;
  }

  ${breakpointsMedia({
    md: css`
      grid-template-columns: auto;
    `,
    lg: css`
      grid-template-columns: minmax(100px, 130px) auto minmax(100px, 150px);
    `,
  })}
`;

AppointmentsWrapper.NumberTitle = styled.span`
  font-size: 100px;
  color: transparent;
  -webkit-text-stroke: 2px ${({ theme }) => `${theme.colors.background.light.color}`};
`;

AppointmentsWrapper.TextModule = styled.div`

`;
