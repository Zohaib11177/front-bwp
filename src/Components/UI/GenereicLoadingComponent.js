import React from 'react'
import "Assets/css/V6/generic-loader.css"

const GenereicLoadingComponent = () => {
    return (
        <div className="loader-container">
        <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        <h4>Loading...</h4>
        </div>
    )
}

export default GenereicLoadingComponent