import React from 'react'
import Category from '../Components/Category'
import CategorySidebar from '../Components/CategorySidebar'
function CategoryPage() {



    return (
        <>

            <div className="row " style={{ display: 'flex' }}>
                <div  style={{  width: '20vw' }} className="col-md-3 ">
                    <CategorySidebar />
                </div>
                <div className="col-md-9 ">
                    <Category />
                </div>
            </div>
          



        </>

    )
}

export default CategoryPage