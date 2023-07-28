import React from 'react'
import {BsStarFill,BsStarHalf,BsStar } from 'react-icons/bs'
function Ratting(props) {
    
        const a= (value,maxValue,minValue) => {
        //   console.log(`${minValue.type} , ${minValue}, ${maxValue.type} ,${maxValue}`)
            const   n= parseInt( value)>=maxValue ? <BsStarFill/> : value>=minValue ? <BsStarHalf/> :<BsStar/>
        
        return n;
        }
       

  return (
    <div className='rating text-warning'>
           <span  >
                {a(props.value,1,0.5)}
           </span>
           <span>
                {a(props.value,2,1.5)}
           </span>
           <span>
                {a(props.value,3,2.5)}
           </span>
           <span>
                {a(props.value,4,3.5)}
           </span>
           <span>
                {a(props.value,5,4.5)}
           </span>
          <span className='link-dark'>{props.text}</span>
    </div>
  )
}

export default Ratting