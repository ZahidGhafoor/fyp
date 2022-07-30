import NavBar from 'components/templates/NavBar'
import React from 'react'
import Tabs from "components/templates/Tabs";
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { homeActions } from 'redux/slices/Home/homeSlice';
import FirstPage from './FirstPage/FirstPage';
import SecondPage from './SecondPage/SecondPage';
import "./Home.scss"
import ThirdPage from './ThirdPage/ThirdPage';




const Home = () => {

  const tab = useAppSelector((state) => state.home.tab);
  const dispatch = useAppDispatch();




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
  )
}

export default Home