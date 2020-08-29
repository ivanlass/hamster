import React from 'react'
import banner from '../images/banner.png'

const Banner = () => {
    return (
        <div style={{ backgroundImage: `url(${banner})`, backgroundRepeat: "no-repeat", width: "783px", height: "200px", margin: 'auto' }}>
        </div>
    )
}


export default Banner;