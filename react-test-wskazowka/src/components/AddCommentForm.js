import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'

import { PageReducer } from '../state'

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  button {
    width: 240px;
    height: 40px;
    align-self: center;
  }
  textarea {
    min-height: 160px;
    margin: 8px 0;
  }
`

const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0 16px 0;
  span {
    flex-grow: 1;
  }
  input {
    margin-left: 4px;
    width: 80%;
  }
`

const AddCommentForm = () => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')
  const [email, setEmail] = useState('')
  const [description, setDescription] = useState('')

  const onTitleChange = (event) => setTitle(event.target.value)
  const onEmailChange = (event) => setEmail(event.target.value)
  const onDescriptionChange = (event) => setDescription(event.target.value)

  const validateForm = () => {
    return title.length > 0 && email.length > 0 && description.length > 0
  }

  const onSubmit = (event) => {
    event.preventDefault()
    if (validateForm) {
      dispatch(PageReducer.Actions.addComment({ title, email, description }))
      setTitle('')
      setEmail('')
      setDescription('')
    }
  }

  return (
    <FormWrapper onSubmit={onSubmit}>
      Add your comment:
      <TitleRow>
        <span>
          <label>Title:</label>
          <input value={title} onChange={onTitleChange} required />
        </span>
        <span>
          <label>Email:</label>
          <input value={email} onChange={onEmailChange} required />
        </span>
      </TitleRow>
      <label>Description: </label>
      <textarea value={description} onChange={onDescriptionChange} required />
      <button>Submit</button>
    </FormWrapper>
  )
}

export default AddCommentForm
