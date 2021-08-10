import React from 'react';
import Image from 'next/image';

import Text from '../../foundation/Text';

import { CertificateWrapper } from './styles/CertificateWrapper';

function Certificate() {
  return (
    <CertificateWrapper>
      <CertificateWrapper.Container>
        <CertificateWrapper.ImageContainer>
          <Image
            src="/images/certificado.png"
            alt="Certificado"
            width={500}
            height={400}
          />
        </CertificateWrapper.ImageContainer>
        <CertificateWrapper.TextContainer>
          <Text
            variant="title"
            tag="h2"
            color="primary.main.color"
            textAlign={{
              xs: 'center',
              md: 'left',
            }}
            maxWidth="441px"
            marginBottom="80px"
          >
            Projetos e Diploma
          </Text>
          <Text
            variant="paragraph3"
            tag="p"
            color="tertiary.light.color"
            textAlign={{
              xs: 'left',
              md: 'left',
            }}
            maxWidth="441px"
          >

            Entregas de projetos a cada módulo, com diversos desafios.
          </Text>
          <Text
            variant="paragraph3"
            tag="p"
            color="tertiary.light.color"
            textAlign={{
              xs: 'left',
              md: 'left',
            }}
            maxWidth="441px"
          >

            Projeto final desafiador a cada módulo! Você receberá uma avaliação
            {' '}
            <CertificateWrapper.Strong>em vídeo</CertificateWrapper.Strong>
            {' '}
            sobre o seu trabalho
            final, com comentários dos professores! Uma experiência única.
          </Text>
        </CertificateWrapper.TextContainer>
      </CertificateWrapper.Container>
    </CertificateWrapper>
  );
}

export default Certificate;
