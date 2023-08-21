import React from 'react'
import './CardDesign.css'
import cardImg from '../../assets/image2.png'
import { Center } from '@chakra-ui/react'

const CardTwo = () => {
  return (
    <Center>
    <div className='cards mt-4'>
      <div className="card-image">
        <img src={cardImg} alt="card-img" />  
        <div className='featured'>Featured</div>
      </div>
      <div className="card-information">
          <div className='card-title'>
            <h5>Coffee and Coding</h5>
          </div>
          <div className="card-body-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, atque ab ad, dolorem repellat providenducimus tempore perferendis
          </div>
          <div className="card-user-details">
            <div className="user-img">
              <img src={cardImg} alt="Avatar"/>
            </div>
            <div className="user-details">
              <div className="username">
                <h6>John Abhraham</h6>
              </div>
             < div className="last-updated">
                <p >Updated:3 mins ago</p>
              </div>
            </div>
          </div>
      </div>  
    </div>
    </Center>
  )
}

export default CardTwo