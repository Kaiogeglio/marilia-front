import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';

export const CertificateWrapper = styled.div`
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

CertificateWrapper.Container = styled.div`
  display: grid;
  grid-template-areas:
    "imgCertificate certificateText";
  grid-template-columns: repeat(2,1fr);
  grid-gap: 10%;

  img {
    margin: auto;
  }

  @media (max-width: 1000px) {
    & {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  @media (max-width: 660px) {
    & {
      grid-template-columns: repeat(1, 1fr);
      grid-template-areas: 
        "certificateText"
        "imgCertificate";
    }
  }
`;

CertificateWrapper.ImageContainer = styled.div`
  grid-area: imgCertificate;
`;

CertificateWrapper.TextContainer = styled.div`
  grid-area: certificateText;
  margin-top: 20px;
`;

CertificateWrapper.Strong = styled.strong`
  color: ${({ theme }) => `${theme.colors.primary.main.color}`}
`;
