import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'

function IndividualCard (props) {
    
    // Will convert this to bootstrap card

    const updateCardScore = (event) => {
        let code = props.code
        event.preventDefault();
        props.updateScore(code);
    }


    return (
        <div className="card-container">
            {/* React-Bootstrap template for Card - TODO */}
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`https://flagcdn.com/112x84/${props.code}.png`} />
            <Card.Body>
                <Card.Title>{props.country_name}</Card.Title>
                
                {/* <Button onClick={updateCardScore}>Pick this flag!</Button> */}
                <form onSubmit={updateCardScore} >
                    <Button type="submit" > Pick this flag! </Button>
                </form>
            </Card.Body>
            </Card>
            
            
        </div>
    )
}

export default IndividualCard;

// old code for each 'card'
/* <img 
    src={`https://flagcdn.com/112x84/${props.code}.png`}
    srcSet={`https://flagcdn.com/224x168/${props.code}.png 2x`}
    width="112"
    height="84"
    alt={props.country_name} />
<h1>{props.country_name}</h1>
<form onSubmit={updateCardScore} >
    <input type="submit" value="Pick this flag!" />
</form> */