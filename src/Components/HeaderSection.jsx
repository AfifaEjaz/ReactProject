import React from 'react'
import './header.css'


function HeaderSection() {
    return (
        <>

            

            <div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="w-100 mx-3 p-5 my-5 mt-5 d-flex flex-column justify-content-center">
                            <h1 className="mt-5 mx-5">Light up your mood now with BC<span className="text-danger">ted</span> couch!</h1>
                            <p className="px-2 mx-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit atque ut nisi autem exercitationem explicabo incidunt dolorum minus quis sint, qui quos nulla provident perspiciatis itaque deleniti commodi et neque.</p>
                            <button type="button" className="btn btn-danger w-25 mx-5">Shop Now!</button>
                        </div>
                    </div>
                    <div className="col-md-6 my-5 p-5">
                        <img className="h-100 w-100 rounded" src="https://www.hdnicewallpapers.com/Walls/Big/House%20and%20Bungalow/Beautiful_Sofa_of_Interior.jpg" alt="loading" />
                    </div>
                </div>

                <div className="">
                    <h1 className="text-center mb-5">Proudly trusted companies and used by:</h1>

                    <div className="container d-flex flex-wrap justify-content-center align-items-center mt-5">
                        <div className="text-center">
                            <img className="img-fluid p-4 mx-3 my-2" style={{ height: '150px', width: '150px' }} src="./pizza-hut.svg" alt="" />
                        </div>
                        <div className="text-center">
                            <img className="img-fluid p-2 mx-3" style={{ height: '150px', width: '150px' }} src="./lifehacker.svg" alt="" />
                        </div>
                        <div className="text-center">
                            <img className="img-fluid p-2 mx-3" style={{ height: '150px', width: '150px' }} src="./disney.svg" alt="" />
                        </div>
                        <div className="text-center">
                            <img className="img-fluid p-2 mx-3" style={{ height: '150px', width: '150px' }} src="./buzzfeed.svg" alt="" />
                        </div>
                        <div className="text-center">
                            <img className="img-fluid p-2 mx-3" style={{ height: '150px', width: '150px' }} src="./marvel.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>




        </>


    )
}

export default HeaderSection