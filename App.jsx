import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Login = lazy(() => import("./src/pages/Login"));
import Homepage from "./src/pages/Homepage";
import ProductPage from "./src/pages/ProductPage";
import { LoginShimmer } from "./src/components/Shimmers";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={
              <Suspense fallback={<LoginShimmer />}>
                <Login />
              </Suspense>
            }
          />

          <Route
            exact
            path="/"
            element={
              <Suspense fallback={<LoginShimmer />}>
                <Homepage />
              </Suspense>
            }
          />
          <Route
            exact
            path="/homepage"
            element={
              <Suspense fallback={<LoginShimmer />}>
                <Homepage />
              </Suspense>
            }
          />
          {/* <Route path="/homepage" element={<Homepage />} />
          <Route path="/products" element={<ProductPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
