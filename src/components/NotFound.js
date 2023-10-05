import React from 'react'
import notFoundImg from '../components/assets/images/notfound.png'

export default function NotFound() {
    return (
        <center>
            <img src={notFoundImg} style={{ mixBlendMode: 'luminosity', }} alt={notFoundImg} />
        </center>
    )
}