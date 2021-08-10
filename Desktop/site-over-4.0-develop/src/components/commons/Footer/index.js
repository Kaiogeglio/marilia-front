import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px; 
  padding-right: 28px;
  padding-left: 28px;
  bottom: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background.dark.color};
  img {
    width: 34px;
    margin-right: 23px;
  }
  p {
    color: ${({ theme }) => theme.colors.primary.main.contrastText};
    text-decoration: none;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
  }
`;

export default function Footer(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FooterWrapper {...props}>
      <p>
        Feito com
        {' '}
        💜
        {' '}
        pelo time da
        {' '}
      </p>
      <img
        src="/images/logo-over.png"
        alt="Logo Overstack"
      />
    </FooterWrapper>
  );
}
