import React, { useState } from "react"
import { HelpCircle, MessageCircle } from "react-feather"

const QandA = props => {
  const qna = { ...props.data }
  const [toggleState, setToggleState] = useState(false)
  const openQna = async () => {
    setToggleState(!toggleState)
    if (toggleState) return

    await fetch(`/api/counter/${qna._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      }
    })
  }

  return (
    <div className="faq-panels">
      <div
        type="text"
        className="collapsible"
        onClick={openQna}><HelpCircle /> {qna.question ? qna.question : 'Fråga saknas'}</div>
      {toggleState && <p className="content"> <MessageCircle /> {qna.answer ? qna.answer : 'Svar saknas'} </p>}
    </div>
  )
}
export default QandA