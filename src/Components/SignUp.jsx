import React, { useState } from 'react'
import './signup.css'
import { Checkbox } from '@mui/material'

function SignUp() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [address, setAddress] = useState("")
  const [state, setState] = useState("")
  const [city, setCity] = useState("")
  const [gender, setGender] = useState("")
  const [skill, setSkill] = useState([])




  const getValues = (e) => {
    e.preventDefault()

    const payload = { name, email, password, address, gender, city, skill }
    console.log(payload)

    document.getElementsByName('gender').forEach(radio => {
      if (radio.checked) {
        setGender(radio.value)
      }
    })

    const selectedSkills = Array.from(document.getElementsByName('skill'))
      .filter(checkbox => checkbox.checked)
      .map(checkbox => checkbox.value);

    setSkill(selectedSkills);


  }











  // const ifCheck = () =>
  // {
  //   console.log("working")
  //   document.getElementsByName('gender').forEach(radio =>{
  //     if(radio.checked){
  //       console.log(radio.value)
  //     }
  //   })
  // }

  return (
    <>
      {/* <div className="container my-5 d-flex justify-content-center align-items-center" style={{ height: '100%', width: '100%' }}>
        <div className="row">

          <div className="col-md-5 bg-danger rounded shadow-lg d-flex flex-column justify-content-center align-items-center">
            <div className="header">
              <h1 className='text-light m-3'>Sign up right now!</h1>
            </div>
            <div className="m-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, sunt saepe
              delectus necessitatibus odit, excepturi alias veniam, dicta nostrum at
              optio sint perferendis vitae eaque non tenetur mollitia ducimus
              distinctio. Sed similique illo nemo in eaque cupiditate non, porro eius
              voluptates eveniet aspernatur, tempore, et aperiam nam tempora numquam vel
              hic velit minima aliquid provident labore exercitationem quasi. Ut, iste.
            </div>
            <div className="footer">
              <button className='btn btn-light m-3'>Learn more</button>
            </div>
          </div>


          <form onSubmit={getValues} className="col-md-5 border rounded p-4 shadow-lg rounded ">
            <div className="row mt-3">
              <div className="col-md-10 ">
                <label htmlFor="inputEmail4" className="form-label">
                  Name
                </label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} pattern="^[a-zA-Z]*$" title="Enter only Alphabets" className="form-control" required id="inputText4" />
                {name}
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-5">
                <label htmlFor="inputEmail4" className="form-label">
                  Email
                </label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="inputEmail4" />
              </div>
              <div className="col-md-5">
                <label htmlFor="inputPassword4" className="form-label">
                  Password
                </label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} pattern="[a-zA-z0-9]{8,15}" title="Password should be long than 8 characters" className="form-control" id="inputPassword4" />
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-md-10">
                <label htmlFor="inputAddress" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-5">
                <label htmlFor="inputState" className="form-label">
                  State
                </label>
                <select id="inputState" required className="form-select">
                  <option>Sindh</option>
                  <option>KPK</option>
                  <option>Balouchistan</option>
                  <option>Gilgit Baltistan</option>
                  <option>Punjab</option>
                </select>
              </div>
              <div className="col-md-5">
                <label htmlFor="inputCity" className="form-label">
                  City
                </label>
                <input type="text" required value={city} onChange={(e) => setCity(e.target.value)} className="form-control" id="inputCity" />
              </div>
            </div>
            <div className="row mt-3">
              <label>
                Gender:
              </label>
              <label className="col-md-3"><input type="radio" value="Male" required name="gender" />Male</label>
              <label className="col-md-3"><input type="radio" value="Female" required name="gender" />Female</label>
            </div>
            <div className="row mt-3">
              <label>
                Skills:
              </label>
              <label><input type="checkbox" name="skill" className='checkbox' value="html" id="1" />HTML</label>
              <label><input type="checkbox" name="skill" className='checkbox' value="css" id="2" />CSS</label>
              <label><input type="checkbox" name="skill" className='checkbox' value="js" id="3" />JavaScript</label>
              <div className="col-12 mt-3">
                <button type="submit" className="btn btn-danger">
                  Sign in
                </button>

              </div>
            </div>
          </form>


        </div>
      </div> */}

{/* 
      <div className="container bg-dark">
        <div className="d-flex justify-content-center ">
          <div className="text-light bg-danger">hello</div>
          <div className="text-light bg-warning">hello</div>
        </div>
      </div>

      <div className="bg-success d-flex mb-2 justify-content-center align-items-center" style={{ height: '200px', width: '300px' }}>
        <div className="bg-danger mt-2 mb-2" style={{ height: '100px', width: '100px' }}></div>
      </div> */}

      {/* gdfgd */}
      <div className="container" style={{ height: '100vh', width: '100vw' }}>
      <div className="row bg-success d-flex justify-content-center align-items-center" style={{ height: '100%', width: '100%' }}>
        <div className="col-md-4 bg-danger mt-2 mb-2"  >
          <div className="header">
            <h1 className='text-light m-3'>Sign up right now!</h1>
          </div>
          <div className="m-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, sunt saepe
            delectus necessitatibus odit, excepturi alias veniam, dicta nostrum at
            optio sint perferendis vitae eaque non tenetur mollitia ducimus
            distinctio. Sed similique illo nemo in eaque cupiditate non, porro eius
            voluptates eveniet aspernatur, tempore, et aperiam nam tempora numquam vel
            hic velit minima aliquid provident labore exercitationem quasi. Ut, iste.
          </div>
          <div className="footer">
            <button className='btn btn-light m-3'>Learn more</button>
          </div>
        </div>

        {/* <div className="col-md-4 bg-warning mt-2 mb-2" style={{ height: '100px', width: '100px' }}>  */}
        <form onSubmit={getValues} className="col-md-4 bg-warning mt-2 mb-2">
            <div className="row mt-3">
              <div className="col-md-10 ">
                <label htmlFor="inputEmail4" className="form-label">
                  Name
                </label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} pattern="^[a-zA-Z]*$" title="Enter only Alphabets" className="form-control" required id="inputText4" />
                {name}
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-5">
                <label htmlFor="inputEmail4" className="form-label">
                  Email
                </label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="inputEmail4" />
              </div>
              <div className="col-md-5">
                <label htmlFor="inputPassword4" className="form-label">
                  Password
                </label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} pattern="[a-zA-z0-9]{8,15}" title="Password should be long than 8 characters" className="form-control" id="inputPassword4" />
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-md-10">
                <label htmlFor="inputAddress" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-5">
                <label htmlFor="inputState" className="form-label">
                  State
                </label>
                <select id="inputState" required className="form-select">
                  <option>Sindh</option>
                  <option>KPK</option>
                  <option>Balouchistan</option>
                  <option>Gilgit Baltistan</option>
                  <option>Punjab</option>
                </select>
              </div>
              <div className="col-md-5">
                <label htmlFor="inputCity" className="form-label">
                  City
                </label>
                <input type="text" required value={city} onChange={(e) => setCity(e.target.value)} className="form-control" id="inputCity" />
              </div>
            </div>
            <div className="row mt-3">
              <label>
                Gender:
              </label>
              <label className="col-md-3"><input type="radio" value="Male" required name="gender" />Male</label>
              <label className="col-md-3"><input type="radio" value="Female" required name="gender" />Female</label>
            </div>
            <div className="row mt-3">
              <label>
                Skills:
              </label>
              <label><input type="checkbox" name="skill" className='checkbox' value="html" id="1" />HTML</label>
              <label><input type="checkbox" name="skill" className='checkbox' value="css" id="2" />CSS</label>
              <label><input type="checkbox" name="skill" className='checkbox' value="js" id="3" />JavaScript</label>
              <div className="col-12 mt-3">
                <button type="submit" className="btn btn-danger">
                  Sign in
                </button>

              </div>
            </div>
          </form>
        {/* </div> */}
      </div>
      </div>



      {/* <div className="row d-flex justify-content-center align-items-center mt-7">
        <div className="col-md-4 border " >
          <h1>Sign up right now!</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, sunt saepe
            delectus necessitatibus odit, excepturi alias veniam, dicta nostrum at
            optio sint perferendis vitae eaque non tenetur mollitia ducimus
            distinctio. Sed similique illo nemo in eaque cupiditate non, porro eius
            voluptates eveniet aspernatur, tempore, et aperiam nam tempora numquam vel
            hic velit minima aliquid provident labore exercitationem quasi. Ut, iste.</p>
          <button type="submit" className="btn btn-danger">
            Learn more
          </button>
        </div>
        <div className="col-md-4">
          <form className="signUp col-md-4 border ">
            <div className="row mt-3">
              <div className="col-md-5">
                <label htmlFor="inputEmail4" className="form-label">
                  Email
                </label>
                <input type="email" className="form-control" id="inputEmail4" />
              </div>
              <div className="col-md-5">
                <label htmlFor="inputPassword4" className="form-label">
                  Password
                </label>
                <input type="password" className="form-control" id="inputPassword4" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-10">
                <label htmlFor="inputAddress" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="1234 Main St"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-5">
                <label htmlFor="inputState" className="form-label">
                  State
                </label>
                <select id="inputState" className="form-select">
                  <option selected="">Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div className="col-md-5">
                <label htmlFor="inputCity" className="form-label">
                  City
                </label>
                <input type="text" className="form-control" id="inputCity" />
              </div>
            </div>
            <div className="mt-3">
              <div>
                <input type="checkbox" name="skill1" defaultValue="html" id="" />
                <label htmlFor="">HTML</label>
              </div>
              <div>
                <input type="checkbox" name="skill2" defaultValue="css" id="" />
                <label htmlFor="">CSS</label>
              </div>
              <div>
                <input type="checkbox" name="skill3" defaultValue="js" id="" />
                <label htmlFor="">JavaScript</label>
              </div>
              <div className="col-12 mt-3">
                <button type="submit" className="btn btn-danger">
                  Sign in
                </button>
              </div>
            </div>
          </form>
        </div> */}

      {/* </div> */}
    </>
  )
}

export default SignUp