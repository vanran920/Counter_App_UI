import React, { useState } from 'react'

const App = () => {

   const [ count, setCount ] = useState(0)

   const forNegative = (count) => {
       
        if(count <= 0)
        {
           setCount(0)
        } 
        else
        {
          setCount(count-1)
        }
   }



  return (
    <div className='flex justify-center mt-40'>
         
         <div className='border w-80 h-80 text-center rounded-2xl bg-blue-400 shadow-2xl '>
               <h1 className='text-white font-bold text-4xl' >Counter App</h1> 
               <div className='h-50'>
                  <h1 className='h-10 text-9xl ' >{count}</h1>
               </div>
               <div className='flex items-center justify-between'>
                  <button className='border w-30 ml-7 bg-green-400 text-3xl font-bold hover:text-green-500' onClick={() => setCount(count+1)}>+</button>
                  <button className='border w-30 mr-7 bg-red-400 text-3xl font-bold hover:text-red-500' onClick={() => forNegative(count)}>-</button>
               </div>
         </div>
    
    
    </div>
  )
}

export default App
