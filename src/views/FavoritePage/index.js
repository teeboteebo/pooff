import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { X } from "react-feather";
import NewFavorite from "../../components/NewFavorite";

import { usePooff } from '../../context'
import useMagic from '../../actions/useMagic'

const FavoritePage = () => {
  const state = usePooff()
  const [getLoggedIn] = useMagic()
  /* const [userFavorites, setUserFavorites] = useState(""); */

  const removeFavorite = async phone => {
    await fetch(`/api/myuser/favorites/${phone}`, {
      method: "DELETE"
    });

    getLoggedIn()
    // setUserFavorites(newFavorites);
  };

  const { favorites } = state.loggedIn

  return (
    <Container className="favorites-container">
      <h2 className="page-title">Favoriter</h2>
      <Row className="no-gutters">
        {favorites
          ? favorites.map((favorite, i) => {
              return (
                <Col xs="12" className="mb-3 bg-test" key={"favorite_" + i}>
                  <Row className="no-gutters">
                    <Col xs="7" md="10">
                      <p className="nickname">{favorite.nickname}</p>
                      <p className="phonenr">{favorite.phone}</p>
                    </Col>
                    <Col xs="5" md="2">
                      <Button
                        className="remove-btn"
                        onClick={() => removeFavorite(favorite.phone)}
                      >
                        Ta bort <X/>
                      </Button>
                    </Col>
                  </Row>
                </Col>
              );
            })
          : ""}
      </Row>

      <Row className="button-field no-gutters">
        <Col className="text-center mt-4">
          <NewFavorite />
        </Col>
      </Row>
    </Container>
  );
};

export default FavoritePage;
