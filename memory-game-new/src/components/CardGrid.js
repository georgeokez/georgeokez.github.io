import React, {useState} from 'react';
import Card from './Card';
import cover from '../assets/img/cover.png';
import {shuffledCards} from './CardUtil';

import './CardGrid.css';

const CardGrid = () => {

    const [selectedCard, setSelectedCard] = useState(-1);
    const [card0, setCard0] = useState(false);
    const [card1, setCard1] = useState(false);
    const [card2, setCard2] = useState(false);
    const [card3, setCard3] = useState(false);
    const [card4, setCard4] = useState(false);
    const [card5, setCard5] = useState(false);
    const [card6, setCard6] = useState(false);
    const [card7, setCard7] = useState(false);
    const [card8, setCard8] = useState(false);
    const [card9, setCard9] = useState(false);
    const [card10, setCard10] = useState(false);
    const [card11, setCard11] = useState(false);

    const[guessCount, setGuessCount] = useState(0);

    const cardsArray = [card0, card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card11];

    const handleCardClick = (cardIndex) => {
        if (selectedCard !== -1) {
            if (shuffledCards[cardIndex] === shuffledCards[selectedCard]
                && cardIndex !== selectedCard
            ) {
                setGuessCount( guessCount + 1);
                setSelectedCard(-1);
                return;
            }

            setTimeout(() => {
                flipCards(selectedCard,cardIndex);
            }, 1000);
            setGuessCount( guessCount + 1);
            setSelectedCard(-1);
            return;
        }

        setSelectedCard(cardIndex);
    }

    const flipCards = (selectedCard,cardIndex) => {
        [selectedCard, cardIndex].forEach(
            index => {
                switch (index) {
                    case 0:
                        setCard0(!card0);
                        break;
                    case 1:
                        setCard1(!card1);
                        break;
                    case 2:
                        setCard2(!card2);
                        break;
                    case 3:
                        setCard3(!card3);
                        break;
                    case 4:
                        setCard4(!card4);
                        break;
                    case 5:
                        setCard5(!card5);
                        break;
                    case 6:
                        setCard6(!card6);
                        break;
                    case 7:
                        setCard7(!card7);
                        break;
                    case 8:
                        setCard8(!card8);
                        break;
                    case 9:
                        setCard9(!card9);
                        break;
                    case 10:
                        setCard10(!card10);
                        break;
                    case 11:
                        setCard11(!card11);
                        break;
                    default: console.log('Unknown Index');
                }
            }
        );
    }

    return(
        <div className="card-grid">
            <div className="row">
                {shuffledCards.map((image, index) => (
                    <Card
                        key={index}
                        index={index}
                        handleCardClick={handleCardClick}
                        flipCard={cardsArray[index]}
                        backImage={image}
                        frontImage={cover} />
                ))}
            </div>
            <p>Guess Count: {guessCount}</p>
        </div>
    );
};

export default CardGrid;