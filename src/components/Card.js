function Card (props) {
    
    // Will convert this to bootstrap card

    return (
        <div>
            <h1>{`This is a picture of ${props.country_name}'s flag!`}</h1>
            <h4>{props.country_name}</h4>
        </div>
    )
}

export default Card;