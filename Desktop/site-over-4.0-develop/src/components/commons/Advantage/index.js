import React from 'react';
import { AdvantageWrapper } from './styles/AdvantageWrapper';
import Text from '../../foundation/Text';

// eslint-disable-next-line react/prop-types
function Advantage({ title }) {
  return (
    <AdvantageWrapper>
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
        {title}
      </Text>
      <Text
        variant="paragraph3"
        tag="p"
        color="tertiary.light.color"
        textAlign={{
          xs: 'left',
        }}
        maxWidth="700px"
      >
        Aprendizado prático e garantido, troca de conhecimento e muita
        prática através de metodologias ágeis e desafios intensos.
      </Text>
      <AdvantageWrapper.CardContainer>
        <AdvantageWrapper.Card>
          <Text
            variant="paragraph3"
            tag="h3"
            color="primary.main.contrastText"
            textAlign={{
              xs: 'center',
              md: 'left',
            }}
            maxWidth="441px"
          >
            Estágio Garantido
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
            Nós fizemos um plano de carreira perfeito para você,
            torne-se o melhor e ainda garanta seu estágio na Overstack ou nas
            nossas empresas parceiras.
          </Text>
        </AdvantageWrapper.Card>
        <AdvantageWrapper.Card>
          <Text
            variant="paragraph3"
            tag="h3"
            color="primary.main.contrastText"
            textAlign={{
              xs: 'center',
              md: 'left',
            }}
            maxWidth="441px"
          >
            Projetos de empresas
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
            Todos os dias as empresas nos procuram para desenvolver
            soluções para seus problemas. Ao longo do curso são desenvolvidos,
            no mínimo 3 projetos de mercado.
          </Text>
        </AdvantageWrapper.Card>
        <AdvantageWrapper.Card>
          <Text
            variant="paragraph3"
            tag="h3"
            color="primary.main.contrastText"
            textAlign={{
              xs: 'center',
              md: 'left',
            }}
            maxWidth="441px"
          >
            Rodadas de contratação
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
            Nossas empresas parceiras fazem rodadas de entrevistas
            com todos os candidatos. A quantidade de vagas depende da demanda
            de contratação das mesmas.
          </Text>
        </AdvantageWrapper.Card>
        <AdvantageWrapper.Card>
          <Text
            variant="paragraph3"
            tag="h3"
            color="primary.main.contrastText"
            textAlign={{
              xs: 'center',
              md: 'left',
            }}
            maxWidth="441px"
          >
            Imersivo e Vitalício
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
            Aulas e desafios todos os dias, 2 encontros semanais ao vivo,
            projetos de empresas e muito mais. Além disso você vai ter acesso
            para sempre, incluindo atualizações.
          </Text>
        </AdvantageWrapper.Card>
        <AdvantageWrapper.Card>
          <Text
            variant="paragraph3"
            tag="h3"
            color="primary.main.contrastText"
            textAlign={{
              xs: 'center',
              md: 'left',
            }}
            maxWidth="441px"
          >
            Suporte pelo Discord
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
            Fórum para poder tirar suas dúvidas a qualquer hora do dia.
          </Text>
        </AdvantageWrapper.Card>
        <AdvantageWrapper.Card>
          <Text
            variant="paragraph3"
            tag="h3"
            color="primary.main.contrastText"
            textAlign={{
              xs: 'center',
              md: 'left',
            }}
            maxWidth="441px"
          >
            Certificado
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
            Além do certificado final. A cada módulo, um microcertificado
            para aumentar suas chances de emprego.
          </Text>
        </AdvantageWrapper.Card>
        <AdvantageWrapper.Card>
          <Text
            variant="paragraph3"
            tag="h3"
            color="primary.main.contrastText"
            textAlign={{
              xs: 'center',
              md: 'left',
            }}
            maxWidth="441px"
          >
            Aulas em Vídeo
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
            Aulas em vídeo para ver e rever quantas vezes precisar.
            As aulas ao vivo também ficam gravadas.
          </Text>
        </AdvantageWrapper.Card>
      </AdvantageWrapper.CardContainer>
    </AdvantageWrapper>
  );
}

export default Advantage;
