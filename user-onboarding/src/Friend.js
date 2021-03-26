import React from 'react'

function Friend({ details }) {
  if (!details) {
    return <h3>Working fetching your friends details...</h3>
  }

  return (
    <div className='friend container'>
      <span>{details.firstname}</span><span> {details.lastname}</span>
      <p>Email: {details.email}</p>
      <p>Role: {details.role}</p>
      <p>Civil: {details.civil}</p>

      {/* {
        !!details.hobbies && !!details.hobbies.length &&
        <div>
          Hobbies:
          <ul>
            {details.hobbies.map((like, idx) => <li key={idx}>{like}</li>)}
          </ul>
        </div>
      } */}
    </div>
  )
}

export default Friend