import React from 'react'

export default function FriendForm(props) {
  const {
    values,
    submit,
    change,
    disabled,
    errors,
  } = props

  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }

  const onChange = evt => {

    const { name, value, type, checked } = evt.target
    const valueToUse = type === 'checkbox' ? checked : value
    change(name, valueToUse)
  }

  return (
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group submit'>
        <h2>go ahead it would be appreciated</h2>

       

        <div className='errors'>
    
          <div>{errors.firstname}</div>
          <div>{errors.lastname}</div>
          <div>{errors.email}</div>
          <div>{errors.role}</div>
          <div>{errors.civil}</div>
        </div>
      </div>

      <div className='form-group inputs'>
        <h4>General information</h4>

        <label>firstname:
          <input
            value={values.firstname}
            onChange={onChange}
            name='firstname'
            type='text'
          />
        </label>

        <label>lastname:
          <input
            value={values.lastname}
            onChange={onChange}
            name='lastname'
            type='text'
          />
        </label>

        <label>Email
          <input
            value={values.email}
            onChange={onChange}
            name='email'
            type='text'
          />
        </label>

        <label>password:
          <input
            value={values.password}
            onChange={onChange}
            name='password'
            type='text'
          />
        </label>

        <label>Role
          <select
            onChange={onChange}
            value={values.role}
            name='role'
          >
            <option value=''>- Select an option -</option>
            <option value='ugly'>ugly</option>
            <option value='cute'>cute</option>
            <option value='al pacino'>al pacino</option>
            <option value='miley cyrus'>miley cyrus</option>
          </select>
        </label>

        <label>yes
          <input
            type='radio'
            name='civil'
            onChange={onChange}
            value='yes'
            checked={values.civil === 'yes'}
          />
        </label>

        <label>no
          <input
              type='radio'
              name='civil'
              onChange={onChange}
              value='no'
              checked={values.civil === 'no'}
            />
        </label>
      </div>

      <div className='form-group checkboxes'>
        <h4>Terms Of Service</h4>

        <label>Accept
          <input 
            type='checkbox'
            name='accept'
            onChange={onChange}
            checked={values.accept}
          />
        </label>
      </div>
      <button disabled={disabled}>submit</button>
    </form>
  )
}