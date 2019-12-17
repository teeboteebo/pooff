import React, { useState } from 'react'
import { X } from 'react-feather'
import { Container } from 'reactstrap'
import useMagic from '../../actions/useMagic'

const TopUp = (props) => {
  const [getLoggedIn] = useMagic()
  const [amount, setAmount] = useState('')
  const [formattedAmount, setFormattedAmount] = useState('')
  const [focus, setFocus] = useState(false)
  const [source, setSource] = useState('')
  /* const [isEditing, setIsEditing] = useState(false) */

  /* const onAmountChange = e => {
    let val = e.target.value.replace(/,/g,'.').replace(/\s/g,'');
    console.log(val);
    if(Math.round(val * 100) !== val * 100 || val > 999999999999999){
      // more than two decimals or really large - no good
      return;
    }
    setAmount(val.replace(/\./g,','));
  } */


  const toCurrency = number => {
    if (!number) return

    const formatter = new Intl.NumberFormat('sv-SE', {
      style: 'currency',
      currency: 'SEK'
    });

    return formatter.format(number);
  }

  const onAmountFocus = () => {
    setFocus(true)
  }

  const onAmountBlur = () => {
    if (!amount) {
      setFormattedAmount('')
      return
    }
    const format = amount.replace(',', '.')
    setFormattedAmount(toCurrency(format))
    setFocus(false)
  }

  const onAmountChange = e => {
    const val = e.target.value.replace('.', ',')
    const valid = /^\d*$|^\d+,\d{0,2}$/
    if (!valid.test(val) || val > 9999999999999) { return }
    setAmount(val)
  }

  const postTopUp = async (e) => {
    e.preventDefault()
    const formatted = amount.replace(',', '.')
    let messageRaw = await fetch('/api/mytransactions/topup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: formatted,
        sender: source
      })
    })
    let message = await messageRaw.json()
    if (message === 'Success') {
      setAmount('')
      setFormattedAmount('')
      setSource('')
      props.clickHandler()
      getLoggedIn()
    }
  }
  return (
    <Container
      fluid={true}
      className={props.toggle ? "top-up-container open" : "top-up-container"}
    >
      <h2 className="page-title">Fyll på pengar</h2>
      <button className="close-btn" onClick={props.clickHandler}><X size="18" /></button>
      <form onSubmit={postTopUp}>
        {/* {isEditing ?
          <input
            name="amount"
            type="text"
            inputMode="numeric"
            max="999999999999999"
            placeholder="Belopp i SEK"
            className="input-field top-up-amount"
            onChange={onAmountChange}
            onBlur={() => setIsEditing(!isEditing)}
            value={amount ? amount: ''}
          />
          :
          <input
            name="amount"
            type="text"
            placeholder="Belopp i SEK"
            className="input-field top-up-amount"
            onFocus={() => setIsEditing(!isEditing)}
            value={toCurrency(amount + '')}
            readOnly
          />
        } */}
        <input
          name="amount"
          type="text"
          inputMode="numeric"
          placeholder="Belopp i SEK"
          className="input-field top-up-amount"
          onFocus={onAmountFocus}
          onBlur={onAmountBlur}
          onChange={onAmountChange}
          value={focus ? amount : formattedAmount}
          required
        />
        <select
          className="input-field top-up-source"
          onChange={(e) => setSource(e.target.value)}
          value={source}
          required>
          <option value="">Välj konto...</option>
          <option value="0739999999">Pooff Bank</option>
        </select>
        <input type="submit" value="Bekräfta" className="submit-btn" />
      </form>
    </Container>
  )
}
export default TopUp