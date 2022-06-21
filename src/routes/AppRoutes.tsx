import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import CircleLoader from "components/atoms/CircleLoader";
import Login from "pages/Login";
import SignUp from "pages/SignUp";

export default function AppRoutes() {
  return (
    <Suspense fallback={<CircleLoader />}>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />

        {/* Redirect to root or Not Found */}
        <Route path="*" element={<Navigate to="/" />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Suspense>
  );
}
