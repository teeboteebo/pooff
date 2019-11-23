import React, { useRef, useState, useEffect } from 'react';
import { Container } from 'reactstrap'
import { User, Mail, Phone } from "react-feather";
import UpdateAccount from '../../components/UpdateAccount';


const UpdateAccountPage = () => {
  const firstName = useRef()
  const lastName = useRef()
  const email = useRef()
  const phone = useRef()
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUser = async () => {
      const data = await fetch('/api/myuser')
      const user = await data.json()
      setUser(user)
    }
    getUser()
  }, [])
 
  const updateUser = async (e) => {
  e.preventDefault()
  let responseRaw = await fetch('/api/myuser', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      email: email.current.value,
      phone: phone.current.value
    })
  })
  let response = await responseRaw.json()
  console.log(response, 'vad är response');
}
let inputData = [
  {
    placeholder: user.firstName,
    type: 'text',
    ref: firstName,
    icon: <User className="main-icon" />
  },
  {
    placeholder: user.lastName,
    type: 'text',
    ref: lastName,
    icon: <User className="main-icon" />
  },
  {
    placeholder: user.email,
    type: 'email',
    ref: email,
    icon: <Mail className="main-icon" />
  },
  {
    placeholder: user.phone,
    type: 'text',
    class: 'phonenumber',
    ref: phone,
    icon: <Phone className="main-icon" />
  },
]
// console.log(inputData[user.placeholder])

return(
  <Container fluid={true} className="no-gutters update-account">
  <h2 className="page-title">Uppdatera konto</h2>
  <form onSubmit={(e) => updateUser(e)}>
        <UpdateAccount inputs={inputData} />
        <input className="primary-btn save-button mt-4" type="submit" value="Uppdatera" />
      </form>
  </Container>
)
}

export default UpdateAccountPage