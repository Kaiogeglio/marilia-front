import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';

export const DominateWrapper = styled.div`
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

DominateWrapper.Container = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  ${breakpointsMedia({
    md: css`
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 10%;
    `,
  })}
`;

DominateWrapper.Left = styled.div``;

DominateWrapper.Right = styled.div`
  margin-bottom: 20px;
`;

DominateWrapper.List = styled.ul`
  list-style: none;
  margin-bottom: 80px;
`;

DominateWrapper.ListItem = styled.li`
  margin-bottom: 20px;
`;

DominateWrapper.Strong = styled.strong`
  color: ${({ theme }) => `${theme.colors.primary.main.color}`}
`;
