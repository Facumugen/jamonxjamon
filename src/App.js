import Main from "./components/organisms/Main";
import CardSeccion from "./components/organisms/CardSeccion";
import CardSeccionImp from "./components/organisms/CardSeccionImp";
import Seccion3 from "./components/organisms/Seccion3";
import Seccion4 from "./components/organisms/Seccion4";
import Seccion5 from "./components/organisms/Seccion5";
import ScrollToTop from "./components/atoms/ScrollToTop";
import WahtsaapButton from "./components/atoms/WahtsaapButton";
import Footer from "./components/organisms/Footer";

function App() {
  return (
    <>
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

