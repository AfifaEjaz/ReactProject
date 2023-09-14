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

function CategorySidebar() {
    const [categories, setCategories] = useState([])


    useEffect(() => {
        axios.get("https://dummyjson.com/products/categories").then(json => setCategories(json.data))
    }, []);

    return (
        <>

            <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
                <CDBSidebar textColor="#fff" backgroundColor="white">
                    <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large text-danger"></i>}>
                        <a href="/" className="text-decoration-none" style={{ color: 'pink' }}>
                            Categories
                        </a>

                    </CDBSidebarHeader>

                    <CDBSidebarContent className="sidebar-content">
                        <CDBSidebarMenu>

                            {
                                categories.map((val, key) =>
                                    <Link to={`/products/category/${val}`} key={key}>
                                        <CDBSidebarMenuItem className='after' icon="columns">{val}</CDBSidebarMenuItem>
                                    </Link>
                                )
                            }

                        </CDBSidebarMenu>
                    </CDBSidebarContent>

                    <CDBSidebarFooter style={{ textAlign: 'center' }}>
                        <div
                            style={{
                                padding: '20px 5px',
                            }}
                        >
                            Sidebar Footer
                        </div>
                    </CDBSidebarFooter>
                </CDBSidebar>

            </div >


        </>
    )
}

export default CategorySidebar