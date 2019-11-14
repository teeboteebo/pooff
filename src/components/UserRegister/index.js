import React, { useState } from "react";
import { Eye, EyeOff, X, Check } from "react-feather";

const UserRegister = props => {
  const [peek, setPeek] = useState(false)
  const [match, setMatch] = useState(false)

  const checkIfMatch = (e) => {
    let firstPassword = document.querySelector('.new-password').value
    if (e.target.value === firstPassword) setMatch(true)
    else setMatch(false)
  }
  return (
    props.inputs.map((input, i) => {
      
      return (
        <div className="input-group" key={'input_' + i} onChange={input.class === 'repeat-password' ? checkIfMatch : null}>
          {input.icon}
          <input className={"input-field " + input.class} placeholder={input.name} type={input.class === 'new-password' ? (peek ? 'text' : 'password') : input.type} />
          {input.class === 'new-password' ? (peek ? <EyeOff className="peeker" onClick={() => setPeek(!peek)} /> : <Eye className="peeker" onClick={() => setPeek(!peek)} />) : null}
          {input.icon}
          {input.class === 'repeat-password' ? (match ? <Check className="checked green" /> : <X className="checked" /> ) : null}
        </div>
      )
    })
  )
};
export default UserRegister;
