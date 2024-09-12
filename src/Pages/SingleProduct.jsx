import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function SingleProduct() {
  let [data ,setData ] = useState([])  
  const {id} = useParams()
  useEffect(()=>{
    axios(`https://fakestoreapi.com/products/${id}`)
    .then((res)=>{
      setData(res.data)
      console.log(res.data);
      
    })
  },[])
  return (
    <>
    <div>
      <h1 className='text-[2rem] text-center'>Product : {id}</h1>
    </div>
    

   { data ? <div className="flex flex-col md:flex-row max-w-5xl mx-auto p-4 bg-[white] text-[#38bdf8] shadow-lg mt-7 rounded-xl">
 
  <div className="w-full md:w-1/2 shadow-2xl  p-2 ">
    <img className="  object-contain w-[32rem] h-[27rem]  rounded-3xl" src={data.image} alt="Product Image" />
  </div>

  
  <div className="w-full md:w-1/2 flex flex-col justify-center p-6 space-y-4">
   
    <h1 className="text-3xl font-bold ">{data.title}</h1>

   
    <p className="text-xl text-green-600 font-semibold">{data.price}</p>

   
    <p className="">
    {data.description}
    </p>

   
    <button className="px-6 py-2 bg-[#F0AD4E] text-white font-semibold rounded-lg hover:bg-blue-500">
      Add to Cart
    </button>
  </div>
</div>
: <div className="flex justify-center items-center h-screen">
<div className="animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500"></div>
</div>

}

      
      
    </>

  )
}

export default SingleProduct





