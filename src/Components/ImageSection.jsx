import React, { useState } from 'react'
import { useEffect } from 'react';

function ImageSection({ images }) {

  const  [img, setImg ] = useState(images[0] ? images[0] : null);

  const changeImage = (index) => {
    setImg(images[index])
  }


  return (
    <>

      <div className="container w-85 text-center">
        <img className='img-fluid mb-4 mt-4 border border-dark p-2 ' src={img} alt=''/>
      </div>

      <div className='d-flex align-items-center gap-3 bg-light border boder-dark p-4 mb-5'>
        {
          images?.map((val, key) =>
            <div key={key} className={ img == images[key] ? ('border border-dark p-2') : (null)} >
              <img onClick={() => changeImage(key)}  className='img-fluid' src={val} alt={`img-${key}`} />
            </div>)
        }
      </div>
    </>
  )
}

export default ImageSection