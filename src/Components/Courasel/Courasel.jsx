import React from 'react'
import Slider, { SliderItem } from '../Slider/Slider'
import car1 from './Images/car1.jpg'
import car2 from './Images/car2.jpg'
import car3 from './Images/car3.jpg'
import car4 from './Images/car4.jpg'
import car5 from './Images/car5.jpeg'

const Courasel = () => {
  return (
    <Slider>
        <SliderItem>
            <img src={car1} alt="" />
        </SliderItem>
        <SliderItem>
            <img src={car2} alt="" />
        </SliderItem>
        <SliderItem>
            <img src={car3} alt="" />
        </SliderItem>
        <SliderItem>
            <img src={car4} alt="" />
        </SliderItem>
        <SliderItem>
            <img src={car5} alt="" />
        </SliderItem>
    </Slider>
  )
}

export default Courasel