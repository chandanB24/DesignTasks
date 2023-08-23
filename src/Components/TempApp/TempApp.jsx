import { Center } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { WiDayCloudyHigh,WiLightning,WiHorizonAlt,WiDaySunny,WiThermometerExterior} from "react-icons/wi";
import { RiseLoader } from 'react-spinners';

const TempApp = () => {

    const [city,setCity] = useState(null);
    const [search,setSearch] = useState("Davanagere")
    const [data,setData] = useState("IN")

    useEffect(()=>{
        const fetchApi = async ()=>{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=e1a674760feae07f2412a46634136e7f`
            const response = await fetch(url)
            const resjson = await response.json(); 
            // console.log(resjson);
            setCity(resjson.main);
            setData(resjson.sys);
            // console.log(resjson.main)
        }

        fetchApi();
    },[search])


  return (
    <div className='d-flex justify-content-center align-items-center w-100 flex-column p-4' style={{height:'90vh'}}>
        <div className='shadow-sm p-4 rounded text-white container' style={{backgroundColor:'#3366ff'}}>
        <h1 className='fs-3'>Weather App</h1>
        <div className='mt-4'>
            <input type="search" className='w-100 rounded p-1 text-dark' placeholder='serach city' onChange={(e)=>{setSearch(e.target.value)}}/>
        </div>
        {!city? (
            <Center>
            <div className='m-5'>
            <RiseLoader color='white' size={10}/>
            <p>No Data Found</p>
            </div>
            </Center>
        ):(
            <div className='mt-4 '>
            <h2 className='d-flex fs-3'><WiDayCloudyHigh/>{search}({data.country})</h2>
            <h1 className='d-flex fs-4'><WiHorizonAlt/>{city.temp} °C</h1>
            <h3 className='d-flex fs-6'><WiLightning/>{city.feels_like} °C(Feels like)</h3>
            <h3 className='d-flex fs-6'><WiDaySunny/>{city.humidity}(Humidity)</h3>
            <h3 className='d-flex fs-6'><WiThermometerExterior/>{city.pressure}(Pressure)</h3>
        </div>
        )}
      
        </div>
    </div>
  )
}

export default TempApp