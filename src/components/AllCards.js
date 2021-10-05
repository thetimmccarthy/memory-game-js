import React, { useEffect, useState} from 'react';

import Card from './Card';

function AllCards () {
    const [cards, setCards] = useState([]);

    const countries = ['USA', 'England', 'Canada'];

    useEffect(() => {
        console.log('setting countries')
        setCards(countries);
    }, [])

    return (
        <div>
            {cards.map((card) => {
                return <Card country_name={card} />                
            })}
        </div>
    )
};

export default AllCards;