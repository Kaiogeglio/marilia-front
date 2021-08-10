import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';

export const FaqWrapper = styled.div`
  ${breakpointsMedia({
    xs: css`
      padding: 50px 5%;
    `,
    md: css`
      padding: 100px 15%;
    `,
  })}
`;

FaqWrapper.Box = styled.div`
  padding: 0 15%;
  margin: 100px 0;

  ${breakpointsMedia({
    xs: css`
      padding: 0px 5%;
    `,
    md: css`
      padding: 0 15%;
    `,
  })}
`;

FaqWrapper.Description = styled.p`
  margin: 10px 0 50px 0;
  color: ${({ theme }) => `${theme.colors.primary.main.contrastText}`};
`;

FaqWrapper.QuestionContainer = styled.div`
  margin-top: 10px;
`;

FaqWrapper.Question = styled.div`
  display: grid;
  grid-template-columns: 50px auto 50px;
  border-radius: ${({ theme }) => `${theme.borderRadius}`};
  background: ${({ theme }) => `${theme.colors.tertiary.main.color}`};
  color: ${({ theme }) => `${theme.colors.primary.main.contrastText}`};
  padding: 5%;
  align-items: center;
  grid-column-gap: 10px;
  h4 {
    color: ${({ theme }) => `${theme.colors.primary.main.color}`};
    font-size: 18px;
    cursor: pointer
  }

  h3 {
    cursor: pointer
  }

  svg {
    fill: ${({ theme }) => `${theme.colors.primary.main.color}`};
    cursor: pointer;
  }
`;

FaqWrapper.Answer = styled.div`
  padding: 5%;
  border-radius: ${({ theme }) => `${theme.borderRadius}`};
`;
