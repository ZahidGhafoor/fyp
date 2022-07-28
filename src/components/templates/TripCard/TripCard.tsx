import React from "react";
import loc from "../../../assets/export.svg";
import "./Card.scss";

import "swiper/css";
import "swiper/css/effect-creative";
import { EffectCreative } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import star from "../../../assets/star.svg";

import heart from "../../../assets/fav.svg";
import DateService from "utils/date.util";
import webTripService from "services/webTrip.service";
import { useAppDispatch } from "redux/hooks";

const TripCard = ({
  TripGuid,
  CarouselImages,
  EndLocation,
  EndTime,
  ReviewRate,
  StartLocation,
  StartTime,
  TripName,
  PriceTag,
  LocationTag,
}: any) => {
  const dispatch = useAppDispatch();

  const SingleDetail = () => {
    webTripService.GetPublicWebTrip(TripGuid, dispatch);
  };
  return (
    <div onClick={SingleDetail} className="cards__container">
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
          {CarouselImages?.map((data: any) => {
            return (
              <SwiperSlide>
                <img className="card_image" src={data} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="card__bottom">
        <img src={heart} alt="" className="heart" />
        <div className="rating">
          <img src={star} alt="" className="rating__star" />
          <div className="text">{ReviewRate}</div>
        </div>
        <div className="card__heading">{TripName?.substr(0, 20)}</div>
        <div className="location">
          <img src={loc} alt="" className="loc" />
          <div className="text">{LocationTag}</div>
        </div>

        <div className="para1">
          Start Location: <span>{StartLocation?.substr(0, 30)}</span>
        </div>
        <div className="para1">
          End Location: <span>{EndLocation?.substr(0, 30)}</span>
        </div>
        <div className="para1">
          Start Time: <span>{DateService.getFormattedDate(StartTime)}</span>{" "}
        </div>
        <div className="para1">
          End Time: <span>{DateService.getFormattedDate(EndTime)}</span>
        </div>
        <div className="para2">
          <span>{PriceTag}/</span>Per Person
        </div>
        <div className="btn">Available</div>
      </div>
    </div>
  );
};

export default TripCard;
