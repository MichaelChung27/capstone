import '../App.css';
import {Card, ListGroup} from 'react-bootstrap';
import {AiFillStar, AiOutlineStar} from 'react-icons/ai';

export function DriverItem({item, addOrRemoveFavorite}){
    return(
        <Card bg="dark" border="dark" style={{ width: 265, height: 'auto' }} text="white">
        <Card.Header className="name"><strong>{item.firstName} {item.lastName}</strong></Card.Header>
        <button className='favorites' onClick={() => addOrRemoveFavorite(item)}>{item.favorites ? <AiFillStar/> : <AiOutlineStar/>}</button>
        <Card.Img variant="top" src={item.image} />
        <Card.Body>
            <ListGroup>
                <ListGroup.Item variant="dark"><strong>Team(s):</strong> {item.team}</ListGroup.Item>
                <ListGroup.Item variant="dark"><strong>Nationality:</strong> {item.nationality}</ListGroup.Item>
                <ListGroup.Item variant="dark"><strong>Races:</strong> {item.races}, <strong>Wins:</strong> {item.Wins}, <strong>Podiums:</strong> {item.podiums}, <strong>Points:</strong> {item.points}</ListGroup.Item>
            </ListGroup>
        </Card.Body>
    </Card>
        
    );
}