import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';

export const SubscriptionWrapper = styled.div`
  ${breakpointsMedia({
    xs: css`
      padding: 50px 5%;
    `,
    md: css`
      padding: 100px 15%;
    `,
  })}
`;

SubscriptionWrapper.Box = styled.div`
    margin: 100px 0;
    display: grid;    
    text-align: center;

    ${breakpointsMedia({
    xs: css`
        grid-template-columns: auto;
      `,
    md: css`
        grid-template-columns: 1fr 1fr;
        padding: 0 15%;
      `,
  })}
`;

SubscriptionWrapper.Call = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

SubscriptionWrapper.Price = styled.div`
    font-size: 18px;
    color: ${({ theme }) => `${theme.colors.primary.main.color}`};
`;

SubscriptionWrapper.Action = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 25px;
    p {
        color: ${({ theme }) => `${theme.colors.tertiary.light.color}`};
    }
`;

SubscriptionWrapper.FireAnimation = styled.div`
    max-width: 50%;
    margin: 10px auto 20px;
`;

SubscriptionWrapper.ShieldAnimation = styled.div`
    max-width: 100px;
    margin: 0 auto;
    margin: 30px auto 6px;
`;

SubscriptionWrapper.AnimationContainer = styled.div`

`;
