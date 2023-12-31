import { Center } from '@chakra-ui/react'
import React from 'react'

const CardThree = () => {
  return (
    <Center >
      <div className="card shadow-lg p-3 mt-4" style={{width:"350px",background:"#ffffff",border:"none"}}>
        <div className="card-text w-100 fw-bold mb-2" style={{color:"darkblue",fontSize:"18px",}}>
          Recent Posts
        </div>
        <div className="card-body p-0">
            <h4 className='card-title' style={{fontFamily:'Poppins',fontWeight:'lighter 300',color:'#18181B'}}>Coffee The Relaxing Mind</h4>
            <p className='card-text ' style={{fontFamily:"Poppins",fontSize:"16px",fontWeight:'Extralight 200',color:'#71717A'}}>Indulging in a warm cup of coffee is like a soothing embrace for the mind, gently unraveling tension and infusing tranquility with every sip. Its rich aroma and comforting taste create a brief oasis of relaxation amidst the bustling rhythms </p>
        </div>
        <hr />
        <div className="card-footers">
          <p className='fw-bold fs-6' style={{color:"#A1A1AA"}}>Posted 3min ago</p>
        </div>
      </div>
    </Center>
  )
}

export default CardThree