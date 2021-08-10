import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { Selectiveprocess } from './styles/SelectiveProcess';
import Text from '../../foundation/Text';

function SelectiveProcess() {
  const [sliderRef] = useKeenSlider({
    spacing: 10,
    slidesPerView: 1.2,
    centered: false,
    loop: false,
    mode: 'snap',
    breakpoints: {
      '(min-width: 768px)': {
        slidesPerView: 1.7,
        mode: 'free-snap',
      },
      '(min-width: 1200px)': {
        slidesPerView: 2.5,
        mode: 'free-snap',
      },
    },
  });
  return (
    <Selectiveprocess>
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
        Como funciona o Processo Seletivo
      </Text>
      <Selectiveprocess.Box
        ref={sliderRef}
        className="keen-slider"
      >
        <Selectiveprocess.Step
          className="keen-slider__slide"
          style={{ borderTop: '2px solid rgb(253, 149, 31)' }}
        >
          <span>1</span>
          <h3
            style={{ color: 'rgb(253, 149, 31)' }}
          >
            Inscrição
          </h3>
          <Text
            variant="paragraph3"
            tag="p"
            color="tertiary.light.color"
            textAlign={{
              xs: 'left',
              md: 'left',
            }}
          >
            Nesta etapa precisamos dos seus dados básicos,
            {' '}
            mas fica tranquilo, não vai demorar muito.
          </Text>
        </Selectiveprocess.Step>
        <Selectiveprocess.Step
          className="keen-slider__slide"
          style={{ borderTop: '2px solid rgb(130, 87, 230)' }}
        >
          <span>2</span>
          <h3
            style={{ color: 'rgb(130, 87, 230)' }}
          >
            Projeto
          </h3>
          <Text
            variant="paragraph3"
            tag="p"
            color="tertiary.light.color"
            textAlign={{
              xs: 'left',
              md: 'left',
            }}
          >
            Para acessar qualquer um dos nossos cursos, é necessários fazer um projeto.
          </Text>
        </Selectiveprocess.Step>
        <Selectiveprocess.Step
          className=" keen-slider__slide"
          style={{ borderTop: '2px solid rgb(4, 211, 97)' }}
        >
          <span>3</span>
          <h3
            style={{ color: 'rgb(4, 211, 97)' }}
          >
            Entrevista
          </h3>
          <Text
            variant="paragraph3"
            tag="p"
            color="tertiary.light.color"
            textAlign={{
              xs: 'left',
              md: 'left',
            }}
          >
            Feito o projeto, é hora de fazer uma entrevista com o CEO de uma das
            empresas parceiras, com grandes chances de ser contratado.
          </Text>
        </Selectiveprocess.Step>
        <Selectiveprocess.Step
          className=" keen-slider__slide"
          style={{ borderTop: '2px solid rgb(232, 63, 91)' }}
        >
          <span>4</span>
          <h3
            style={{ color: 'rgb(232, 63, 91)' }}
          >
            Matrícula
          </h3>
          <Text
            variant="paragraph3"
            tag="p"
            color="tertiary.light.color"
            textAlign={{
              xs: 'left',
              md: 'left',
            }}
          >
            Se você chegou até aqui, pode comemorar,
            agora é só entragar os documentos e se matricular.
          </Text>
        </Selectiveprocess.Step>
      </Selectiveprocess.Box>
    </Selectiveprocess>

  );
}

export default SelectiveProcess;
