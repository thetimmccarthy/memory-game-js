import React, { useEffect, useState} from 'react';

import Card from './Card';
import Score from './Score';

function AllCards () {
    const [cards, setCards] = useState([]);

    const [score, setScore] = useState(0);

    const countries = [{country: 'USA', code: 'us'}, {country: 'England', code: 'gb'}, {country: 'Canada', code: 'ca'}];

    // need to parse codes.csv and get country codes, then we can begin randomly generating cards

    useEffect(() => {        
        setCards(countries);
    }, [])

    const updateScore = () => {
        setScore(score + 1);
    }

    const resetScore = () => {        
        setScore(0);
    }

    return (
        <div>
            <Score score={score}/>
            {cards.map((card) => {
                return <Card country_name={card.country} code={card.code} updateScore={updateScore} />                
            })}
        
            <br />
            <button onClick={resetScore}> Reset Score</button>
                
            
        </div>
    )
};

export default AllCards;