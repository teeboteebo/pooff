import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { X } from 'react-feather';
import NewFavorite from "../../components/NewFavorite";



const FavoritePage = () => {
  const [userFavorites, setUserFavorites] = useState('')

  const removeFavorite = async (phone) => {
    let favoritesAfterDelete = await fetch(`/api/myuser/favorites/${phone}`, { method: 'DELETE' })
    let newFavorites = await favoritesAfterDelete.json()
    setUserFavorites(newFavorites)
  }
  const getAllUserFavorites = async () => {
    const allFavoritesRaw = await fetch('/api/myuser/favorites')
    const allFavorites = await allFavoritesRaw.json()
    if (allFavorites && allFavorites !== userFavorites) setUserFavorites(allFavorites)
  }
  useEffect(() => {
    getAllUserFavorites()
  }, [])

  return (
    <Container>

      <h2 className="page-title">Favoriter</h2>
      <Row className="no-gutters">
        {userFavorites ? userFavorites.map((favorite, i) => {
          return (
            <Col xs="12" className="mb-3 bg-primary" key={"favorite_" + i}>
              <p>{favorite.nickname}</p>
              <p>{favorite.phone}</p>
              <Button className="remove-btn" onClick={() => removeFavorite(favorite.phone)}>Ta bort <X /></Button>
            </Col>
          )
        }) : ''}
      </Row>


      <Row className="button-field">
        <Col className="text-center" sm="12" md={{ size: 6, offset: 3 }}>
          <NewFavorite updateFavorites={getAllUserFavorites} />
        </Col>
      </Row>
    </Container>
  )
}

export default FavoritePage;