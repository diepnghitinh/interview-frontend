import { APP_ROUTES } from "@/constants";
import ErrorMaintainClassic from "@/pages/error/ErrorMaintainClassic";
import React from "react";
import { Route, Routes, ScrollRestoration } from "react-router-dom";
import LazyComponent from "@/components/LazyLoad/LazyComponent";

const Pages = () => {
  return (
    <>
      <Routes>
        {/*Begin farm detail*/}

        <Route path={`*`} element={<ErrorMaintainClassic />} />
      </Routes>
      <ScrollRestoration
        getKey={(location) => {
          return location.pathname;
        }}
      />
    </>
  );
};
export default Pages;
