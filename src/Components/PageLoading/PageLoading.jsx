import React, { useEffect, useState } from 'react'
import CardGroup from './CardGroup'
import LoadingAnimation from './LoadingAnimation';
import { Center } from '@chakra-ui/react';

const PageLoading = () => {
    const [card,setCard] = useState([]);
    const [page,setPage] = useState(1);
    const [loading,setLoading] = useState(true);

    const getCardData = async ()=>{
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`);
        const data = await res.json();
        setCard((prev)=>[...prev,...data]);
        setLoading(false);
    }
    
    const handlePageLoad = async ()=>{
        // console.log("scroll event"+document.documentElement.scrollHeight);
        // console.log("Inner height"+window.innerHeight);
        // console.log("scroll top"+document.documentElement.scrollTop);


        try{
            if(window.innerHeight+document.documentElement.scrollTop+1 >= document.documentElement.scrollHeight){
                setLoading(true);
                setPage((prev)=>prev+1);
            }
        }
        catch(error){
            console.log(error)
        }
    }



    useEffect(()=>{
        getCardData();
    },[page])


    useEffect(()=>{
        window.addEventListener("scroll",handlePageLoad)
        return () => window.removeEventListener("scroll",handlePageLoad)
    },[])

  return (
    <>
       
        <CardGroup cardInfo={card}/>
        {loading &&  <Center><LoadingAnimation/></Center>}
    </>
  )
}

export default PageLoading