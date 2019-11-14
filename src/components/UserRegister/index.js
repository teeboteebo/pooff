import React, { useState } from "react";
import { Eye, EyeOff, Check } from "react-feather";

const UserRegister = props => {
  const [peek, setPeek] = useState(false)
  const [match, setMatch] = useState(false)


  return (
    props.inputs.map((input, i) => {
      return (
        <div className="input-group" key={'input_' + i}>
          {input.icon}
          <input className="input-field" placeholder={input.name} type={input.class === 'new-password' ? (peek ? 'text' : 'password') : input.type} />
          {input.class === 'new-password' ? (peek ? <EyeOff className="peeker" onClick={() => setPeek(!peek)} /> : <Eye className="peeker" onClick={() => setPeek(!peek)} />) : null}
          {input.icon}
          {input.class === 'repeat-password' ? (match ? <Check className="matcher" onKeyUp={() => setMatch(!match)} /> : <Check className="matcher" onKeyUp={() => setMatch(!match)} />) : null}
        </div>
      )
    })
  )
};
export default UserRegister;
