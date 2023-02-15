import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import AppBn from "./App.bn";
import ShopPage from "./pages/shop";
import AdminLogin from "./pages/admin";
import VotePage from "./pages/vote";
import StatusPage from "./pages/status";
import ErrorBoundary from "./components/ErrorBoundry";
import LoadingComponent from "./components/loadingComponent";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/bn/" element={<AppBn />} />
        <Route path="/admin/uyfhhuybuhvsfuy" element={<AdminLogin />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/votes" element={<VotePage />} />
        <Route
          path="/status"
          element={
            <Suspense fallback={<LoadingComponent />}>
              <ErrorBoundary>
                <StatusPage />
              </ErrorBoundary>
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
