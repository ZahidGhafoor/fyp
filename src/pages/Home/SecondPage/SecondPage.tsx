import CircleLoader from "components/atoms/CircleLoader";
import BasicCard from "components/templates/BasicCard";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import webTripService from "services/webTrip.service";
import "./SecondPage.scss";


const SecondPage = () => {
  const dispatch = useAppDispatch();

  let data = {
    ownerType: 2,
    ownerId: "56",
  };

  useEffect(() => {
    webTripService.GetAllWebTrips(data, dispatch);
  }, [dispatch]);

  const AllWebTrip = useAppSelector((state) => state.webTrip.GetAllWebTrips);
  const loading = useAppSelector((state) => state.formLoader.loading);

  return (
    <div className="second__page__container">
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
  );
};

export default SecondPage;
