import {Button, Card, ListGroup} from 'react-bootstrap';

export function DriverItem({item, addOrRemoveFavorite}){
    return(
        //inspired from https://react-bootstrap.github.io/components/cards/
        <Card bg="dark" border="dark" style={{ width: 265, height: 'auto' }} text="white">
        <Card.Header className="name"><strong>{item.firstName} {item.lastName}</strong></Card.Header>
        <Card.Img variant="top" src={item.image} />
        <Card.Body>
            <ListGroup>
                <ListGroup.Item variant="dark"><strong>Team:</strong> {item.team}</ListGroup.Item>
                <ListGroup.Item variant="dark"><strong>Nationality:</strong> {item.nationality}</ListGroup.Item>
                {/* <ListGroup.Item variant="dark"><strong>Region:</strong> {item.region}</ListGroup.Item> */}
                <ListGroup.Item variant="dark"><strong>Races:</strong> {item.races}, <strong>Wins:</strong> {item.Wins}, <strong>Podiums:</strong> {item.podiums}, <strong>Points:</strong> {item.points}</ListGroup.Item>
                {/* <ListGroup.Item variant="dark"><strong>Races:</strong> {item.races}, <strong>Wins:</strong> {item.Wins}</ListGroup.Item>
                <ListGroup.Item variant="dark"><strong>Podiums:</strong> {item.podiums}, <strong>Points:</strong> {item.points}</ListGroup.Item> */}
            </ListGroup>
            {item.favorites ? <Button className="mt-1" onClick={() => addOrRemoveFavorite(item)} variant="danger">Remove From Favorites</Button> : <Button className="mt-1" onClick={() => addOrRemoveFavorite(item)} variant="primary">Add to Favorites</Button>}
        </Card.Body>
    </Card>
        
    );
}