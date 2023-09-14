import React from 'react'
import Category from '../Components/Category'
import CategorySidebar from '../Components/CategorySidebar'
function CategoryPage() {



    return (
        <>

            <div style={{ display: 'flex', overflow: 'scroll initial' }}>
                <div className="d-flex">
                    {
                        <CategorySidebar />
                    }
                </div>
                <div className="col-md-9 ">
                    <Category />
                </div>
            </div>




        </>

    )
}

export default CategoryPage