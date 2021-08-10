/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { Selectiveprocess } from './styles/SelectiveProcess';
import Text from '../../foundation/Text';

// eslint-disable-next-line react/prop-types
function SelectiveProcess({ proccess }) {
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
        {
          proccess
          // eslint-disable-next-line react/prop-types
          && proccess.map((element, index) => (
            <Selectiveprocess.Step
              className="keen-slider__slide"
              style={{ borderTop: `2px solid ${element.Style}` }}
              key={index}
            >
              <span>{index + 1}</span>
              <h3
                style={{ color: element.Style }}
              >
                {element.proccess_name}
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
                {element.proccess_description}
              </Text>
            </Selectiveprocess.Step>
          ))
        }
      </Selectiveprocess.Box>
    </Selectiveprocess>

  );
}

export default SelectiveProcess;
