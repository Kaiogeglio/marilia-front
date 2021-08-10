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
                Fiquei muito surpreso o tanto que pude me desenvolver em Programação,
                fiquei muito feliz pelo conhecimentoque adquiri pois eu realmente não
                sabia nada estava realmente começando do 0. Com determinação e força
                de vontade e com a ajuda da Overstack podemos sim nos desenvolver.
                Obrigado Over pela dedicação e carinho com seus Alunos.
                Aplico em minha vida mesmo ainda pensando se irei seguir ou não Programação,
                Porém o conhecimento e a forma de pensar está sendo aplicada em
                diversas coisas que faço em minha vida tanto como as fontese sites passado no curso.
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
                os conhecimentos que eu já tinha e me deu uma perspectiva
                dos produtos do mercado. Fiz o Firestack que me ajudou
                muito em React e me apresentou o NextJs e seus poderes.
                Então, eu só tenho a agradecer pelo curso, que me fez
                também arrumar uma vaga no mercado de trabalho na área.
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
                Minha Jornada como desenvolvedor começou no início de 2020,
                e durante o início dessa jornada foram surgindo muitas dúvidas,
                tais como: quais tecnologias aprender?
                por onde começar, pelo BackEnd ou pelo FrontEnd?
                Qual a melhor linguagem de programação para aprender?
                e quanto mais conteúdo eu assistia na internet mais dúvidas me geraram,
                cada semana estava tentando aprender uma linguagem de programação nova,
                mas claro sem evoluir em nenhuma,e me gerando frustrações.
                Foi aí que descobri o Bootcamp da Overstack,
                vou contar aqui um pouco da minha experiência com o curso.
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
