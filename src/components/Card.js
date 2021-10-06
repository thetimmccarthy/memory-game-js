function Card (props) {
    
    // Will convert this to bootstrap card

    const updateCardScore = (event) => {
        event.preventDefault();
        props.updateScore();
    }


    return (
        <div>
            <img
                src={`https://flagcdn.com/112x84/${props.code}.png`}
                srcset={`https://flagcdn.com/224x168/${props.code}.png 2x`}
                width="112"
                height="84"
                alt={props.country_name} />
            <h1>{`This is a picture of ${props.country_name}'s flag!`}</h1>
            <form onSubmit={updateCardScore} >
                <input type="submit" value="increase score" />
            </form>
            
        </div>
    )
}

export default Card;