import React from 'react';
import { DescWrapper } from './styles/DescWrapper';
import Text from '../../foundation/Text';

function Desc() {
  return (
    <DescWrapper>
      <DescWrapper.Left>
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
          Peer to peer, experiência, disciplina e a competição. Esses são os princípios
        </Text>
        <Text
          variant="paragraph3"
          tag="p"
          color="tertiary.light.color"
          textAlign={{
            xs: 'justify',
            md: 'left',
          }}
          maxWidth="441px"
        >
          Se torne um programador especialista em pouco tempo.
        </Text>
        <Text
          variant="paragraph3"
          tag="p"
          color="tertiary.light.color"
          textAlign={{
            xs: 'justify',
            md: 'left',
          }}
          maxWidth="441px"
        >
          Os bootcamps de tecnologia da Overstack são baseados no conceito
          Peer to peer (Aprendizagem por pares). Contudo,
          ao longo do bootcamp você e seu parceiro vão construir
          aplicações reais e disputar com outras equipes, os ganhos são muitos.
          Vou deixar essa explicação para depois, você ainda não tá preparado
          para essa conversa.
        </Text>
      </DescWrapper.Left>
      <DescWrapper.Right>
        <Text
          variant="paragraph3"
          tag="p"
          color="tertiary.light.color"
          textAlign={{
            xs: 'justify',
            md: 'left',
          }}
          maxWidth="441px"
        >
          O processo seletivo da overstack é composto de 4 etapas,
          na primeira etapa você vai fazer uma inscrição básica,
          na sequência você irá fazer o processo seletivo,
          você precisa de no mínimo 70% para passar e avançar para a próxima etapa.
          Na terceira etapa, o resultado chega até você. E por último e não menos
          importante, sua matrícula está pronta. Para efetivar sua matrícula,
          ainda pegamos mais algumas informações sobre você.
        </Text>
        <Text
          variant="paragraph3"
          tag="p"
          color="tertiary.light.color"
          textAlign={{
            xs: 'justify',
            md: 'left',
          }}
          maxWidth="441px"
        >
          Nós realmente acreditamos que todo processo de aprendizagem bem
          feito tenha que ser executado seguindo 3 princípios: a experiência,
          a disciplina e a competição.
        </Text>
        <Text
          variant="paragraph3"
          tag="p"
          color="tertiary.light.color"
          textAlign={{
            xs: 'justify',
            md: 'left',
          }}
          maxWidth="441px"
        >
          Não importa o seu nível em determinado assunto, você precisa de experiência prática.
          Em toda sua jornada, vamos trabalhar com projetos
          reais trazidos por empresas parceiras, mas para ir para a prática,
          nós te ensinamos toda a base 100% mão na massa.
        </Text>
        <Text
          variant="paragraph3"
          tag="p"
          color="tertiary.light.color"
          textAlign={{
            xs: 'justify',
            md: 'left',
          }}
          maxWidth="441px"
        >
          Programamos um plano de carreira perfeito,
          se torne uma autoridade no assunto fazendo um dos nossos bootcamps,
          entre para a faculdade aproveitando todo o conteúdo que aprendeu e
          ainda tenha a oportunidade de estagiar e trabalhar na Overstack,
          além de ter acesso a diversas oportunidades em empresas parceiras.
        </Text>
      </DescWrapper.Right>
    </DescWrapper>
  );
}

export default Desc;
