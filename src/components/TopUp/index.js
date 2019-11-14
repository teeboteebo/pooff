import React, { useState } from 'react'
import { X } from 'react-feather'
import { Container } from 'reactstrap'

const TopUp = (props) => {
  const [amount, setAmount] = useState(0)
  const [source, setSource] = useState(undefined)
  const postTopUp = async (e) => {
    e.preventDefault()
    console.log(source, amount);
    
    // await fetch('/api/my', {
    //   method: 'post',
    //   body: {
    //     amount,
    //     source
    //   }
    // })
  }
  return (
    <Container
      fluid={true}
      className={props.toggle ? "top-up-container open" : "top-up-container"}
    >
      <h2 className="page-title">Fyll på pengar</h2>
      <button className="close-btn" onClick={props.clickHandler}><X size="34" /></button>
      <form onSubmit={postTopUp}>
        <input
          name="amount"
          type="number"
          placeholder="Belopp i SEK"
          className="input-field top-up-amount"
          onChange={(e) => setAmount(e.target.value)}
          required />
        <select
          className="input-field top-up-source"
          onChange={(e) => setSource(e.target.value)}
          required>
          <option>Välj konto...</option>
          <option>Pooff Bank</option>
        </select>
        <input type="submit" value="Bekräfta" className="submit-btn" />
      </form>
    </Container>
  )
}
export default TopUp