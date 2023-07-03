import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { json } from 'react-router-dom'

function Try() {

    const [checking, setChecking] = useState([])

    useEffect(() => {
        axios.get("https://dummyjson.com/products").then(json => setChecking(json.data.products))
    }, [])

    return (
        <>
            <div>try this</div>
            <div className="row">
                {
                    checking.map((val, key) =>
                        <div key={key} className="col-md-3">{val}</div>
                    )
                }
            </div>
        </>
    )
}

export default Try