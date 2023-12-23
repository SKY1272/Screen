import React from 'react'
import './signup.css'
function SignUp() {
  return (
    <div className='container'>
      <h1>SignUp</h1>
      <label for="">Email:</label>
      <input type="text" placeholder='Email' required/>
      <label htmlFor="">Password:</label>
      <input type="text" placeholder='password' required/>
      <label htmlFor="">Confirm Password:</label>
      <input type="text" placeholder='confirm password' required/>
      <button>Submit</button>
      <p>Have an account? Login</p>
    </div>
  )
}

export default SignUp