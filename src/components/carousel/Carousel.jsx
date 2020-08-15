import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import './Carousel.css';

const useStyles = makeStyles({
    root: {
        "&:hover": {
            backgroundColor: "transparent"
        }
    }
});
const carouselImages = [
    'https://movinova.blob.core.windows.net/900845084/image_login3.png',
    'https://movinova.blob.core.windows.net/900845084/image_login2.jpg'
]
const Carousel = (props) => {
    const [imageIndex, setImageIndex] = useState(0);
    const handleCarouselAction = (forward) => {
        const maxSlices = carouselImages.length-1;
        if (forward) {
            imageIndex+1 > maxSlices ? setImageIndex(0) : setImageIndex(imageIndex+1);
        } else {
            imageIndex-1 < 0 ? setImageIndex(maxSlices) : setImageIndex(imageIndex-1);
        }
    }

    const classes = useStyles();
    return (
        <div className="carousel">
            <div className="options-container">
                <div className="backward-container">
                    <IconButton className={`backward-option ${classes.root}`} onClick={()=>handleCarouselAction(false)} disableRipple={true}>
                        <ArrowBackIosIcon/>
                    </IconButton>
                </div>
                <div className="forward-container">
                    <IconButton className={`backward-option ${classes.root}`} onClick={()=>handleCarouselAction(true)} disableRipple={true}>
                        <ArrowForwardIosIcon/>
                    </IconButton>
                </div>
            </div>
            
            {carouselImages.map((image, index) => (
                <div key={`image-container-${index}`} className={imageIndex === index ? 'active':'inactive'}>
                    <img src={image} alt={`carousel-${index}`}/>
                </div>
            ))}
            
            
        </div>
    );
}

export default Carousel;
