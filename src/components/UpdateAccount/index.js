import React from 'react';


const UpdateAccount = props => {
  return (
    props.inputs.map((input, i) => {
      return (
        <div className="input-group update-account" key={input + i} >
          {input.icon}
          <input
            ref={input.ref}
            className="input-field"
            placeholder={input.placeholder}
            type="text"
            />
        {props.validation[input.id] ? '' : <p className=" error-text">{input.error}</p>}
        </div>
      )
    })
  )
}

export default UpdateAccount