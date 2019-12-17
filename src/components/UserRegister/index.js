import React, { useState } from "react";
import { Eye, EyeOff, X, Check } from "react-feather";

const UserRegister = props => {
  const [peek, setPeek] = useState(false)
  const [match, setMatch] = useState(false)


  const checkIfMatch = e => {
    let firstPassword = document.querySelector('.new-password').value
    if (e.target.value === firstPassword) setMatch(true)
    else setMatch(false)
  }

  const inputChange = e => {

    let newVals = {
      ...props.inputValues
    }
    newVals[e.target.id] = e.target.value || '';
    props.setInputValues(newVals);
    props.validate && props.validate(newVals);
  }

  if (props.inputs) {
    return (
      props.inputs.map((input, i) => {
        return (
          <div className="input-group" key={'input_' + i} onChange={input.class === 'repeat-password' ? checkIfMatch : null}>
            {input.icon}
            <input id={input.id}
              autoComplete={input.autoComplete}
              onChange={inputChange}
              className={"input-register " + input.class}
              placeholder={input.name}
              type={input.class === 'new-password' ? (peek ? 'text' : 'password') : input.type}
              value={input.value ? input.value : props.inputValues[input.id] || ''}
              readOnly={input.readOnly ? input.readOnly : false}
            />
            {props.inputValues[input.id] === undefined || props.validation[input.id] ? '' : <p className="error-text">{input.error}</p>}
            {input.class === 'new-password' ? (peek ? <EyeOff className="peeker" onClick={() => setPeek(!peek)} /> : <Eye className="peeker" onClick={() => setPeek(!peek)} />) : null}
            {input.icon}
            {input.class === 'repeat-password' ? (match ? <Check className="checked green" /> : <X className="checked" />) : null}
          </div>
        )
      })
    )
  }

  return (
    <div></div>
  )
  
};
export default UserRegister;
