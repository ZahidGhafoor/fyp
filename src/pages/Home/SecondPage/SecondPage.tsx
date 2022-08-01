import CircleLoader from "components/atoms/CircleLoader";
import BasicCard from "components/templates/BasicCard";
import EffectSwipper from "components/templates/EffectSwipper/EffectSwipper";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import webTripService from "services/webTrip.service";
import DateService from "utils/date.util";
import "./SecondPage.scss";
import star from "../../../assets/star.svg";
import QRCode from "qrcode.react";
import { useSearchParams } from "react-router-dom";
import { Console } from "console";




const SecondPage = () => {
  // const [searchParams, setSearchParams] = useSearchParams();



  // useEffect(() => {
  //   setSearchParams({ ownerType: "2", ownerId: "56" })

  // }, [])


  const dispatch = useAppDispatch();


  let data = {
    ownerType: 2,
    ownerId: "56",
  };

  useEffect(() => {
    webTripService.GetAllWebTrips(data, dispatch);
  }, [dispatch]);

  const AllWebTrip = useAppSelector((state) => state.webTrip.GetAllWebTrips);

  const SingleTripData = useAppSelector((state) => state.webTrip.GetPublicWebTrip);
  const { Trip } = SingleTripData;
  const loading = useAppSelector((state) => state.formLoader.loading);

  return (
    <div className="second__page__container">
      {Trip && <div className="upper">
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
            <div className="bottom__para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Similique quidem id tempora molestiae officiis commodi laborum
              libero consequuntur! Cupiditate esse reprehenderit nemo
              deleniti, repellat, laudantium nisi vel aliquam eaque dolore
              fugit culpa possimus praesentium hic tenetur? Error rerum
              impedit, inventore suscipit neque dolores quis sit aspernatur
              provident minus amet perspiciatis facilis nihil dignissimos
              porro voluptates vero iure pariatur libero atque iste nobis
              dolorum maxime ratione? Placeat illum odit fugit harum
              laudantium optio, nesciunt mollitia sint suscipit repellendus{" "}
              <br /> modi quaerat iste consequuntur ipsam delectus ut vero
              vitae! Eius optio quasi assumenda, tenetur accusamus
              reprehenderit illum a nostrum ipsum dicta, quaerat cum atque
              nihil corrupti iusto? Recusandae, voluptatem. Deleniti numquam
              cumque commodi aperiam error blanditiis minus, dolorem
              reprehenderit praesentium similique voluptatibus, incidunt
              consequuntur officia quasi eius tempore fugit quae nemo soluta
              labore odit perspiciatis, repellat architecto deserunt. Facilis
              doloribus enim odit expedita voluptate minus perspiciatis porro
              amet ducimus rerum vel necessitatibus assumenda voluptas, veniam
              laudantium explicabo fuga delectus possimus quod iste quasi
              deserunt? Quas adipisci accusamus earum commodi, architecto
              blanditiis, nobis magnam dicta sit fugiat dignissimos? Sequi
              temporibus porro ipsa architecto incidunt molestiae deleniti, ut
              consequatur doloremque natus maxime error et voluptatem, fuga
              rerum, officiis reiciendis saepe laboriosam odit voluptatibus
              animi praesentium eum quasi nulla! Repellendus vel aut, dolorem
              modi voluptatum labore animi sapiente aperiam architecto
              molestiae assumenda non ipsa voluptatem iure repudiandae odio
              dolorum recusandae nisi quaerat eius porro quam consectetur sed
              mollitia? <br /> In repellat possimus accusamus dignissimos
              facere enim minima illo, cupiditate incidunt provident dolorum,
              consequatur earum voluptates necessitatibus corrupti, dolor quae
              qui. Quia rem, totam voluptas amet voluptatem soluta quae ipsum
              nobis, deserunt laudantium aut in. Iusto amet ipsam beatae
              sapiente facilis? Harum commodi quas cupiditate eligendi non
              blanditiis rerum magnam praesentium magni deleniti deserunt
              tenetur suscipit provident accusamus beatae omnis quod velit,
              porro, cum quos dolor eum in, quidem nobis. Odio at veritatis
              dolorem omnis. Totam veritatis harum voluptate, deleniti ipsum
              beatae quia quisquam voluptas unde error inventore in
              perspiciatis provident rem esse nemo recusandae! Laborum animi
              ipsa ipsam ut tempore reiciendis. Nobis, doloribus quibusdam.
              Sequi cupiditate numquam repellat architecto consectetur, earum
              in. Minima reprehenderit, nesciunt voluptatibus odit illum
              aperiam reiciendis debitis? Sequi suscipit aperiam veritatis
              repellendus optio accusamus ips
            </div>
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
      }

      <div className="bottom">
        {Trip && <div className="bottom__heading">
          Don't Worry here are some similar options
        </div>
        }
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
