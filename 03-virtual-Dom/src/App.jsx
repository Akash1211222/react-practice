import { useState } from "react";
import "./App.css";
import ProductPage from "./pages/ProductPage.jsx";
import PassGenPage from "./pages/PassGenPage.jsx";
import CurrencyP from "./components/CurrencyP.jsx";

function App() {
  return (
    <>
      <PassGenPage />
      <CurrencyP />
      <ProductPage />
    </>
  );
}

export default App;
