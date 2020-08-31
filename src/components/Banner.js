import React from 'react'
import banner from '../images/banner.png'

const Banner = (props) => {
    return (
        <a href={props.linkToPage} target="_blank">
        <div style={{ backgroundImage: `url(${banner})`, backgroundRepeat: "no-repeat", width: "763px", height: "334px", margin: 'auto' }}>
        </div>
        </a>
    )
}


export default Banner;