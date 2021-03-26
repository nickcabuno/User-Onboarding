import React, { useState, useEffect } from 'react'
import Friend from './Friend'
import FriendForm from './FriendForm'
import axios from 'axios'
import formSchema from './formSchema'
import * as yup from 'yup'

const initialFormValues = {

  firstname: '',
  lastname: '',
  email: '',
  password: '',
  role: '',
  civil: '',
  accept: false,
}

const initialFormErrors = {
  firstname: '',
  lastname: '',
  email: '',
  role: '',
  civil: '',
}
const initialFriends = []
const initialDisabled = true


export default function App() {

  const [friends, setFriends] = useState(initialFriends)
  const [formValues, setFormValues] = useState(initialFormValues) 
  const [formErrors, setFormErrors] = useState(initialFormErrors) 
  const [disabled, setDisabled] = useState(initialDisabled)      

  
  // const getFriends = () => {
  //   axios.get('https://reqres.in/api/users')
  //     .then(res => {
  //       setFriends(res.data)
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     })
  // }

  const postNewFriend = newFriend => {
    axios.post('https://reqres.in/api/users', newFriend)
      .then(res => {
        setFriends([res.data, ...friends])
      })
      .catch(err => {
        console.log(err);
      })
      setFormValues(initialFormValues)
  }

  
  const inputChange = (name, value) => {
    yup.reach(formSchema, name)
      .validate(value)
      .then(() => {
        setFormErrors({...formErrors, [name]: ''})
      })
      .catch(err => {
        setFormErrors({...formErrors, [name]: err.errors[0]})
      })
    setFormValues({
      ...formValues,
      [name]: value 
    })
  }

  const formSubmit = () => {
    const newFriend = {
      firstname: formValues.firstname.trim(),
      lastname: formValues.lastname.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      role: formValues.role.trim(),
      civil: formValues.civil.trim(),
      hobbies: ['accept'].filter(hobby => formValues[hobby])
    }
    postNewFriend(newFriend)
  }


  // useEffect(() => {
  //   getFriends()
  // }, [])

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className='container'>
      <header><h1>please hand over your information thx</h1></header>

      <FriendForm
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />

      {
        friends.map(friend => {
          return (
            <Friend key={friend.id} details={friend} />
          )
        })
      }
    </div>
  )
}
