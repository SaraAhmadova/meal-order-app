import React, { Fragment } from "react";
import BannerCard from "./components/BannerCard/BannerCard";
import Meals from "./components/Meals/Meals";
import Header from "./Layout/Header/Header";
function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <BannerCard />
        <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
