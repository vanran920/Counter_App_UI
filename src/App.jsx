import React, { useState } from 'react'

const App = () => {

   const [ count, setCount ] = useState(0) 

   const handleInputValue = (val) => {
      
       
        setCount(Number(val))
   }

   return (
    <div className='flex justify-center mt-20'>
         
         <div className='border w-200 h-100 text-center rounded-2xl bg-blue-400 shadow-2xl '>
               <h1 className='text-white font-bold text-4xl' >Counter App</h1> 
                 <input className='text-black bg-white mt-2 mb-4 p-3' placeholder='Enter Any Positive Value' onChange={(e) => handleInputValue(e.target.value) } />
               <div className='h-50'>
                   <div className={` text-9xl ${count > 10 ? 'text-amber-300' : 'text-red-500'}`} >
                        {count}
                   </div>
               </div>
               <div className='flex items-center justify-between'>
                  <button className='border w-30 ml-7 bg-green-400 text-3xl font-bold hover:text-green-500' onClick={() => setCount(count+1)}>+</button>
                  <button className='border w-30 mr-7 bg-red-400 text-3xl font-bold hover:text-red-500' disabled={count === 0} onClick={() => setCount(count-1)}>-</button>
                  <button className='border w-30 mr-7 bg-red-400 text-xl font-semibold hover:text-red-500' onClick={() => setCount(0)}>Reset</button> 
                  <button className='border w-30 mr-7 bg-red-400 text-xl font-semibold hover:text-red-500' onClick={() => setCount(count+5)}>Add 5</button> 
                  <button className='border w-30 mr-7 bg-red-400 text-xl font-semibold hover:text-red-500' disabled={count < 5 } onClick={() => setCount(count-5)}>Sub 5</button> 
               </div>
         </div>
    
    
    </div>
  )
}

export default App
