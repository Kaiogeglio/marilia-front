import React from 'react';
import Image from 'next/image';
import { Button } from '../Button';
import { EventHomeResumeWrapper } from './styles/EventHomeResumeWrapper';
import Text from '../../foundation/Text';

function EventHomeResume() {
  return (
    <EventHomeResumeWrapper>
      <EventHomeResumeWrapper.ImgContainer>
        <Image
          src="/images/logo-dmw.png"
          width={400}
          height={180}
          alt="Digital Maker Week"
        />
        <Text
          variant="subTitle"
          tag="h3"
          color="primary.main.color"
          textAlign={{
            xs: 'center',
            md: 'left',
          }}
          maxWidth="252px"
          marginBottom="80px"
          marginLeft={{
            xs: '0',
            md: '20px',
          }}
        >
          Evento Gratuito e Online, 12 a 16 de julho de 2021
        </Text>
      </EventHomeResumeWrapper.ImgContainer>
      <Button
        variant="primary.main"
        href="https://digitalmakerweek.com.br"
        width="253px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="55px"
        target="_blank"
        fontSize="16px"
      >
        Quero Participar
      </Button>
    </EventHomeResumeWrapper>
  );
}

export default EventHomeResume;
