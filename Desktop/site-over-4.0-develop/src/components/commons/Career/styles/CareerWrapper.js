import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';

export const CareerWrapper = styled.div`
  padding: 100px 8%;
  margin-top: 50px;

  ${breakpointsMedia({
    xs: css`
      padding: 0 5%;
    `,
    md: css`
      padding: 0 15%;
      padding-right: 5%;
    `,
  })}
`;

CareerWrapper.Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 5%;
  @media (max-width: 1000px) {
    & {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

CareerWrapper.Left = styled.div``;

CareerWrapper.VideoContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
`;

CareerWrapper.Strong = styled.strong`
  color: ${({ theme }) => `${theme.colors.primary.main.color}`}
`;
