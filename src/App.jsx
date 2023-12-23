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
  RouterProvider,
redirect } from "react-router-dom";
import About from "./About";
import Vans from "./Vans";
import VanInfo from "./VanInfo";
import NotFound from "./NotFound";
import Login, {loader as loginLoader, action as loginAction} from "./Login";
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
import Error from "./Error";
import { Auth } from "./Utility";

const router = createBrowserRouter(createRoutesFromElements(
  <>
  <Route path="/" element={<Layout />} >
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="vans" element={ <Vans /> } />
    <Route path="vans/:id" element={<VanInfo />} />
    <Route path="*" element={<NotFound />} />
    <Route path="login" element={<Login />} loader={loginLoader} action={loginAction}/>
    <Route path="host" element={<HostNav />} loader={async () => await Auth()}>
      <Route index element={<HostDashboard />} loader={async () => await Auth()}/>
      <Route path="income" element={<HostIncome />} loader={async () => await Auth()}/>
      <Route path="vans" element={<HostVans />} loader={async () => await Auth()}/>
      <Route path="vans/:id" element={<HostVan />} loader={async () => await Auth()}>
        <Route index element={<HostVanDetails />} loader={async () => await Auth()}/>
        <Route path="photos" element={<HostVanPhotos />} loader={async () => await Auth()}/>
        <Route path="pricing" element={<HostVanPricing />} loader={async () => await Auth()}/>
      </Route>
      <Route path="reviews" element={<HostReviews />} loader={async () => await Auth()}/>
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
