import React from 'react'
import Slider from "react-slick";
import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.jpg';
import slide3 from '../assets/slide3.jpg';
import FragranceList from '../components/FragranceList';

const Fragrances = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1800,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        fade: true,
        accessibility: true,
        pauseOnHover: false,
    
    };

    const sliderItems = [
        {
            bgImg: slide2,
            heading: "Scented Candles",
            btnText: "Order Now",
        },
        {
            bgImg: slide1,
            heading: "Assorted Perfumes",
            btnText: "Order Now",
        },
        {
            bgImg: slide3,
            heading: "Aromatic haven",
            btnText: "Order Now",
        },
    ];
  return (
    <>
    <div className='slider-wrapper'>
        <Slider {... settings}>
            {sliderItems.map((item, index) => (
                <div key={index}>
                    <div 
                    className='h-[60vh] xl:h-[70vh] bg-center bg-cover'
                    style={{ backgroundImage: `url(${item.bgImg})`}}>
                        <div className="slide-content bg-black/75 h-[50vh] xl:h-[70vh] w-full text-white flex flex-col items-start justify-center px-8 pt-12">
                            <h3 className='font-bold text-3xl mb-4'>{item.heading}</h3>
                            <button className='bg-transparent border border-amber-500 hover:bg-amber-600 px-4 py-2 rounded-full'>{item.btnText}</button>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    </div>
    <FragranceList/>
    </>
  );
};

export default Fragrances