/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { DepositionsWrapper } from './styles/DepositionsWrapper';
import Text from '../../foundation/Text';

export default function Depositions() {
  return (
    <DepositionsWrapper>
      <Text
        variant="title"
        tag="h2"
        color="primary.main.color"
        textAlign={{
          xs: 'center',
          md: 'left',
        }}
        marginBottom="80px"
      >
        Depoimentos de Alunos
      </Text>
      <DepositionsWrapper.Container>
        <DepositionsWrapper.Box gridArea="video">
          <DepositionsWrapper.VideoWrapper>
            <iframe
              width="330"
              height="200"
              src="https://www.youtube.com/embed/ANzugnSsay4"
              title="Depoimento Aluno"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </DepositionsWrapper.VideoWrapper>
        </DepositionsWrapper.Box>
        <DepositionsWrapper.Box gridArea="double">
          <DepositionsWrapper.Deposition>
            <DepositionsWrapper.ImageWrpper>
              <Image
                src="/images/matheus-campos.jpeg"
                width={40}
                height={40}
              />
            </DepositionsWrapper.ImageWrpper>
            <DepositionsWrapper.DepositionText>
              <Text
                variant="paragraph3"
                tag="h3"
                color="primary.main.color"
                textAlign={{
                  xs: 'left',
                  md: 'left',
                }}
              >
                Matheus Campos
              </Text>
              <Text
                variant="paragraph3"
                tag="p"
                color="tertiary.light.color"
                textAlign={{
                  xs: 'left',
                }}
                maxWidth="350px"
              >
                Fiquei muito surpreso o tanto que pude me desenvolver em Programa????o,
                fiquei muito feliz pelo conhecimentoque adquiri pois eu realmente n??o
                sabia nada estava realmente come??ando do 0. Com determina????o e for??a
                de vontade e com a ajuda da Overstack podemos sim nos desenvolver.
                Obrigado Over pela dedica????o e carinho com seus Alunos.
                Aplico em minha vida mesmo ainda pensando se irei seguir ou n??o Programa????o,
                Por??m o conhecimento e a forma de pensar est?? sendo aplicada em
                diversas coisas que fa??o em minha vida tanto como as fontese sites passado no curso.
              </Text>
            </DepositionsWrapper.DepositionText>
          </DepositionsWrapper.Deposition>
          <DepositionsWrapper.Deposition>
            <DepositionsWrapper.ImageWrpper>
              <Image
                src="/images/lucas-rezende.jpg"
                width={40}
                height={40}
              />
            </DepositionsWrapper.ImageWrpper>
            <DepositionsWrapper.DepositionText>
              <Text
                variant="paragraph3"
                tag="h3"
                color="primary.main.color"
                textAlign={{
                  xs: 'left',
                  md: 'left',
                }}
              >
                Lucas Rezende
              </Text>
              <Text
                variant="paragraph3"
                tag="p"
                color="tertiary.light.color"
                textAlign={{
                  xs: 'left',
                }}
                maxWidth="350px"
              >
                A Overstack foi uma escola que me ajudou a aprofundar
                os conhecimentos que eu j?? tinha e me deu uma perspectiva
                dos produtos do mercado. Fiz o Firestack que me ajudou
                muito em React e me apresentou o NextJs e seus poderes.
                Ent??o, eu s?? tenho a agradecer pelo curso, que me fez
                tamb??m arrumar uma vaga no mercado de trabalho na ??rea.
              </Text>
            </DepositionsWrapper.DepositionText>
          </DepositionsWrapper.Deposition>
        </DepositionsWrapper.Box>
        <DepositionsWrapper.Box gridArea="big">
          <DepositionsWrapper.Deposition>
            <DepositionsWrapper.ImageWrpper>
              <Image
                src="/images/dayson-portela.jpeg"
                width={40}
                height={40}
              />
            </DepositionsWrapper.ImageWrpper>
            <DepositionsWrapper.DepositionText>
              <Text
                variant="paragraph3"
                tag="h3"
                color="primary.main.color"
                textAlign={{
                  xs: 'left',
                  md: 'left',
                }}
              >
                Dayson Portela
              </Text>
              <Text
                variant="paragraph3"
                tag="p"
                color="tertiary.light.color"
                textAlign={{
                  xs: 'left',
                }}
                maxWidth="350px"
              >
                Minha Jornada como desenvolvedor come??ou no in??cio de 2020,
                e durante o in??cio dessa jornada foram surgindo muitas d??vidas,
                tais como: quais tecnologias aprender?
                por onde come??ar, pelo BackEnd ou pelo FrontEnd?
                Qual a melhor linguagem de programa????o para aprender?
                e quanto mais conte??do eu assistia na internet mais d??vidas me geraram,
                cada semana estava tentando aprender uma linguagem de programa????o nova,
                mas claro sem evoluir em nenhuma,e me gerando frustra????es.
                Foi a?? que descobri o Bootcamp da Overstack,
                vou contar aqui um pouco da minha experi??ncia com o curso.
              </Text>
              <Link href="https://dayson-portela.medium.com/minha-experi%C3%AAncia-no-bootcamp-de-programa%C3%A7%C3%A3o-da-overstack-c85e6fa54dcd">
                <a target="_blank">
                  Ver post no medium
                </a>
              </Link>
            </DepositionsWrapper.DepositionText>
          </DepositionsWrapper.Deposition>
        </DepositionsWrapper.Box>
      </DepositionsWrapper.Container>
    </DepositionsWrapper>
  );
}
