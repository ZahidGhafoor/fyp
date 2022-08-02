// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "./styles.scss";
import { EffectCards } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { useAppSelector } from "redux/hooks";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import { useDispatch } from "react-redux";

const EffectSwipper = () => {
  const data = useAppSelector((state) => state.webTrip.GetPublicWebTrip);
  if (!data) return <></>;
  const { Trip } = data;

  return (
    <>
      <div className="es__continer">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          wrapperTag="ul"
          className="mySwiper"
          pagination={true}
          modules={[EffectCards, Pagination]}>
          {Trip &&
            Trip.CarouselImages?.map((data: any) => {
              return (
                <SwiperSlide>
                  <img className="effect_image" src={data} alt="" />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </>
  );
};
const EffectSwipperGroup = () => {
  const dispatch = useDispatch();
  const tab = useAppSelector((state) => state.home.tab);
  const data = useAppSelector((state) => state.webTrip.GetPublicWebTrip);
  const SingleGroupData = useAppSelector(
    (state) => state.webTrip.GetPublicWebGroup
  );

  if (!data) return <></>;

  const { Group } = SingleGroupData;

  return (
    <>
      <div className="es__continer">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          wrapperTag="ul"
          className="mySwiper"
          pagination={true}
          modules={[EffectCards, Pagination]}>
          {Group &&
            Group.CarouselImages?.map((data: any) => {
              return (
                <SwiperSlide>
                  <img className="effect_image" src={data} alt="" />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </>
  );
};

export { EffectSwipper, EffectSwipperGroup };
