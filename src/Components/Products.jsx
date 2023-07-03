import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { json, Link } from 'react-router-dom';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import CategorySidebar from './CategorySidebar';

function Products() {

    const [check, setCheck] = useState({})

    useEffect(() => {
        axios.get("https://dummyjson.com/products").then(json => setCheck(json.data.products))
    }, []);

    return (
        <>

        


                <div className="container">
               
                       
                       <div className="row">
               
                </div>

                    {/* </div> */}
                    <div className="row">
                        
                        <h1 className="text-center mt-5 " style={{ width: "79%" }}>Products</h1>
                    </div>
                    <div className="ml-3 row mt-5">
                         <h3>Couches</h3>
                        <div className="col-md-3 ml-5" >
                            <img className='img-fluid img-thumbnail m-2 h-10' style={{height: '250px'}} src="https://static.toiimg.com/thumb/msid-90375730,width-1280,resizemode-4/90375730.jpg" alt="" />
                        </div>
                        <div className="col-md-3 m-2" >
                            <img className='img-fluid img-thumbnail m-2 h-10' style={{height: '250px'}} src="https://designwanted.com/wp-content/uploads/2022/11/Noah-Living-_-10-best-designed-modular-sofas-that-look-and-feel-good.jpg" alt="" />
                        </div>
                        <div className="col-md-3 m-2" >
                            <img className='img-fluid img-thumbnail m-2 h-10' style={{height: '250px' , width: '250px'}} src="https://images.thdstatic.com/productImages/8a5b1bf1-408a-4b1b-ac9e-cd1b21caa642/svn/beige-magic-home-sofas-couches-cs-sm000090aak-64_1000.jpg" alt="" />
                        </div>
                    </div>
                    <div className="row">
                    <h3>Chairs</h3>
                    <div className="col-md-3 ml-5" >
                        
                            <img className='img-fluid img-thumbnail m-2' style={{height: '250px'}} src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1678555195-gio-sofa-smart-thyme-mayer-deluxe-amber-lulu-resha-bahara-kasuri-iris-shelf-koper-1-1-f10e070a-917a-4f8a-beac-f4b2d6e39111-640cb82e81c4e.jpg?crop=0.601xw:1.00xh;0.290xw,0&resize=980:*" alt="" />
                        </div>
                        <div className="col-md-3 m-2" >
                            <img className='img-fluid img-thumbnail m-2' style={{height: '250px'}} src="https://ii1.pepperfry.com/media/catalog/product/a/e/800x880/aesthetic-fabric-iconic-chair-in-pink-colour-aesthetic-fabric-iconic-chair-in-pink-colour-imu86m.jpg" alt="" />
                        </div>
                        <div className="col-md-3 m-2" >
                            <img className='img-fluid img-thumbnail m-2' style={{height: '250px'}} src="https://media1.popsugar-assets.com/files/thumbor/9NrtCG6u2f4gutwRwd8I9WELc3Y/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2022/02/18/892/n/1922794/15e2b2a63cd40a40_netimg5ruxfK/i/Comfy-Seat-West-Elm-Cozy-Swivel-Chair.png" alt="" />
                        </div>
                    </div>
                    <div className="row">
                    <h3>Tables</h3>

                    <div className="col-md-3 ml-5" >
                            <img className='img-fluid img-thumbnail m-2' style={{height: '250px'}} src="https://img.freepik.com/premium-photo/light-aesthetic-hygge-space-with-wooden-chair-table-reed-pampas-grass-bouquet-mug-notebook_408798-8667.jpg" alt="" />
                        </div>
                        <div className="col-md-3 m-2" >
                            <img className='img-fluid img-thumbnail m-2' style={{height: '250px'}} src="https://www.homelane.com/blog/wp-content/uploads/2022/10/books-shelves-for-study-table-decor.jpg" alt="" />
                        </div>
                        <div className="col-md-3 m-2" >
                            <img className='img-fluid img-thumbnail m-2' style={{height: '250px'}} src="https://i.pinimg.com/originals/0a/be/bd/0abebdbc4f52954a6e406366e073ab16.jpg" alt="" />
                        </div>
                    </div>

                </div>
            {/* </div> */}


           

        </>

    )
}

export default Products