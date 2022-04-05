
import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/homePage";

export const Router = () => {
  return (
    <Routes>
        <Route exact path="/" component={HomePage} />
    </Routes>
  );
};

export default Router;