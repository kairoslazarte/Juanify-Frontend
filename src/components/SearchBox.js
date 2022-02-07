import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }

  return (
    <>
    <div className="">
      <Form onSubmit={submitHandler} inline>
        <Form.Control
          type='text'
          name='q'
          onChange={(e) => setKeyword(e.target.value)}
          placeholder='Search Products...'
          className='mr-sm-2 ml-sm-5'
        ></Form.Control>
      </Form>
    </div>
    
    <Button type='submit' variant='info' className='p-2 px-3'>
      <i className="fas fa-microphone"></i>
    </Button>
    </>
  )
}

export default SearchBox
