import React from 'react'
import { Link } from 'react-router-dom'

const Success = () => {
  return (
    <div className='Success'>
        <h1>Thank you for your message!</h1>
        <h2>I will get back to you as soon as possible.</h2>
        <Link to='/'>Return Home</Link>
    </div>
  )
}

export default Success