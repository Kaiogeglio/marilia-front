import React from 'react';
import Text from '../../foundation/Text';

import { AudienceWrapper } from './styles/AudienceWrapper';

function Career() {
  return (
    <AudienceWrapper>
      <AudienceWrapper.Container>
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
          Pra quem é e quem pode fazer?
        </Text>
        <Text
          variant="paragraph3"
          tag="p"
          color="tertiary.light.color"
          textAlign={{
            xs: 'left',
          }}
        >
          Nosso Bootcamp é para quem quer construir um perfil
          de destaque trabalhando com front-end (sites, plataformas e aplicativos)
          e back-end (api&apos;s, lógicas de negócio e banco de dados).
        </Text>
        <Text
          variant="paragraph3"
          tag="p"
          color="tertiary.light.color"
          textAlign={{
            xs: 'left',
          }}
        >
          Você vai trabalhar com criação de aplicações web e mobile,
          utilizando técnicas como SOLID, programação orientada à
          testes e outras boas práticas que tornam suas aplicações
          cada vez mais modernas e seguras.
        </Text>
        <Text
          variant="paragraph3"
          tag="p"
          color="tertiary.light.color"
          textAlign={{
            xs: 'left',
          }}
        >
          <AudienceWrapper.Strong>Importante:</AudienceWrapper.Strong>
          {' '}
          O curso foi projetado para
          quem não sabe nada de programação ou está mudando de área ou tecnologia. 🚀
        </Text>
      </AudienceWrapper.Container>
    </AudienceWrapper>
  );
}
export default Career;
