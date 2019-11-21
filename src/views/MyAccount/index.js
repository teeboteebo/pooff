import React, { useEffect, useState } from 'react'
import { User, Mail, Phone, Gift, Lock, Edit3, UserX } from "react-feather";
import { Container, Row, Col, Button } from 'reactstrap'

const MyAcccount = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUser = async () => {
      const data = await fetch('/api/myuser')
      const user = await data.json()
      console.log(user)
      setUser(user)
    }
    getUser()

  }, [])

  return (
    <Container className="my-account" fluid={true}>
      <h2 className="page-title">Mitt Konto</h2>
      <Row className="">
        <Col xs="12">
          <div className="">
            <ul className="list-item">
              <li>
                <User className="icon"></User>
                <span className="header mb-2">Namn: <p className="info">{user.firstName + ' ' + user.lastName}</p></span>
              </li>
              <li>
                <Mail className="icon"></Mail>
                <span className="header mb-4">E-post: <p className="info">{user.email}</p></span>
              </li>
              <li>
                <Phone className="icon"></Phone>
                <span className="header mb-4">Telefon: <p className="info">{user.phone}</p></span>
              </li>
              <li>
                <Gift className="icon"></Gift>
                <span className="header">Personnummer: <p className="info">{user.personId}</p></span>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
      <Row className="mt-4 no-gutters">
        <Col>
          <div>
            <Button className="edit">Uppdatera konto<Lock className="btn-icon"></Lock></Button>
            <Button className="edit">Ändra lösenord<Edit3 className="btn-icon"></Edit3></Button>
            <Button className="edit">Inaktivera konto<UserX className="btn-icon"></UserX></Button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
export default MyAcccount