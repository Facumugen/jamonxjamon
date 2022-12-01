import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ImageCarrousel from '../atoms/ImageCarrousel';

import FRIGORIFICO from '../../graphics/imagenes/logos/190frigorifico1.jpeg'
import DOSCATORCE from '../../graphics/imagenes/logos/doscatorce1.jpeg'
import CARDENAS from '../../graphics/imagenes/logos/cardenas1.jpeg'
import ELARTESANO from '../../graphics/imagenes/logos/elartesano1.jpeg'
import FOX from '../../graphics/imagenes/logos/fox1.jpeg'
import LAOCTAVA from '../../graphics/imagenes/logos/laoctava1.jpeg'
import LOMSICAR from '../../graphics/imagenes/logos/lomsicar1.jpeg'
import LOSCALVOS from '../../graphics/imagenes/logos/loscalvos1.jpeg'
import TORGELON from '../../graphics/imagenes/logos/torgelon1.jpeg'
import TUDOR from '../../graphics/imagenes/logos/tudor1.jpeg'
import VAES from '../../graphics/imagenes/logos/vaes1.jpeg'

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
            margin:10,
        },
        700: {
            items: 3,
            margin:10,
        },
        1000: {
            items: 4,
            margin:10,

        }
    },
};


const CarrouselNac = () => {

  return (
    <>
    
    <div>
        <OwlCarousel className='owl-theme' {...options}>
            <div className='item'>
                <ImageCarrousel image={TORGELON}/>
            </div>
            <div className='item '>
                <ImageCarrousel image={LOSCALVOS}/>
            </div>
            <div className='item '>
                <ImageCarrousel image={ELARTESANO}/>
            </div>
            <div className='item '>
                <ImageCarrousel image={TUDOR}/>
            </div>
            <div className='item '>
                <ImageCarrousel image={LAOCTAVA}/>
            </div>
            <div className='item '>
                <ImageCarrousel image={CARDENAS}/>
            </div>
            <div className='item '>
                <ImageCarrousel image={DOSCATORCE}/>
            </div>
            <div className='item '>
                <ImageCarrousel image={FOX}/>
            </div>
            <div className='item '>
                <ImageCarrousel image={FRIGORIFICO}/>
            </div>
            <div className='item '>
                <ImageCarrousel image={LOMSICAR}/>
            </div>
            <div className='item '>
                <ImageCarrousel image={VAES}/>
            </div>
        </OwlCarousel>
    </div>
    </>
    
  )
}

export default CarrouselNac