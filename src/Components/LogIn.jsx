import React, { useReducer, useState } from 'react'
import './login.css'
import Swal from 'sweetalert2'
import PersonIcon from '@mui/icons-material/Person';

const initialState = {
  email: "",
  password: ""
}

const loginReducer = (state, action) => {
  switch (action.type) {
    case "UPDATED_FIELD":
      return { ...state, [action.payload.name]: action.payload.value };
    default:
      return state;
  }
}


function LogIn() {

  const [state, dispatch] = useReducer(loginReducer, initialState)

  const handleChange = (e) => {
    dispatch(
      {
        type: "UPDATED_FIELD",
        payload: {
          name: e.target.name,
          value: e.target.value
        }
      }
    )
  }


  const styleForPaper = {
    width: '8vw',
    height: '8vh',
  };

  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")

  const loggedIn = (e) => {
    e.preventDefault();
    
    const payload = {
      email: state.email,
      password: state.password
    }

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
              <PersonIcon style={styleForPaper} />
            </div>
            <h1>Welcome.</h1>
          </div>
          <div className="form">
            <form onSubmit={loggedIn}>
              <div className="fields">
                <input type="email" required placeholder="Email" name='email' value={state.email} onChange={handleChange} />

                <input type="password" placeholder="Password" name='password' value={state.password} onChange={handleChange} required pattern="[a-zA-z0-9]{8,15}" title="Password should be long than 8 characters" />

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