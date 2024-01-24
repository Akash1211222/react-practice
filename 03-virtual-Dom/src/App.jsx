import { useState } from "react";
import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
// import ProductPage from "./pages/ProductPage.jsx";
// import PassGenPage from "./pages/PassGenPage.jsx";
import CurrencyP from "./components/CurrencyP.jsx";
import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Layout from "./Layout.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Pass from "./components/Pass.jsx";
import User from "./components/User/User.jsx";
import Github from "./components/Github/Github.jsx";

import ProductPage from "./pages/ProductPage.jsx";
import { githubLoader } from "./components/Github/Github.jsx";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="passwordgen" element={<Pass />} />
        <Route path="user/:userid" element={<User />} />
        <Route path="product" element={<ProductPage />} />
        <Route path="currency" element={<CurrencyP />} />
        <Route loader={githubLoader} path="/github" element={<Github />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
      {/* <PassGenPage />
      <CurrencyP />
      <ProductPage /> */}
    </>
  );
}

export default App;
