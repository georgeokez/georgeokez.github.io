import {Images} from "./ImageProvider";

export const shuffleCard = (array) => {
    let currentIndex = array.length,  randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

export const shuffledCards = shuffleCard([...Images, ...Images]);
