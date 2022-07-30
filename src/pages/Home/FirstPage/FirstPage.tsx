import CircleLoader from "components/atoms/CircleLoader";
import BasicCard from "components/templates/BasicCard";
import EffectSwipper from "components/templates/EffectSwipper/EffectSwipper";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import webTripService from "services/webTrip.service";
import DateService from "utils/date.util";
import "../ThirdPage/ThirdPage.scss";
import star from "../../../assets/star.svg";
import QRCode from "qrcode.react";




const FirstPage = () => {
    const dispatch = useAppDispatch();

    let data = {
        ownerType: 2,
        ownerId: "56",

        pageNumber: 1,
        pageSize: 10,
    };

    useEffect(() => {
        webTripService.GetAllPublicWebGroups(data, dispatch);
    }, [dispatch]);

    const AllWebGroups = useAppSelector((state) => state.webTrip.GetAllPulicWebGroups);

    const SingleGroupData = useAppSelector((state) => state.webTrip.GetPublicWebGroup);
    const { Group } = SingleGroupData;
    const loading = useAppSelector((state) => state.formLoader.loading);

    return (
        <div className="second__page__container">
            {Group && <div className="upper">
                {loading && <CircleLoader />}

                <div className="left">
                    <div className="left__upper">
                        <div className="slider">
                            <EffectSwipper />
                        </div>
                        <div className="left__upper__text">
                            <div className="heading">{Group?.TripName?.substr(0, 20)}</div>
                            <div className="para1">
                                Start Location:{" "}
                                <span>{Group?.StartLocation?.substr(0, 30)}</span>
                            </div>
                            <div className="para1">
                                End Location: <span>{Group?.EndLocation?.substr(0, 30)}</span>
                            </div>
                            <div className="para1">
                                Start Time:{" "}
                                <span>{DateService.getFormattedDate(Group?.StartTime)}</span>
                            </div>
                            <div className="para1">
                                End Time:{" "}
                                <span>{DateService.getFormattedDate(Group?.EndTime)}</span>
                            </div>
                            <div className="para2">
                                <span>{Group?.PriceTag}/</span>Per Person
                            </div>
                            <div className="qrCode">
                                <QRCode value={SingleGroupData?.QRCodeUrl} renderAs="canvas" />
                            </div>
                            <div className="rating">
                                <img src={star} alt="" className="rating__star" />
                                <div className="text">{Group?.ReviewRate}</div>
                            </div>
                        </div>
                    </div>

                    {
                        Group?.GroupDescription &&

                        <div className="left__bottom">
                            <div className="heading">Overview</div>
                            <div className="bottom__para">
                                {
                                    Group?.GroupDescription
                                }
                            </div>
                        </div>
                    }
                </div>
                <div className="right">
                    <iframe
                        className="frame"
                        title="myFrame"
                        src={`https://maps.google.com/maps?q=${Group?.Trips[0]?.Lat},${Group?.Trips[0]?.Lng}&hl=es;&output=embed`}
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
                {Group && <div className="bottom__heading">
                    Don't Worry here are some similar options
                </div>
                }
                <div className="spageCard">
                    {loading && <CircleLoader />}
                    {AllWebGroups?.map((data: any) => {
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
                                GroupGuid={data.GroupGuid}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default FirstPage;
