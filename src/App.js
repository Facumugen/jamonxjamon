import React from "react";
import Inicio from "./components/organisms/Main";
import Productos from "./components/organisms/CardSection";
import ProductosImportados from "./components/organisms/CardSectionImp";
import ProductosParmaNacionales from "./components/organisms/CardSectionParmaNac";
import Banner from "./components/organisms/Section3";
import Marcas from "./components/organisms/Section4";
import Catálogo from "./components/organisms/Section5";
import ScrollToTop from "./components/atoms/ScrollToTop";
import WahtsaapButton from "./components/atoms/WahtsaapButton";
import Footer from "./components/organisms/Footer";

function App() {
  return (
    <>
    <Inicio/>
    <Productos/>
    <ProductosImportados/>
    <ProductosParmaNacionales/>
    <Banner/>
    <Marcas/>
    <Catálogo/>
    <ScrollToTop/>
    <WahtsaapButton/>
    <Footer/>
    </>
  );
}

export default App;

