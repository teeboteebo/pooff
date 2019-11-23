import React from 'react';


const UpdateAccount = props => {

  return (
    props.inputs.map((input, i) => {
      return (
        <div className="input-group" key={input + i} >
          {input.icon}
          <input
            ref={input.ref}
            className="input"
            placeholder={input.placeholder}
            type="text"
            // value={input.placeholder} 
            />
            {console.log(input.placeholder)}
            
        </div>
      )
    })
  )
}

export default UpdateAccount