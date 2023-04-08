import { useState } from "react";

const images = [
    {
        id: 1,
        source: require('./assets/1633103130_11-phonoteka-org-p-fon-belii-mramor-v-khoroshem-kachestve-kra-13.jpeg'),
    },
    {
        id: 2,
        source: require('./assets/Ford-Mustang-GT-Supercar-1.jpeg'),
    },
    {
        id: 3,
        source: require('./assets/food-12.jpg'),
    },
    {
        id: 4,
        source: require('./assets/pepper.jpg'),
    },
    {
        id: 5,
        source: require('./assets/olive-oil.jpg'),
    },
    {
        id: 6,
        source: require('./assets/olive-oil.jpg'),
    },
];

function Slider() {
    const [index, setIndex] = useState(0);

    const handlePrev = () => {
        setIndex((index - 1 + images.length) % images.length);
    };

    const handleNext = () => {
        setIndex((index + 1) % images.length);
    };

    const currentImage = images[index];

    return (
        <div className = 'center'>
            <button onClick={handlePrev}> - </button>
            <img src={currentImage.source} alt={currentImage.title} />
            <button onClick={handleNext}> + </button>
        </div>
    );
}

export default Slider;