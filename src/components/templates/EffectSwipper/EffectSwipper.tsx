// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./styles.scss";

// import required modules
import { EffectCards } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useAppSelector } from "redux/hooks";




const EffectSwipper = () => {

  const data = useAppSelector((state) => state.webTrip.GetPublicWebTrip);
  const SingleGroupData = useAppSelector((state) => state.webTrip.GetPublicWebGroup);

  if (!data) return <></>
  const { Trip } = data

  const { Group } = SingleGroupData;

  return (
    <>
      <div className="es__continer">

        <Swiper
          effect={"cards"}
          grabCursor={true}

          wrapperTag='ul'
          modules={[EffectCards]}
          className="mySwiper"
        >
          {
            Trip ? Trip.CarouselImages?.map((data: any) => {
              return (
                <SwiperSlide><img className="effect_image" src={data} alt="" /></SwiperSlide>

              )
            })
              :
              Group.CarouselImages?.map((data: any) => {
                return (
                  <SwiperSlide><img className="effect_image" src={data} alt="" /></SwiperSlide>

                )
              })
          }

        </Swiper>
      </div>
    </>
  )
}

export default EffectSwipper