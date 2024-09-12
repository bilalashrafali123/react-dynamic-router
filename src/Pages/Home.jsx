import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import axios from 'axios'

function Home() {
  let [data ,setData ] = useState([])  
  useEffect(()=>{
    axios("https://fakestoreapi.com/products")
    .then((res)=>{
      setData(res.data)
      console.log(res.data);
      
    })
  },[])
 


  return (
    <>
    <h1 className='text-center mt-5'>Home</h1>
  
{data ? data.map((item)=>{
  return(
    <div key={item.id} className='flex flex-wrap justify-center'>
    <Card items={item} image={item.image} title={item.title} price={item.price} desc={item.description} />
  </div>
  
  )
}) : <p>loading..</p>}


  
    </>
  )
}


export default Home