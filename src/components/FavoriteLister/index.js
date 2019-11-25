import React, {useState} from "react";
import { Container, Row, Col, Button } from "reactstrap";

import  FavoritePreview from './FavoritePreview';
 

const FavoriteLister = props => {
    return (
      <Container>
        {props.favorites.map((SendFavorite, i) => {
          return (
            <Col className='list-item mb-5 mb-md-3' key={'favorite' + i}>
              <FavoritePreview SendFavorite={SendFavorite} />
            </Col>
          );
        })}
      </Container>
    );
}
export default FavoriteLister;