import DefaultLayout from '@/layouts/DefaultLayout'
import React from 'react'
import { Routes, Route, ScrollRestoration } from 'react-router-dom'

import RouterApp from './RouterApp'
// import SuspenseView from '@/components/SuspenseView/SuspenseView'
import ErrorMaintainClassic from '@/pages/error/ErrorMaintainClassic'
import {APP_ROUTES} from "@/constants/routes.constant";
import LazyComponent from "@/components/LazyLoad/LazyComponent";

const Pages = () => {
  return (
    // <SuspenseView>
    // break cache, causes screen flashing, causes all components rerendering
    <>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route
            path={APP_ROUTES.HOME}
            element={
              <LazyComponent>
                  <div>Farm list</div>
              </LazyComponent>
            }
          />
          {/*components*/}
        </Route>
        <Route
          path="farm/*"
          element={<DefaultLayout route={<RouterApp />} />}
        ></Route>
      </Routes>
      <ScrollRestoration
        getKey={(location) => {
          return location.pathname
        }}
      />
    </>
    // </SuspenseView>
  )
}
export default Pages
