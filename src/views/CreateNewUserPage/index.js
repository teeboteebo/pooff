import React from "react"
import { Link } from "react-router-dom"
import { Container } from "reactstrap"
import UserRegister from "../../components/UserRegister"
import { User, Mail, Phone, Lock } from "react-feather"
import { useState, useEffect } from "react"

const CreateNewUserPage = () => {

  const [inputValues, setInputValues] = useState({});
  const [created, setCreated] = useState(false)
  const [validation, setValidation] = useState({
    firstName: false,
    lastName: false,
    personId: false,
    username: false,
    email: false,
    phone: false,
    password: false,
    passwordConfirm: false
  })
  const [users, setUsers] = useState()
  const [inputData, setInputData] = useState([
    {
      name: "Förnamn",
      id: "firstName",
      error: 'Förnamn måste innehålla minst 2 bokstäver',
      type: "text",
      // class: "first-name",
      icon: <User className="main-icon" />,
    },
    {
      name: "Efternamn",
      id: "lastName",
      error: 'Efternamn måste innehålla minst 2 bokstäver',
      type: "text",
      // class: "last-name",
      icon: <User className="main-icon" />,
    },
    {
      name: "Personnummer (ååmmddxxxx)",
      id: "personId",
      error: 'Personnummer skrivs ut med exakt 10 siffror',
      type: "text",
      // class: "person-id",
      icon: <User className="main-icon" />,
    },
    {
      name: "Användarnamn",
      id: "username",
      error: 'Användarnamn måste minst innehålla 6 tecken',
      type: "text",
      // class: "username",
      icon: <User className="main-icon" />,
    },
    {
      name: "E-post",
      id: "email",
      error: 'Vänligen ange giltig email',
      type: "email",
      // class: "email",
      icon: <Mail className="main-icon" />,
    },
    {
      name: "Telefonnummer",
      id: "phone",
      error: 'Vänligen ange mobilnummer',
      type: "text",
      // class: "phone-number",
      icon: <Phone className="main-icon" />,
    },
    {
      name: "Lösenord",
      id: "password",
      error: "Minst 8 tecken varav en versal & en siffra",
      type: "password",
      class: "new-password",
      icon: <Lock className="main-icon" />,
    },
    {
      name: "Bekräfta lösenord",
      id: "passwordConfirm",
      error: "Måste matcha med ovanståend valt lösenord",
      type: "password",
      class: "repeat-password",
      icon: <Lock className="main-icon" />,
    },
  ])
  // let visitors fetch info from backend so we can check
  // that they don´t use an excisting email, username or phone
  useEffect(() => {
    const getUsers = async () => {
      const usersFetch = await fetch('/api/register')
      const users = await usersFetch.json()
      setUsers(users)
    }

    getUsers()
  }, [])

  const validate = (vals) => {
    let { firstName, lastName, personId, username, email, phone, password, passwordConfirm } = vals || inputValues;
    const x = { ...validation }

    /****firstName Validation****/
    if (firstName !== undefined && !(/^[A-ZÅÄÖa-zåäö]{2}[A-ZÅÄÖa-zåäö -]*$/.test(firstName))) {
      x.firstName = false
    } else {
      x.firstName = true
    }
    /****lastName Validation****/
    if (lastName !== undefined && !(/^[A-ZÅÄÖa-zåäö]{2}[A-ZÅÄÖa-zåäö -]*$/.test(lastName))) {
      x.lastName = false
    } else {
      x.lastName = true
    }
    /****personId Validation****/
    if (personId !== undefined && !(/^\d{10}$/.test(personId))) {
      x.personId = false
    } else {
      x.personId = true
    }

    // TA BORT OM USERNAME INTE SKA ANVÄNDAS
    /****username Validation****/
    if (username !== undefined && username.length < 6) {
      x.username = false
    } else {
      x.username = true
    }
    /****Error switch between 2 different messages for username****/
    if (users.find(user => user.username === username)) {
      const inputObjs = [...inputData]
      inputObjs.find(input => input.id === 'username').error = 'Användaren finns redan, välj ett annat användarnamn'
      setInputData(inputObjs)
      x.username = false
    } else {
      const inputObjs = [...inputData]
      inputObjs.find(input => input.id === 'username').error = 'Användarnamn måste minst innehålla 6 tecken'
      setInputData(inputObjs)
    }
    /****email Validation****/
    if (email !== undefined && !(/\w\w+@\w\w+\.\w\w+/.test(email))) {
      x.email = false
    } else {
      x.email = true
    }
    /****Error switch between 2 different messages for email****/
    if (users.find(user => user.email === email)) {
      const inputObjs = [...inputData]
      inputObjs.find(input => input.id === 'email').error = 'Denna email finns redan registrerad'
      setInputData(inputObjs)
      x.email = false
    } else {
      const inputObjs = [...inputData]
      inputObjs.find(input => input.id === 'email').error = 'Var god ange giltigt email'
      setInputData(inputObjs)
    }
    /****Phone Validation****/
    if (phone !== undefined && !(/^0[7,4,1][0-9]{8}$/.test(phone))) {
      x.phone = false
    } else {
      x.phone = true
    }
    /****Error switch between 2 different messages for phone****/
    if (users.find(user => user.phone === phone)) {
      const inputObjs = [...inputData]
      inputObjs.find(input => input.id === 'phone').error = 'Detta telefonnummer finns redan registrerat'
      setInputData(inputObjs)
      x.phone = false
    } else {
      const inputObjs = [...inputData]
      inputObjs.find(input => input.id === 'phone').error = 'Ange nummer med 10 siffror'
      setInputData(inputObjs)
    }
    /****Password Validation****/
    // Regex: at least one capital letter, one digit and a minimum of 8 characters
    if (password !== undefined && !(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(password))) {
      x.password = false
    } else {
      x.password = true
    }
    /****confirmPassword Validation****/
    if (passwordConfirm !== undefined && passwordConfirm === password) {
      x.passwordConfirm = true
    } else {
      x.passwordConfirm = false
    }
    setValidation(x)
    if (x.firstName && x.lastName && x.personId && x.email && x.phone && x.password) {
      return true
    } else {
      return false
    }
  }

  const createNewUser = async (e) => {
    e.preventDefault()

    if (validate()) {
      await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(/*{
          firstName: firstName.current.value,
          lastName: lastName.current.value,
          personId: personId.current.value,
          username: username.current.value,
          email: email.current.value,
          phone: phone.current.value,
          password: password.current.value,
        }*/)
      })
      setCreated(true)
    }
  }



  // const submitNewUser = async e => {
  //   e.preventDefault()
  //   await fetch("/api/users", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       firstName: firstName.current.value,
  //       lastName: lastName.current.value,
  //       personId: personId.current.value,
  //       email: email.current.value,
  //       password: password.current.value,
  //       username: username.current.value,
  //       phone: phone.current.value,
  //     }),
  //   })
  // let response = await responseRaw.json()

  // sendActivationMail()
  //   setCreated(true)
  // }

  // const sendActivationMail = async () => {
  //   await fetch("api/send", {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     method: "POST",
  //     body: JSON.stringify({
  //       type: "activate",
  //       email: email.current.value,
  //     }),
  //   })
  // }

  return (
    created ?
      <Container fluid={true} className="new-user-container">
        <h2 className="page-title">Ditt konto har skapats!</h2>
        <p className="page-info">Ett mail har skickats till dig med en aktiveringslänk.</p>
        <Link to="/logga-in">
          <input className="primary-btn mt-4" type="submit" value="Till inlogg" />
        </Link>
      </Container>
      :
      <Container fluid={true} className="new-user-container">
        <h2 className="page-title">Registrera användare</h2>
        <p className="page-info">Ange personuppgifter</p>
        <form onSubmit={e => createNewUser(e)}>
          <UserRegister inputs={inputData} validation={validation} inputValues={inputValues} setInputValues={setInputValues} validate={validate} />
          <input className="primary-btn save-button mt-4" type="submit" value="Registrera" />
        </form>
        <div className="text-center">
          <p className="mt-4">Har du redan ett konto?<Link className="login-link" to="/logga-in">Logga in</Link></p>
        </div>
      </Container>
  )
}
export default CreateNewUserPage
