import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ImageCarrCat from '../atoms/ImageCarrCat';


import TORGELON from '../../graphics/imagenes/varios/torgelonblancopromo.jpg'
import LOSCALVOS from '../../graphics/imagenes/varios/loscalvosblancopromo.jpg'
import ELARTESANO from '../../graphics/imagenes/varios/elartesanoblancopromo.jpg'
import TUDOR from '../../graphics/imagenes/varios/tudorblancopromo.jpg'





const options={
    margin: 10,
    responsiveClass: true,
    nav: false,
    dots: true,
    autoplay: false,
    smartSpeed: 500,
    responsive: {
        0: {
            items: 1,
           
        },
        600: {
            items: 2,
        },
        1000: {
            items: 1,
        }
    },
};

const CarrouselCat = () => {

    return (
      <>
      
      <div>
          <OwlCarousel className='owl-theme' {...options}>
              <div className='item'>
                  <ImageCarrCat image={TORGELON}/>
              </div>
              <div className='item'>
                  <ImageCarrCat image={LOSCALVOS}/>
              </div>
              <div className='item'>
                  <ImageCarrCat image={ELARTESANO}/>
              </div>
              <div className='item'>
                  <ImageCarrCat image={TUDOR}/>
              </div>
          </OwlCarousel>
      </div>
      </>
      
    )
  }
  
  export default  CarrouselCat