import React from 'react'
import Card from './Card'


const CardGroup = ({cardInfo}) => {

    console.log()
  return (
  
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 p-4">
        {
            cardInfo.map((curVal,id)=>(
                <Card key={id} curData={curVal}/>
            ))
        }
    </div>
    
  )
}

export default CardGroup