import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ImageCarrousel from '../atoms/ImageCarrousel';

import CINCOJ from '../../graphics/imagenes/productos/5j1.jpeg'
import FRIGORIFICO from '../../graphics/imagenes/productos/190frigorifico1.jpeg'
import DOSCATORCE from '../../graphics/imagenes/productos/214.jpeg'
import ALAIRE from '../../graphics/imagenes/productos/alaire1.jpeg'
import CARDENAS from '../../graphics/imagenes/productos/cardenas1.jpeg'
import ELARTESANO from '../../graphics/imagenes/productos/elartesano1.jpeg'
import ENRIQUETOMAS from '../../graphics/imagenes/productos/enriquetomas1.jpeg'
import FOX from '../../graphics/imagenes/productos/fox1.jpeg'
import LAOCTAVA from '../../graphics/imagenes/productos/laoctava1.jpeg'
import LOMSICAR from '../../graphics/imagenes/productos/lomsicar1.jpeg'
import LOSCALVOS from '../../graphics/imagenes/productos/loscalvos1.jpeg'
import MONTENEVADO from '../../graphics/imagenes/productos/montenevado1.jpeg'
import TORGELON from '../../graphics/imagenes/productos/torgelon1.jpeg'
import TUDOR from '../../graphics/imagenes/productos/tudor1.jpeg'
import VAES from '../../graphics/imagenes/productos/vaes1.jpeg'

const options={
    margin: 0,
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: false,
    navText: ["Anterior", "Siguiente"],
    smartSpeed: 500,
    responsive: {
        0: {
            items: 2,
            margin: 10,
            navText: ["Anterior", "Siguiente"],
        },
        400: {
            items: 2,
            margin:10,
            navText: ["Anterior", "Siguiente"],
        },
        600: {
            items: 2,
        },
        700: {
            items: 3,
        },
        1000: {
            items: 5,

        }
    },
};


const Carrousel = () => {

  return (
    <>
    
    <div>
        <OwlCarousel className='owl-theme' {...options}>
            <div className='item'>
                <ImageCarrousel image={CINCOJ}/>
            </div>
            <div className='item '>
                <ImageCarrousel image={FRIGORIFICO}/>
            </div>
            <div className='item '>
                <ImageCarrousel image={DOSCATORCE}/>
            </div>
            <div className='item '>
                <ImageCarrousel image={ALAIRE}/>
            </div>
            <div className='item '>
                <ImageCarrousel image={CARDENAS}/>
            </div>
            <div className='item '>
                <ImageCarrousel image={ELARTESANO}/>
            </div>
            <div className='item '>
                <ImageCarrousel image={ENRIQUETOMAS}/>
            </div>
            <div className='item '>
                <ImageCarrousel image={FOX}/>
            </div>
            <div className='item '>
                <ImageCarrousel image={LAOCTAVA}/>
            </div>
            <div className='item '>
                <ImageCarrousel image={LOMSICAR}/>
            </div>
            <div className='item '>
                <ImageCarrousel image={LOSCALVOS}/>
            </div>
            <div className='item '>
                <ImageCarrousel image={MONTENEVADO}/>
            </div>
            <div className='item '>
                <ImageCarrousel image={TORGELON}/>
            </div>
            <div className='item '>
                <ImageCarrousel image={TUDOR}/>
            </div>
            <div className='item '>
                <ImageCarrousel image={VAES}/>
            </div>
        </OwlCarousel>
    </div>
    </>
    
  )
}

export default Carrousel