import NavBar from "components/templates/NavBar";
import React, { useEffect } from "react";
import Tabs from "components/templates/Tabs";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { homeActions } from "redux/slices/Home/homeSlice";
import FirstPage from "./FirstPage/FirstPage";
import SecondPage from "./SecondPage/SecondPage";
import "./Home.scss";
import ThirdPage from "./ThirdPage/ThirdPage";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [searchParams] = useSearchParams();
  const action = searchParams.get("action");
  const dispatch = useAppDispatch();
  const tab = useAppSelector((state) => state.home.tab);

  useEffect(() => {
    if (action === "1" || "2" || "31") dispatch(homeActions.setTab(1));
    else if (action === "3" || "24" || "32") dispatch(homeActions.setTab(2));
  }, [action, dispatch]);

  return (
    <div>
      <NavBar />

      <div className="tabs">
        <Tabs
          value={tab}
          onChange={(tab) => dispatch(homeActions.setTab(tab))}
          tabs={[
            {
              label: "Selected & Favourites",
              element: <FirstPage />,
            },
            {
              label: "Activities & Trips",
              element: <SecondPage />,
            },
            {
              label: "Groups & Catalogs",
              element: <ThirdPage />,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Home;
