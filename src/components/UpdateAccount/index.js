import React from 'react';


const UpdateAccount = props => {

  return (
    props.inputs.map((input, i) => {
      return (
        <div className="input-group" key={input + i} >
          {input.icon}
          <input
            ref={input.ref}
            className="input-field"
            placeholder={input.placeholder}
            type="text"
            title={input.title}
            //2 eller mera tecken
            pattern={input.validator}
            />
        {/* { document.querySelector(input.id).validity.valid = false ? (<p >Minst 2 bokstäver</p>) : null } */}
        </div>
      )
    })
  )
}

export default UpdateAccount