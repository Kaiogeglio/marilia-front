import React from 'react';
import Text from '../../foundation/Text';

import { CareerWrapper } from './styles/CareerWrapper';

function Career({ src }) {
  return (
    <CareerWrapper>
      <CareerWrapper.Container>
        <CareerWrapper.Left>

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
            Torne-se um programador em 12 semanas
          </Text>
          <Text
            variant="paragraph3"
            tag="p"
            color="tertiary.light.color"
            textAlign={{
              xs: 'center',
              md: 'left',
            }}
            maxWidth="700px"
          >
            Comece com HTML, CSS e JavaScript e termine desenvolvendo
            sistemas desacoplados e bem estruturados utilizando as ferramentas
            que empresas como
            <CareerWrapper.Strong> Netflix</CareerWrapper.Strong>
            ,
            <CareerWrapper.Strong> PayPal</CareerWrapper.Strong>
            ,
            <CareerWrapper.Strong> Facebook </CareerWrapper.Strong>
            e
            <CareerWrapper.Strong> Nubank </CareerWrapper.Strong>
            utilizam.
          </Text>
        </CareerWrapper.Left>
        <CareerWrapper.VideoContainer>
          <iframe
            src={src}
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </CareerWrapper.VideoContainer>
      </CareerWrapper.Container>
    </CareerWrapper>
  );
}
export default Career;
