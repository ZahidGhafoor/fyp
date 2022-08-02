import CircleLoader from "components/atoms/CircleLoader";
import BasicCard from "components/templates/BasicCard";
import { EffectSwipper } from "components/templates/EffectSwipper/EffectSwipper";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import webTripService from "services/webTrip.service";
import DateService from "utils/date.util";
import "./SecondPage.scss";
import star from "../../../assets/star.svg";
import QRCode from "qrcode.react";

const SecondPage = () => {
  const dispatch = useAppDispatch();

  const AllWebTrip = useAppSelector((state) => state.webTrip.GetAllWebTrips);

  const SingleTripData = useAppSelector(
    (state) => state.webTrip.GetPublicWebTrip
  );
  const { Trip } = SingleTripData;
  const loading = useAppSelector((state) => state.formLoader.loading);

  useEffect(() => {
    let data = {
      ownerType: 2,
      ownerId: "56",
    };
    webTripService.GetAllWebTrips(data, dispatch);
  }, [dispatch]);

  return (
    <div className="second__page__container">
      {Trip && (
        <div className="upper">
          <div className="left">
            <div className="left__upper">
              <div className="slider">
                <EffectSwipper />
              </div>
              <div className="left__upper__text">
                <div className="heading">{Trip.TripName?.substr(0, 20)}</div>
                <div className="para1">
                  Start Location:{" "}
                  <span>{Trip.StartLocation?.substr(0, 30)}</span>
                </div>
                <div className="para1">
                  End Location: <span>{Trip.EndLocation?.substr(0, 30)}</span>
                </div>
                <div className="para1">
                  Start Time:{" "}
                  <span>{DateService.getFormattedDate(Trip.StartTime)}</span>
                </div>
                <div className="para1">
                  End Time:{" "}
                  <span>{DateService.getFormattedDate(Trip.EndTime)}</span>
                </div>
                <div className="para2">
                  <span>{Trip.PriceTag}/</span>Per Person
                </div>
                <div className="qrCode">
                  <QRCode value={SingleTripData.QRCodeUrl} renderAs="canvas" />
                </div>
                <div className="rating">
                  <img src={star} alt="" className="rating__star" />
                  <div className="text">{Trip.ReviewRate}</div>
                </div>
              </div>
            </div>

            <div className="left__bottom">
              <div className="heading">Overview</div>
              <div className="bottom__para">{Trip.TripDescription}</div>
            </div>
          </div>
          <div className="right">
            <iframe
              className="frame"
              title="myFrame"
              src={`https://maps.google.com/maps?q=${Trip.Waypoints[0].Lat},${Trip.Waypoints[0].Lng}&hl=es;&output=embed`}
              width="100%"
              height="-webkit-fill-available"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen={true}
              aria-hidden="false"></iframe>
          </div>
        </div>
      )}

      <div className="bottom">
        {Trip && (
          <div className="bottom__heading">
            Don't Worry here are some similar options
          </div>
        )}
        <div className="spageCard">
          {loading && <CircleLoader />}
          {AllWebTrip?.map((data: any) => {
            return (
              <BasicCard
                CarouselImages={data.CarouselImages}
                EndLocation={data.EndLocation}
                EndTime={data.EndTime}
                ReviewRate={data.ReviewRate}
                StartLocation={data.StartLocation}
                StartTime={data.StartTime}
                TripName={data.TripName}
                PriceTag={data.PriceTag}
                LocationTag={data.LocationTag}
                TripGuid={data.TripGuid}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
