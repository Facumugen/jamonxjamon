import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ImageCarrousel from '../atoms/ImageCarrousel';

import CINCOJ from '../../graphics/imagenes/logos/5j1.png'
import ALAIRE from '../../graphics/imagenes/logos/alaire1.jpeg'
import ENRIQUETOMAS from '../../graphics/imagenes/logos/enriquetomas1.jpeg'
import MONTENEVADO from '../../graphics/imagenes/logos/montenevado1.jpeg'
import CAPANEGRA from  '../../graphics/imagenes/logos/capanegra1.png'


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


const CarrouselImp = () => {

  return (
    <>
    
    <div>
        <OwlCarousel className='owl-theme' {...options}>
            <div className='item'>
                <ImageCarrousel image={CINCOJ}/>
            </div>
            <div className='item '>
                <ImageCarrousel image={CAPANEGRA}/>
            </div>
            <div className='item '>
                <ImageCarrousel image={ENRIQUETOMAS}/>
            </div>
            <div className='item '>
                <ImageCarrousel image={MONTENEVADO}/>
            </div>
            <div className='item '>
                <ImageCarrousel image={ALAIRE}/>
            </div>
        </OwlCarousel>
    </div>
    </>
    
  )
}

export default  CarrouselImp;