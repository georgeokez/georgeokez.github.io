import React, {useEffect, useState} from 'react';

import './Card.css';

const Card = ({index, handleCardClick, flipCard, frontImage, backImage}) => {
    const [className, setClassName] = useState('flip-card-inner');

    useEffect(() => {
        setClassName('flip-card-inner flip-front');
    }, [flipCard, backImage]);

    const handleClick = () => {
        setClassName('flip-card-inner flip-back');
        handleCardClick(index);
    };

    return (
        <div className="flip-card">
            <div className={className}>
                <div className="flip-card-front" onClick={handleClick}>
                    <img src={frontImage} alt="Avatar" />
                </div>
                <div className="flip-card-back">
                    <img src={backImage} alt="Avatar" />
                </div>
            </div>
        </div>
    );
};

export default Card;