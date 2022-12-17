import React from "react";
import Main from "./components/organisms/Main";
import CardSeccion from "./components/organisms/CardSeccion";
import CardSeccionImp from "./components/organisms/CardSeccionImp";
import Seccion3 from "./components/organisms/Seccion3";
import Seccion4 from "./components/organisms/Seccion4";
import Seccion5 from "./components/organisms/Seccion5";
import ScrollToTop from "./components/atoms/ScrollToTop";
import WahtsaapButton from "./components/atoms/WahtsaapButton";
import Footer from "./components/organisms/Footer";
import { Helmet,  } from 'react-helmet-async';


function App() {
  return (
    <>
    <Helmet>
    <meta charset="utf-8" />
    <meta property="og:url" content="https://jamonxjamon-arg.com/"/>
    <meta property="og:title" content="Jamón Crudo: en todos sus tipos | jamón x jamón"/>
    <meta property="og:image" content="https://ibb.co/vxxJfzH"/>
    <meta property="og:image:secure_url" content="https://ibb.co/vxxJfzH"/>
    <meta property="og:description" content="Venta y distribución de Jamón Crudo. Trabajamos con marcas Nacionales e Importadas. Envios a todo el pais."/>
    <meta property="og:type" content="website"/>
    <title>Jamón Crudo: en todos sus tipos | jamón x jamón</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="copyright" content="jamonxjamon-arg.com"/>
    <meta name="robots" content="index" />
    <meta
      name="description"
      content="Venta y distribución de Jamón Crudo. Trabajamos con marcas Nacionales e Importadas. Envios a todo el pais."/>
    <link rel="icon" href="%PUBLIC_URL%/logojxj.ico" />
    </Helmet>
    <Main/>
    <CardSeccion/>
    <CardSeccionImp/>
    <Seccion3/>
    <Seccion4/>
    <Seccion5/>
    <ScrollToTop/>
    <WahtsaapButton/>
    <Footer/>
    </>
  );
}

export default App;

