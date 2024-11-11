import React from 'react'
import { useState } from 'react'


const Step = () => {
const [step, setstep] = useState(1)

const hendelNext = () => {
    if(step<=2)
    setstep(step + 1)

}

const hendelPrev = () => {
    if(step>1)
    setstep(step -1)
}



  return (
    <div className='Numbers'>
      <span className=  'Active' >1 </span>
      <span className=  {step>=2? 'Active ' : '' } >2 </span>
      <span className=  {step>=3? 'Active ' : '' } >3</span>
<div>  
     <button onClick={hendelPrev} class="btn btn-primary">Prov</button>
<button onClick={hendelNext} class="btn btn-secondary">Next</button>
</div>
   

    </div>
  )
}

export default Step
