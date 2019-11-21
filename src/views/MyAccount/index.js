import React, { useEffect, useState } from 'react'
import { User, Mail, Phone, Gift } from "react-feather";
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


  // let info =getUser()
  const button = [

  ]


  return (
    <Container className="my-account" fluid={true}>
      <h2 className="page-title">Mitt Konto</h2>
      <Row className="">
        <Col xs="12">
          <div >
            <div className="">
              <p className="name mb-2"><User className="icon"></User>{user.firstName + ' ' + user.lastName}</p>
              <p className="email mb-4"><Mail className="icon"></Mail>{user.email}</p>
              <p className="phone mb-4"><Phone className="icon"></Phone>{user.phone}</p>
              <p className="social-no"><Gift className="icon"></Gift>{user.personId}</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button className="update">Uppdatera konto</Button>
          <Button className="update">Ändra lösenord</Button>
          <Button className="update">Inaktivera konto</Button>
        </Col>
      </Row>
    </Container>
  )
}
export default MyAcccount