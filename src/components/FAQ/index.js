import React, { useState } from "react"
import { HelpCircle, MessageCircle } from "react-feather"
import Fade from 'react-reveal/Fade'

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
    <div className="qna-content mb-4">
      <div type="text" className="question-content" onClick={openQna}>
        <HelpCircle className="qna-icon" /><p className="text-style"> {qna.question ? qna.question : 'Fråga saknas'}</p>
      </div>
      <Fade right opposite collapse duration={300} when={toggleState}>
        <div className="answer-content"> <MessageCircle className="qna-icon" />
          <p className="text-style "> {qna.answer ? qna.answer : 'Svar saknas'} </p>
        </div>
      </Fade>

    </div>
  )
}
export default QandA