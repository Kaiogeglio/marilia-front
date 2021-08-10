import React from 'react';
import Text from '../../foundation/Text';

import { DominateWrapper } from './styles/DominateWrapper';

function Career() {
  return (
    <DominateWrapper>
      <DominateWrapper.Container>
        <DominateWrapper.Left>
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
            O que você vai dominar?
          </Text>
          <Text
            variant="paragraph3"
            tag="p"
            color="tertiary.light.color"
            textAlign={{
              xs: 'left',
            }}
          >
            Você irá imergir no mundo da programação e dominar as
            principais ferramentas para fazer a diferença no seu trampo.
          </Text>
        </DominateWrapper.Left>
        <DominateWrapper.Right>
          <DominateWrapper.List>
            <DominateWrapper.ListItem>
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
                Entender o mecanismo da web, prototipar e criar
                {' '}
                <DominateWrapper.Strong>
                  layout&apos;s que impressionem o público
                </DominateWrapper.Strong>
                {' '}
                😎;
              </Text>
            </DominateWrapper.ListItem>
            <DominateWrapper.ListItem>
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
                Dominar a sopa de letrinhas do mundo da programação;
              </Text>
            </DominateWrapper.ListItem>
            <DominateWrapper.ListItem>
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
                Trabalhar com ferramentas de deploy e hospedar as suas aplicações para o mundo 🌏;
              </Text>
            </DominateWrapper.ListItem>
            <DominateWrapper.ListItem>
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
                Entregar sites e plataformas robustas que nunca caem;
              </Text>
            </DominateWrapper.ListItem>
            <DominateWrapper.ListItem>
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
                Entender o mecanismo por trás dos frameworks,
                para não ficar refém de ctrl+C e ctrl+V e de
                efeitos misteriosos.
                {' '}
                <DominateWrapper.Strong>
                  Domine de verdade a ferramenta que você usa
                </DominateWrapper.Strong>
                ;
              </Text>
            </DominateWrapper.ListItem>
            <DominateWrapper.ListItem>
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
                Criar api&apos;s leves e bem estruturadas que executem
                operações simples ou complexas num piscar de olhos 😉;
              </Text>
            </DominateWrapper.ListItem>
            <DominateWrapper.ListItem>
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
                Realizar integrações com plataformas como Hubspot
                e Pagar-me para dar super poderes a suas criações 🦸;
              </Text>
            </DominateWrapper.ListItem>
            <DominateWrapper.ListItem>
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
                Workflow de um
                {' '}
                <DominateWrapper.Strong>
                  projeto real
                </DominateWrapper.Strong>
                {' '}
                do Front-end ao Back-end, do build ao deploy,
                aplicando as ferramentas que os profissionais
                usam para trabalhar em equipe e em grandes projetos;
              </Text>
            </DominateWrapper.ListItem>
            <DominateWrapper.ListItem>
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
                Melhores práticas de criação de
                {' '}
                <DominateWrapper.Strong>
                  testes automatizados, autenticação e
                  autorização
                </DominateWrapper.Strong>
                {' '}
                para garantir a integridade de suas aplicações✔️;
              </Text>
            </DominateWrapper.ListItem>
            <DominateWrapper.ListItem>
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
                Você vai integrar sua aplicação com Back-ends,
                conversar com o UX e saber lidar com o deploy. Um
                {' '}
                <DominateWrapper.Strong>
                  profissional completo
                </DominateWrapper.Strong>
                , que trabalha bem em Squads.
              </Text>
            </DominateWrapper.ListItem>
          </DominateWrapper.List>
        </DominateWrapper.Right>
      </DominateWrapper.Container>
    </DominateWrapper>
  );
}
export default Career;
