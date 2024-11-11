import axios from 'axios'
import React, { useEffect, useState } from 'react'


const Advice = () => {
    const [advice, setadvice] = useState('no advice yet')
async function fetechAdvice() {
    try {
        const response = await axios.get('https://api.adviceslip.com/advice')
        setadvice(response.data.slip.advice)
    } catch (error) {
        console.log(error.message);
        
    }
}
useEffect(() => {
    fetechAdvice()
    }, [])



  return (
    <div>
        <p>  {advice} </p>
      <button onClick={fetechAdvice} class="btn btn-primary">New Advice</button>

    </div>
  )
}

export default Advice
