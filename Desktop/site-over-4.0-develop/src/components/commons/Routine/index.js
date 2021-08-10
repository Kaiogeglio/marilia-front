import React from 'react';
import { FaLaptopCode, FaVideo } from 'react-icons/fa';
import { GoPerson } from 'react-icons/go';
import { AiFillMessage } from 'react-icons/ai';
import Text from '../../foundation/Text';

import { RoutineWrapper } from './styles/RoutineWrapper';

function Routine() {
  return (
    <RoutineWrapper>
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
        Como é a rotina do curso?
      </Text>
      <RoutineWrapper.List>
        <RoutineWrapper.ListItem>
          <RoutineWrapper.Strong>01</RoutineWrapper.Strong>
          <RoutineWrapper.TextContainer>
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
              Todos os dias, durante a manhã ou noite
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
              São liberadas aulas em vídeo
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
              Suporte à dúvidas pelo Discord
            </Text>
          </RoutineWrapper.TextContainer>
          <FaVideo />
        </RoutineWrapper.ListItem>
        <RoutineWrapper.ListItem>
          <RoutineWrapper.Strong>02</RoutineWrapper.Strong>
          <RoutineWrapper.TextContainer>
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
              Todos os dias, durante a tarde ou noite
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
              A partir do segundo módulo você poderá realizar
              estágio remoto para colocar em prática o que aprendeu até agora
            </Text>
          </RoutineWrapper.TextContainer>
          <GoPerson />
        </RoutineWrapper.ListItem>
        <RoutineWrapper.ListItem>
          <RoutineWrapper.Strong>03</RoutineWrapper.Strong>
          <RoutineWrapper.TextContainer>
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
              Duas vezes por semana
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
              Encontros online para desenvolver projetos e tirar todas as suas dúvidas
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
              Quizes e desafios para consolidar os conhecimentos
            </Text>
          </RoutineWrapper.TextContainer>
          <AiFillMessage />
        </RoutineWrapper.ListItem>
        <RoutineWrapper.ListItem>
          <RoutineWrapper.Strong>04</RoutineWrapper.Strong>
          <RoutineWrapper.TextContainer>
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
              Ao final de cada módulo
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
              Ao final de cada módulo, um projeto real com tudo que foi visto.
            </Text>
          </RoutineWrapper.TextContainer>
          <FaLaptopCode />
        </RoutineWrapper.ListItem>
      </RoutineWrapper.List>
    </RoutineWrapper>
  );
}

export default Routine;
