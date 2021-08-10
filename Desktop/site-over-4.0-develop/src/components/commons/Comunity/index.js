import React from 'react';
import Image from 'next/image';

import Text from '../../foundation/Text';

import { ComunityWrapper } from './styles/ComunityWrapper';

function Comunity() {
  return (
    <ComunityWrapper>
      <ComunityWrapper.Container>
        <ComunityWrapper.Left>
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
            Comunidade
          </Text>
          <Text
            variant="paragraph3"
            tag="p"
            color="tertiary.light.color"
            textAlign={{
              xs: 'left',
              md: 'left',
            }}
            maxWidth="520px"
          >
            Você terá sempre companhia para estudar! Discussões ao vivo toda semana com
            instrutores. Discord
            exclusivo para trocas entre os alunos e alunas, com suporte das 9h às 18h em dias úteis.
          </Text>
          <ComunityWrapper.List>
            <ComunityWrapper.Left>
              <ComunityWrapper.ListItem>
                <Text
                  variant="paragraph3"
                  tag="h3"
                  color="primary.main.contrastText"
                  textAlign={{
                    xs: 'left',
                    md: 'left',
                  }}
                  maxWidth="441px"
                >
                  Encontros
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
                  <ComunityWrapper.Strong> Do projeto:</ComunityWrapper.Strong>
                  {' '}
                  Revisão de projetos com instrutores.
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
                  <ComunityWrapper.Strong> Da carreira:</ComunityWrapper.Strong>
                  {' '}
                  Conversa com profissionais do
                  mercado através de lives.
                </Text>
              </ComunityWrapper.ListItem>
            </ComunityWrapper.Left>
            <ComunityWrapper.Right>
              <ComunityWrapper.ListItem>
                <Text
                  variant="paragraph3"
                  tag="h3"
                  color="primary.main.contrastText"
                  textAlign={{
                    xs: 'left',
                    md: 'left',
                  }}
                  maxWidth="441px"
                >
                  Discussões e Comunidade
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
                  <ComunityWrapper.Strong>No discord exclusivo: </ComunityWrapper.Strong>
                  Todos os dias! Encontro e streaming entre alunos.
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
                  <ComunityWrapper.Strong>Revisão da Monitoria: </ComunityWrapper.Strong>
                  Um encontro ao vivo em que nossa equipe revisam as dúvidas mais comuns
                  que apareceram na semana.
                </Text>
              </ComunityWrapper.ListItem>
            </ComunityWrapper.Right>
          </ComunityWrapper.List>
        </ComunityWrapper.Left>
        <ComunityWrapper.Right>
          <Image
            src="/images/discord-image.png"
            alt=""
            width={500}
            height={500}
          />
        </ComunityWrapper.Right>
      </ComunityWrapper.Container>
    </ComunityWrapper>
  );
}

export default Comunity;
