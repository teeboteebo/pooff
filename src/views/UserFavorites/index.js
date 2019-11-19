import React from 'react';
import { Container, Row, Col, Button } from "reactstrap";


const Favorite = ()  =>{
        return (
           <Container>
               <Row>
                   <Col sm="12"  md={{ size: 6, offset: 3 }}>
                       <h1 className="text-center">Favoriter</h1>
                    </Col>
               </Row>
               <Row>
               <Col className="text-center" sm="12"  md={{ size: 6, offset: 3 }}>
                   <Button onClick={() => alert('hello')} className="Favorite-user">
                   <h3>Larry skida</h3>
                   <p>+0707 0707 0707</p>
                   </Button>
               </Col>
               </Row>
               <Row className="button-field">
                    <Col className="text-center" sm="12" md={{ size: 6, offset: 3 }}>
                    <Button className="newFavorite" type="submit" value="Submit" >Ny Favorit</Button>
                    </Col>
                 </Row>

                 

                            
           </Container>
        );
}

export default Favorite;