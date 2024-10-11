import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ImageCarrouselJamcrudo from '../atoms/ImageCarrouselJamcrudo';

import ELARTESANO from '../../graphics/imagenes/productos/jamón deshuesado/El Artesano.jpg'
import ELARTESANO2 from '../../graphics/imagenes/productos/jamón deshuesado/El Artesano 2.jpg'
import LOSCALVOS from '../../graphics/imagenes/productos/jamón deshuesado/Los Calvos.jpg'
import LOSCALVOS2 from '../../graphics/imagenes/productos/jamón deshuesado/Los Calvos 2.jpg'
import TORGELON from  '../../graphics/imagenes/productos/jamón deshuesado/Torgelon.jpg'
import TORGELON2 from  '../../graphics/imagenes/productos/jamón deshuesado/Torgelon 2.jpg'


const options={
    margin: 0,
    responsiveClass: true,
    nav: false,
    dots: true,
    autoplay: false,
    smartSpeed: 500,
    responsive: {
        0: {
            items: 2,
            margin: 10,
           
        },
        400: {
            items: 2,
            margin:10,
            
        },
        600: {
            items: 3,
            margin:10,
        },
        1000: {
            items: 4,
            margin:10,
        }
    },
};


const Carrouseljamcrudo = () => {

  return (
    <>
    
    <div>
        <OwlCarousel className='owl-theme' {...options}>
            <div className='item'>
                <ImageCarrouselJamcrudo image={ELARTESANO}/>
            </div>
            <div className='item '>
                <ImageCarrouselJamcrudo image={ELARTESANO2}/>
            </div>
            <div className='item '>
                <ImageCarrouselJamcrudo image={LOSCALVOS}/>
            </div>
            <div className='item '>
                <ImageCarrouselJamcrudo image={LOSCALVOS2}/>
            </div>
            <div className='item '>
                <ImageCarrouselJamcrudo image={TORGELON}/>
            </div>
            <div className='item'>
                <ImageCarrouselJamcrudo image={TORGELON2}/>
            </div>
        </OwlCarousel>
    </div>
    </>
    
  )
}

export default  Carrouseljamcrudo;