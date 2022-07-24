import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import CircleLoader from "components/atoms/CircleLoader";
import Home from "pages/Home/Home";


export default function AppRoutes() {
  return (
    <Suspense fallback={<CircleLoader />}>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />

        {/* Redirect to root or Not Found */}
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Suspense>
  );
}
