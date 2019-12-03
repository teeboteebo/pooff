import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'reactstrap'

const PooffStartPage = () => {

  return (
    <Container fluid={true} className="text-center">
      <img className="pooff-start-logo img-fluid mb-4" src="/images/logos/pooff-dark.png" alt="a big and beautiful owl with big eyes" />
      <div>
        <Link to="/logga-in">
          <input className="primary-btn save-button mt-4" type="submit" value="Logga in" />
        </Link>
        <Link to="/registrera">
          <input className="secondary-btn save-button mt-4" type="submit" value="Skapa konto" />
        </Link>
        <div className="pooff-start-page-link mt-4">
          <Link className="link-to-qna" to="/vanliga-fragor">Frågor och svar</Link>
        </div>
      </div>
    </Container>
  )
}
export default PooffStartPage