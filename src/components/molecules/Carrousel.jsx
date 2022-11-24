import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ImageCarrousel from '../atoms/ImageCarrousel';

import CINCOJ from '../../graphics/imagenes/productos/5j1.jpeg'
import FRIGORIFICO from '../../graphics/imagenes/productos/190frigorifico1.jpeg'
import DOSCATORCE from '../../graphics/imagenes/productos/214.jpeg'

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
    
    <div className='flex justify-center mt-5'>
        <h3 className='text-2xl font-bold text-fontSecondary'> Destacado </h3>
    </div>
    <div>
        <OwlCarousel className='bg-white owl-theme' {...options}>
            <div className='flex justify-center item '>
                <ImageCarrousel image={CINCOJ}/>
            </div>
            <div className='flex justify-center item '>
                <ImageCarrousel image={FRIGORIFICO}/>
            </div>
            <div className='flex justify-center item '>
                <ImageCarrousel image={DOSCATORCE}/>
            </div>
        </OwlCarousel>
    </div>
    </>
    
  )
}

export default Carrousel