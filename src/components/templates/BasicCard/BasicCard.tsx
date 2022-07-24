import React from 'react'
import loc from "../../../assets/export.svg"
import "./Card.scss"

import "swiper/css";
import "swiper/css/effect-creative";
import { EffectCreative } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../../assets/S1.jpg"
import img2 from "../../../assets/S2.jpg"
import img3 from "../../../assets/S3.jpg"
import img4 from "../../../assets/S4.jpg"
import img5 from "../../../assets/S5.jpg"
import img6 from "../../../assets/S6.jpg"
import img7 from "../../../assets/S7.jpg"
import img8 from "../../../assets/S1.jpg"
import star from "../../../assets/star.svg"


import heart from "../../../assets/fav.svg"



const arr = [
  {
    img: img1
  },
  {
    img: img2
  },
  {
    img: img3
  },
  {
    img: img4
  },
  {
    img: img5
  },
  {
    img: img6
  },
  {
    img: img7
  },
  {
    img: img8
  },
]

interface IProps {
  heading: string
  location: string
}




const BasicCard = ({heading,location}:IProps) => {
  return (
    <div className="cards__container">
      <div className="swipper">
        <Swiper
          grabCursor={true}
          effect={"creative"}

          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          modules={[EffectCreative]}
          className="mySwiper"
        >
          {
            arr.map((data: any) => {
              return (
                <SwiperSlide><img className="card_image" src={data.img} alt="" /></SwiperSlide>

              )
            })
          }
        </Swiper>

      </div>
      <div className="card__bottom">
        <img src={heart} alt="" className="heart" />
        <div className="rating">
          <img src={star} alt="" className="rating__star" />
          <div className="text">4.9</div>

        </div>
        <div className="card__heading">
          {heading}

        </div>
        <div className="location">
          <img src={loc} alt="" className="loc" />
          <div className="text">{location}</div>
        </div>

        <div className="para1">Start Location: <span>~50 char</span></div>
        <div className="para1">End Location: <span>~50 char</span></div>
        <div className="para1">Start Time: <span>12-07-2022</span> | <span>10:00 AM</span></div>
        <div className="para1">End Time: <span>12-07-2022</span> | <span>10:00 AM</span></div>
        <div className="para2"><span>$99/</span>Per Person</div>
        <div className="btn">Available</div>
      </div>


    </div>
  )
}

export default BasicCard