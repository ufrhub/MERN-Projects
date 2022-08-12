import React, { useState } from 'react';
import { Images } from './Images';
import '../Carousel/Carousel.css';

function ImageSlider({ slides }) {

    const [initial, setInitial] = useState(0);
    const length = slides.length;

    const nextImage = () => {
        setInitial(initial === length - 1 ? 0 : initial + 1);
    };


    const previousImage = () => {
        setInitial(initial === 0 ? length - 1 : initial - 1);
    };
    console.log(initial);

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }


    return (
        <div className="ImageSlider">

            <section className="slider">
                <i className="fas fa-angle-left" onClick={previousImage}></i>
                {
                    Images.map((slide, index) => {
                        return (
                            <div className={index === initial ? "slide active" : "slide"} key={index}>
                                {index === initial && (<img src={slide.image} alt="BloodBank" className='image' />)}
                            </div>
                        )
                    })
                }
                <i className="fas fa-angle-right" onClick={nextImage}></i>
            </section>

        </div>
    );

};

export default ImageSlider;
