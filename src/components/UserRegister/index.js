import React, { useState } from "react";
import { Container } from "reactstrap";
import { User, Mail, Phone, Lock, Eye, EyeOff } from "react-feather";

const UserRegister = () => {
  const [peek, setPeek] = useState(false)
  let inputData = [
    {
      name: 'Förnamn',
      type: 'text',
      icon: <User className="main-icon" />
    },
    {
      name: 'Efternamn',
      type: 'text',
      icon: <User className="main-icon" />
    },
    {
      name: 'Personnummer',
      type: 'text',
      icon: <User className="main-icon" />
    },
    {
      name: 'Användarnamn',
      type: 'text',
      icon: <User className="main-icon" />
    },
    {
      name: 'E-post',
      type: 'email',
      icon: <Mail className="main-icon" />,
    },
    {
      name: 'Telefonnummer',
      type: 'text',
      class: 'phonenumber',
      icon: <Phone className="main-icon" />
    },
    {
      name: 'Lösenord',
      type: 'password',
      class: 'new-password',
      icon: <Lock className="main-icon" />
    },
    {
      name: 'Bekräfta lösenord',
      type: 'password',
      class: 'repeat-password',
      icon: <Lock className="main-icon" />,
    }

  ]
  let inputs = inputData.map((input, i) => {
    return (
      <div class="input-group" key={'input_' + i}>
        {input.icon}
        <input className="input-field" placeholder={input.name} type={input.class === 'new-password' ? (peek ? 'text' : 'password') : input.type} />
        {input.class === 'new-password' ? (peek ? <EyeOff className="peeker" onClick={() => setPeek(!peek)} /> : <Eye className="peeker" onClick={() => setPeek(!peek)} />) : null}
      </div>
    )
  })
  return (


    <Container fluid="true">
      <h2>Registrera Användare</h2>
      <p>Ange personuppgifter</p>
      {inputs}
      {/* <div className="icon-style">
        <User />
        <Input placeholder="Efternamn" />
      </div>
      <div className="icon-style">
        <User />
        <Input placeholder="Personnummer" />
      </div>
      <div className="icon-style">
        <User />
        <Input placeholder="Användarnamn" />
      </div>
      <div className="icon-style">
        <Mail />
        <Input placeholder="E-post" />
      </div>
      <div className="icon-style">

        <Input placeholder="Telefonnummer" />
      </div>
      <div className="icon-style">
        <Input placeholder="Lösenord" />
      </div>
      <div className="icon-style">
        <Input placeholder="Bekräfta lösenord" />
      </div> */}
    </Container>
  );
};
export default UserRegister;
