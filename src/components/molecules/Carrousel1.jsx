import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ImageCarrousel from '../atoms/ImageCarrousel';

import CINCOJ from '../../graphics/imagenes/logos/5j1.png'
import ALAIRE from '../../graphics/imagenes/logos/alaire1.jpeg'
import ENRIQUETOMAS from '../../graphics/imagenes/logos/enriquetomas1.jpeg'
import MONTENEVADO from '../../graphics/imagenes/logos/montenevado1.jpeg'


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


const Carrousel1 = () => {

  return (
    <>
    
    <div>
        <OwlCarousel className='owl-theme' {...options}>
            <div className='item'>
                <ImageCarrousel image={MONTENEVADO}/>
            </div>
            <div className='item '>
                <ImageCarrousel image={CINCOJ}/>
            </div>
            <div className='item '>
                <ImageCarrousel image={ENRIQUETOMAS}/>
            </div>
            <div className='item '>
                <ImageCarrousel image={ALAIRE}/>
            </div>
        </OwlCarousel>
    </div>
    </>
    
  )
}

export default  Carrousel1