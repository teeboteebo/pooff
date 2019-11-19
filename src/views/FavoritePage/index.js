import React, {useState} from "react";
import { Container, Row, Col, Button } from "reactstrap";
import {ChevronRight} from 'react-feather';
import NewFavorite from "../../components/NewFavorite";



const FavoritePage = ()  =>{
    const [showText, setShowText] = useState(false);

        return (
           <Container>
               <Row>
                   <Col sm="12"  md={{ size: 6, offset: 3 }}>
                       <h1 className="text-center">Favoriter</h1>
                    </Col>
               </Row>
               <Row>
               <Col className="text-center" sm="12"  md={{ size: 6, offset: 3 }}>
                   <Button className="Favorite-user">
                   <h3>Larry skida</h3>
                   <p>+0707 0707 0707</p>
                   <ChevronRight/>
                   </Button>
               </Col>
               </Row>
               <Row className="button-field">
                    <Col className="text-center" sm="12" md={{ size: 6, offset: 3 }}>
                    <Button onClick={() => setShowText(!showText)}  type="submit" value="Submit" >Ny Favorit</Button>
                    {showText && <NewFavorite/>}
                    </Col>
                 </Row>  
           </Container>
        );
}

export default FavoritePage;