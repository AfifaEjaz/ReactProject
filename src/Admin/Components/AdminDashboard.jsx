import React from 'react'
import { Link } from 'react-router-dom'
import './AdminDashboard.css'
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
} from 'cdbreact';


function AdminDashboard() {
    return (
        <>
            {/* <section className='Menu'>
                <div className="logoo">
                    <h1>BC<span>ted</span></h1>
                    <h2></h2>
                </div>

                <div className="items">
                    <li><i className='fas fa-edit'></i><Link to="#">Dashboard</Link></li>
                    <li><i className='fab fa-uikit'></i><Link to="#">UI Elements</Link></li>
                    <li><i className='fas fa-th-large'></i><Link to="#">Tables</Link></li>
                    <li><i className='fas fa-edit'></i><Link to="#">Forms</Link></li>
                    <li><i className='fab fa-cc-visa'></i><Link to="#">Cards</Link></li>
                    <li><i className='fas fa-hamburger'></i><Link to="#">Modal</Link></li>
                    <li><i className='fas fa-chart-line'></i><Link to="#">Blank</Link></li>

                </div>

            </section> */}
            <CDBSidebar backgroundColor="white">
                <CDBSidebarHeader>
                    <h2 className='text-dark'>BC<span className='text-danger'>ted</span></h2>
                </CDBSidebarHeader>
               
                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>

                    <Link to="/Admin/">
                    <CDBSidebarMenuItem className='after' icon="columns" >Home</CDBSidebarMenuItem>
                    </Link>
                    <Link to="/Admin/#">
                    <CDBSidebarMenuItem className='after' icon="check" >Brands</CDBSidebarMenuItem>
                    </Link>
                        <CDBSidebarMenuItem className='after' icon="table" >Categories</CDBSidebarMenuItem>
                        {/* <CDBSidebarMenuItem className='after' icon="chart-line" >Forms</CDBSidebarMenuItem>
                        <CDBSidebarMenuItem className='after' icon="columns" >Cards</CDBSidebarMenuItem>
                        <CDBSidebarMenuItem className='after' icon="columns" >Modal</CDBSidebarMenuItem>
                        <CDBSidebarMenuItem className='after' icon="columns" >Blank</CDBSidebarMenuItem> */}

                    </CDBSidebarMenu>
                </CDBSidebarContent>

                <CDBSidebarFooter style={{ textAlign: 'center' }}>
                    <div style={{padding: '20px 5px',}}>Sidebar Footer</div>
                </CDBSidebarFooter>
            </CDBSidebar>
        </>
    )
}

export default AdminDashboard