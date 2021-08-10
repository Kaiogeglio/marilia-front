import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';

export const VideoHomeWrapper = styled.div`
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

VideoHomeWrapper.VideoFrame = styled.div`
  padding: 0 20%;

  @media(max-width: 800px) {
    padding: 0;
  }
`;

VideoHomeWrapper.VideoContainer = styled.div`
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
