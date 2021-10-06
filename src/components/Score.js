import React, { useEffect, useState} from 'react';

function Score(props) {
    const [highScore, setHighScore] = useState(0);

    // probly need to useEffect to update high score
    useEffect(() =>{
        if (props.score > highScore) {
            setHighScore(props.score);
        }
    })

    return (
        <div>
            <h3>
                Current Score: {props.score}
            </h3>
            <h3>
                High Score: {highScore}
            </h3>
        </div>
    )
}

export default Score;