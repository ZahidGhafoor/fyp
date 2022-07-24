// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./styles.scss";

// import required modules
import { EffectCards } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../../assets/S1.jpg"
import img2 from "../../../assets/S2.jpg"
import img3 from "../../../assets/S3.jpg"
import img4 from "../../../assets/S4.jpg"
import img5 from "../../../assets/S5.jpg"
import img6 from "../../../assets/S6.jpg"
import img7 from "../../../assets/S7.jpg"
import img8 from "../../../assets/S1.jpg"



const arr =[
  {
    img:img1
  },
  {
    img:img2
  },
  {
    img:img3
  },
  {
    img:img4
  },
  {
    img:img5
  },
  {
    img:img6
  },
  {
    img:img7
  },
  {
    img:img8
  },
]

const EffectSwipper = () => {
  return (
    <>
    <div className="es__continer">

    <Swiper
      effect={"cards"}
      grabCursor={true}
      
      modules={[EffectCards]}
      className="mySwiper"
    >
      {
        arr.map((data:any)=>{
          return(
            <SwiperSlide><img className="effect_image" src={data.img} alt="" /></SwiperSlide>

          )
        })
      }
      
    </Swiper>
      </div>
  </>
  )
}

export default EffectSwipper