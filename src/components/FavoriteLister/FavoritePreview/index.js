import React from 'react';
import {
  Row,
  Col,
  Button
} from 'reactstrap';


const FavoritePreview = () => {
    // const favorite = this.props.favorite;
    return (
        <Row>
               <Col className="text-center" sm="12"  md={{ size: 6, offset: 3 }}>
                   <Button className="Favorite-user">
                    <h3>{favorite.nameFavorite}</h3>
                   <p>{favorite.phoneFavorite}</p>
                   </Button>
               </Col>
        </Row>
    );
  }
export default FavoritePreview;
