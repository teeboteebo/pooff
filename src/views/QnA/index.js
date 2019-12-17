import React, { useState, useEffect } from 'react'
import { Container } from 'reactstrap'
import { Link } from 'react-router-dom'

import FAQ from '../../components/FAQ'

const QuestionAndAnswers = () => {
  const [qnas, setQnas] = useState([])
  useEffect(() => {
    const fetchQnas = async () => {
      let qnasRaw = await fetch('/api/qnas/')
      let qnas = await qnasRaw.json()
      setQnas(qnas)
    }
    fetchQnas()
  }, []);
  return (
    <Container fluid={true}>
      <h2 className="page-title">Frågor och svar</h2>

      {qnas.map((qna, i) => {
        return <FAQ data={qna} key={"qna_" + i} />
      })}
      <Link to="/">
        <input className="primary-btn save-button mt-4" type="submit" value="Tillbaka" />
      </Link>
    </Container>
  )
}
export default QuestionAndAnswers