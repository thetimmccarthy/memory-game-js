import React, { useEffect, useState} from 'react';

import Card from './Card';
import Score from './Score';

function AllCards () {
    // const [cards, setCards] = useState([]);

    const [score, setScore] = useState(0);
    const [level, setLevel] = useState(4)
    const [choices, setChoices] = useState(new Set())
    const [chosen, setChosen] = useState(new Set())
    const [cards, setCards] = useState([])
    const [countries, setCountries] = useState()
    


    // const countries = [{country: 'USA', code: 'us'}, {country: 'England', code: 'gb'}, {country: 'Canada', code: 'ca'}];

    const url = 'https://flagcdn.com/en/codes.json'
    useEffect(async () => {             
        const response = await fetch(url);
        let found_countries = await response.json();
        setCountries(found_countries);
        let c = new Set(Object.keys(found_countries))
        setChoices(c);
        console.log('Choices: ', c)
        determineFlags()
    }, [])



    // useEffect(() => {
    //     determineFlags()
    // }, [])

    const updateScore = (code) => {  
        if (chosen.has(code)) {            
            resetScore()
        } else {
            chosen.add(code);
            setChosen(chosen);
            if (score + 1 === level) {
                setLevel(level * 2);
                let c = new Set(Object.keys(countries))
                setChoices(c);
                determineFlags();
                
                setScore(score + 1);
            } else {
                setScore(score + 1);
            }
            
        }
    }

    const resetScore = () => {        
        setChosen(new Set());
        setLevel(4);
        setScore(0);
    }

    const determineFlags = () => {
        let i = 0;
        console.log(level)
        const cards_this_round = []
        // const keys = Object.keys(countries)
        const keys = [...choices]
        while (i < level) {
            
            const prop = keys[Math.floor(Math.random() * choices.size)]
            let card = {
                country: countries[prop],
                code: prop
            }
            choices.delete(prop)            
            cards_this_round.push(card)
            i += 1
        }
        setCards(cards_this_round);        
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