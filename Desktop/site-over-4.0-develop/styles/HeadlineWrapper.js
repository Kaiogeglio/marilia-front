import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../src/theme/utils/breakpointsMedia';

export const HeadlineWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 18px;
  padding-left: 28px;
  padding-right: 28px;
  ${breakpointsMedia({
    md: css`
      justify-content: flex-start;
      margin-top: 32px;
      margin-left: auto;
      margin-right: auto;
      width: 100%;
      padding: 0 16px;
      max-width: 768px;
    `,
    lg: css`
      max-width: 1160px; 
    `,
    xl: css`
      max-width: 1222px;
    `,
  })}
`;

HeadlineWrapper.Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: .31em .31em 0px 0px;
  box-shadow: 0.31em 0.37em 0.87em 0.87em rgb(0 0 0 / 4%);
  border: solid .03em ${(props) => (props.border ? props.border : '#0d4d9c')};
  transition: .3s;
  padding: 10px 20px;
  border-radius: 8px;
  width: 100%;
  min-height: 100px;
  margin-bottom: 20px;
  cursor: pointer;
  &:hover,
  &:focus {
    margin-top: -10px;
  }

`;
