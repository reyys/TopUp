import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import banner1 from '../assets/Banner 1.jpg'
import banner2 from '../assets/Banner 2.jpg'
import 'bootstrap/dist/css/bootstrap.css'

function Banner() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="Second slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default Banner