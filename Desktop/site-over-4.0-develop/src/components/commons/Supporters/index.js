import React from 'react';
import Image from 'next/image';

import Text from '../../foundation/Text';

import { SupportersWrapper } from './styles/SupportersWrapper';

function Supporters() {
  return (
    <SupportersWrapper>
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
        Empresas que contratam nossos alunos:
      </Text>
      <SupportersWrapper.SupportersImages>
        <Image
          src="/images/hanzer.svg"
          alt="Logo da Hanzer"
          width={300}
          height={300}
        />
        <Image
          src="/images/betalabs.svg"
          alt="Logo da Betalabs"
          width={300}
          height={300}
        />
        <Image
          src="/images/warmup.svg"
          alt="logo-empregos-do-futuro"
          width={300}
          height={300}
        />
      </SupportersWrapper.SupportersImages>
    </SupportersWrapper>
  );
}

export default Supporters;
