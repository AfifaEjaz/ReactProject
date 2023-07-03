import React, { useState } from 'react'
import './login.css'
import Swal from 'sweetalert2'
import PersonIcon from '@mui/icons-material/Person';


function LogIn() {


  const styleForPaper = {
    width: '8vw',
    height: '8vh',
  };

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const loggedIn = (e) => {
    e.preventDefault();

    console.log("working")
    const payload = { email, password };
    console.log(payload)
    if (payload.email == 'abc@gmail.com' && payload.password == '12345678')
      Swal.fire(
        'Good job!',
        'You Successfully logged In!',
        'success'
      )
    else {
      Swal.fire(
        'Wrong Inputs!',
        'You cannot logged In!',
        'error'
      )
    }
  }


  return (
    <>
      <div className="body" style={{ height: '77vh' }}>
        <div className="login-container">
          <div className="header">
            <div className="logo">
              <PersonIcon style={styleForPaper}  />
            </div>
            <h1>Welcome.</h1>
          </div>
          <div className="form">
            <form onSubmit={loggedIn}>
              <div className="fields">
                <input type="email" required placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />

                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required pattern="[a-zA-z0-9]{8,15}" title="Password should be long than 8 characters" />

              </div>
              <input type="submit" value="Log in" />
            </form>
          </div>
          <div id="footer">
            <p>
              <a href="./Signup">Sign up</a>for a new account
            </p>
          </div>
        </div>
      </div >
    </>
  )
}

export default LogIn