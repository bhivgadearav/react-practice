import { useState } from "react";
import "./App.css";
import Home from "./Home";
import { 
  BrowserRouter, 
  Routes, 
  Route, 
  Link, 
  NavLink, 
  createBrowserRouter, 
  createRoutesFromElements,
  RouterProvider } from "react-router-dom";
import About from "./About";
import Vans from "./Vans";
import VanInfo from "./VanInfo";
import NotFound from "./NotFound";
import Login from "./Login";
import HostDashboard from "./HostDashboard";
import HostVans from "./HostVans";
import HostReviews from "./HostReviews";
import HostIncome from "./HostIncome";
import HostNav from "./HostNav";
import HostVan from "./HostVan";
import HostVanDetails from "./HostVanDetails";
import HostVanPhotos from "./HostVanPhotos";
import HostVanPricing from "./HostVanPricing";
import Layout from "./Layout";

const router = createBrowserRouter(createRoutesFromElements(
  <>
  <Route path="/" element={<Layout />} >
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="vans" element={ <Vans /> } />
    <Route path="vans/:id" element={<VanInfo />} />
    <Route path="*" element={<NotFound />} />
    <Route path="login" element={<Login />} />
    <Route path="host" element={<HostNav />}>
      <Route index element={<HostDashboard />} />
      <Route path="income" element={<HostIncome />} />
      <Route path="vans" element={<HostVans />} />
      <Route path="vans/:id" element={<HostVan />}>
        <Route index element={<HostVanDetails />} />
        <Route path="photos" element={<HostVanPhotos />} />
        <Route path="pricing" element={<HostVanPricing />} />
      </Route>
      <Route path="reviews" element={<HostReviews />} />
    </Route>
  </Route>
  </>
));

function App() {
  return (
    <>
      <RouterProvider router = {router} />
    </>
  );
}

export default App;
