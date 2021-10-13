import React, { useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';

import IndividualCard from './IndividualCard';
import Score from './Score';

function AllCards () {
    // const [cards, setCards] = useState([]);

    const [score, setScore] = useState(0);
    const [level, setLevel] = useState(4)
    const [chosen, setChosen] = useState(new Set())
    const [cards, setCards] = useState([])
    const [countries, setCountries] = useState({})    

    const url = 'https://flagcdn.com/en/codes.json'

    useEffect(() => {         
        async function fetchData(your_url) {
            const response = await fetch(your_url);
            let data = await response.json();            
            setCountries(data);            
        }
        fetchData(url);
    
    },[]);

    /* Should only run once (when countries is set), since countries should only be set once */
    useEffect(() => {
        determineFlags();        
    }, [countries])

    /* Should call determine flags every time the 'Level' changes
    'Level' determines how many cards to display, so this is called when leveling up or restarting (i.e. level set to original) */
    useEffect(() => {    
        determineFlags();
    }, [level])
    
    const updateScore = (code) => {  
        
        if (chosen.has(code)) {            
            resetScore()
        } else {
            chosen.add(code);
            setChosen(chosen);            
            if (score + 1 === level) {
                setScore(score + 1);
                setLevel(level + 4);                
            } else {
               setScore(score + 1);
            }
            determineFlags()
        }

    }


    const resetScore = () => {        
        console.log('update chosen');
        setChosen(new Set());
        console.log('update level');
        setLevel(4);
        console.log('update score')
        setScore(0);
        console.log('pick flags')
        determineFlags()
    }

    const determineFlags = () => {
        console.log(level)
        let i = 0;                
        const cards_this_round = new Set() 
        const cards_array = []       
        let card;
        let prop;
        while (i < level) {            
            do {
                let keys = Object.keys(countries);
                prop = keys[Math.floor(Math.random() * keys.length)]
                card = {
                    country: countries[prop],
                    code: prop
                }                
            } while(!cards_this_round.has(prop));                        
            cards_this_round.add(prop);                
            cards_array.push(card)
            i += 1
        }
        
        setCards(cards_array);        
    }

    const cardItems = cards.map((card) => {
        return <IndividualCard key={card.code} country_name={card.country} code={card.code} updateScore={updateScore} />                
    });

    return (
        <div >            
            <Score score={score}/>            
            <div class="container" >
            {/* <div> */}
                {cardItems}            
            </div>
            <br />        
            <div className="button-container"> 
                <Button onClick={resetScore}> Reset Score</Button>
            </div>
            
        </div>
        
    )
};
 
export default AllCards;

// Was in useEffect(() => {},[countries])
// const cards_this_round = new Set()            
        //     let keys = Object.keys(countries);
        //     for(let i = 0; i < 4; i++) {
        //         let prop = keys[Math.floor(Math.random() * keys.length)]
        //         let card = {
        //             country: countries[prop],
        //             code: prop
        //         }                
        //         cards_this_round.add(card); 
        //     }                                           
        //     let cards_array = Array.from(cards_this_round)
        //     setCards(cards_array);           