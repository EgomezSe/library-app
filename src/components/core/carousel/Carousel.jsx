import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import PropTypes from 'prop-types';
import './Carousel.scss'


const viewItems = (items) => {
    const carouselItems = []
    items.forEach((element, index) => {
        carouselItems.push(
            <Carousel.Item key={index}>
                <img
                    className="d-block w-100 image"
                    src={element.img}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>{element.title}</h3>
                    <p>{element.subtitle}</p>
                </Carousel.Caption>
            </Carousel.Item>
        )

    });
    return carouselItems;
}

const MyCarousel = ({ value }) => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <>
            <Carousel onSelect={handleSelect}>
                {viewItems(value)}
            </Carousel>
        </>
    );
};

MyCarousel.propTypes = {
    value: PropTypes.array.isRequired
}

export default MyCarousel;
