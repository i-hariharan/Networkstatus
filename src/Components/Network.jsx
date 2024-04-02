import React from 'react'
import { Detector } from 'react-detect-offline'
import img from "../assets/img.png"

export default function Network(props) {
  return (
    <div>
      <Detector
            render={({online}) => (
                online ? props.children :
                <div className='container'>
                  <img src={img}/>
                  <h1 className='head'>No Connection</h1>
                  <h3 className='header'>Please check your Internet Connection!</h3>
                </div>
            )}
      />
    </div>
  )
}
