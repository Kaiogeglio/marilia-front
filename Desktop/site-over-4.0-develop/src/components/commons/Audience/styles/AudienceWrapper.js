import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';

export const AudienceWrapper = styled.div`
  padding: 100px 8%;
  margin-bottom: 80px;

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

AudienceWrapper.Container = styled.div``;

AudienceWrapper.Strong = styled.strong`
  color: ${({ theme }) => `${theme.colors.primary.main.color}`}
`;
