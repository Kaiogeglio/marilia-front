import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';

export const RoutineWrapper = styled.div`
  padding: 100px 8%;
  margin-bottom: 100px;

  ${breakpointsMedia({
    xs: css`
      padding: 0 5%;
    `,
    md: css`
      padding: 0 15%;
    `,
  })}
`;

RoutineWrapper.List = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);   
  grid-gap: 5%;

  @media (max-width: 1200px) {
    & {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (max-width: 660px) {
    & {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

RoutineWrapper.TextContainer = styled.div`
  min-height: 231px;
  padding: 40px 10px;
`;

RoutineWrapper.ListItem = styled.li`
  border-top: 1px solid ${({ theme }) => `${theme.colors.primary.main.contrastText}`};
  position: relative;

  svg {
    fill: ${({ theme }) => `${theme.colors.primary.main.color}`};
    width: 50px;
    height: 50px;
  }
`;

RoutineWrapper.Strong = styled.strong`
  position: absolute;
  top: -20px;
  left: -10px;
  font-weight: 800;
  z-index: 2;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ theme }) => `${theme.colors.primary.main.color}`};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => `${theme.colors.primary.main.contrastText}`};
`;
