import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';

export const ComunityWrapper = styled.div`
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

ComunityWrapper.Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10%;

  @media (max-width: 1000px) {
    & {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

ComunityWrapper.Left = styled.div``;

ComunityWrapper.List = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10%;
  padding: 0;

  @media (max-width: 660px) {
    & {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

ComunityWrapper.ListItem = styled.li`
  margin-top: 30px;
  font-weight: 800;
`;

ComunityWrapper.Right = styled.div``;

ComunityWrapper.Strong = styled.strong`
  color: ${({ theme }) => `${theme.colors.primary.main.color}`}
`;
