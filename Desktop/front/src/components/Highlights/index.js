import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Styles from './High.module.css';

export default (props) => {
  const [sliderRef] = useKeenSlider({
    spacing: 20,
    slidesPerView: 1,
    loop: false,
    mode: "free-snap",
    breakpoints: {
      "(min-width: 768px)": {
        slidesPerView: 3,
        mode: "free-snap",
      },
      "(min-width: 1200px)": {
        slidesPerView: 4,
        mode: "free-snap",
      },
    },
  })

  return (
    <div ref={sliderRef} className={`keen-slider ${Styles.container}`}>
      <div className={`keen-slider__slide number-slide1 ${Styles.card}`}>

        <p className={Styles.title}>03/21 - Highlights</p>
        <p className={Styles.description}>Marília Mendonça morre aos 26 anos em acidente aéreo em Minas Gerais</p>
      </div>
      <div className={`keen-slider__slide number-slide1 ${Styles.card}`}>

        <p className={Styles.title}>03/21 - Highlights</p>
        <p className={Styles.description}>Marília Mendonça morre aos 26 anos em acidente aéreo em Minas Gerais</p>
      </div>
      <div className={`keen-slider__slide number-slide1 ${Styles.card}`}>

        <p className={Styles.title}>03/21 - Highlights</p>
        <p className={Styles.description}>Marília Mendonça morre aos 26 anos em acidente aéreo em Minas Gerais</p>
      </div>
      <div className={`keen-slider__slide number-slide1 ${Styles.card}`}>

        <p className={Styles.title}>03/21 - Highlights</p>
        <p className={Styles.description}>Marília Mendonça morre aos 26 anos em acidente aéreo em Minas Gerais</p>
      </div>
    </div>
  )
}
