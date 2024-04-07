import React from 'react'
import zomatoImage from '../images/foodadd.avif'
import './Add.css'

const Adds = () => {
  return (
   <div className='mainlr'>
      <div className='left'>
        <h3>
         Order Food<br/> Online in <br/>Mumbai <hr/>
        </h3>
      </div>
      <div className='right'>
        <img src={zomatoImage}/>
      </div>
   </div>
  )
}

export default Adds;