import { Center, Divider } from '@chakra-ui/react'
import React from 'react'
import overImg from '../../assets/overlay.png'

const CardFour = () => {
  return (
    <Center>
      <div className="card p-4 shadow-sm text-dark mt-4" style={{width:"350px",backgroundImage:`url(${overImg})`,border:'none'}}>
        <div className="card-body p-0">
          <h4 className="card-title" style={{color:"darkblue"}}>
            Beautiful UI Components
          </h4>
          <p className='card-text'>Indulging in a warm cup of coffee is like a soothing embrace for the mind, gently unraveling tension and infusing tranquility with every sip. Its rich aroma and comforting taste create a brief oasis of relaxation amidst the bustling rhythms</p>
        </div>
        <Divider color='red.500' variant='solid'/>
        <div className="card-footers">
          <p className='fs-6 fw-bold text-end'>3 mins ago</p>
        </div>
      </div>
    </Center>
  )
}

export default CardFour