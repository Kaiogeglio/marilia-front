import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';

export const HeadlineWrapper = styled.div`
   
  height: 90vh;
  background: url('/images/fundo-ads.png') no-repeat center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 5%;

  strong {
    font-size: 96px;
    color: transparent;
    -webkit-text-stroke: 2px #fff;
  }
`;

HeadlineWrapper.BannerDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;

  ${breakpointsMedia({
    xs: css`
      flex-direction: column;
      text-align: center;
    `,
    md: css`
      flex-direction: initial;
    `,
  })}
`;

HeadlineWrapper.BannerInfo = styled.div`
  color: #fff;
  font-weight: bold;
  margin-left: 10px;

  span {
    font-size: 16px;
    font-weight: 700;
    line-height: 30px;
    color: var(--color-green);
  }
`;

HeadlineWrapper.Icons = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  margin-bottom: 32px;
  align-items: baseline;
`;

HeadlineWrapper.Buttons = styled.div`
  display: flex;

  a + a {
    margin-left: 20px;
  }
  button + button {
    margin-left: 20px;
  }
  button + a {
    margin-left: 20px;
  }
  a + button {
    margin-left: 20px;
  }

  @media(max-width: 768px) {
    flex-direction: column;
    a + a {
      margin-left: 0;
    }
    button + button {
      margin-left: 0;
    }
    button + a {
      margin-left: 0;
    }
    a + button {
      margin-left: 0;
    }
  }
`;
