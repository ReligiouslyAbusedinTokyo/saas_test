import Workflow from './workflow'
import React from 'react'

type Props = {

}

const Workflows =(props:Props) =>{
    return(
    <div className="relative flex flex-col gap-4">
        <section className="flex flex-col m-2">
          <Workflow 
          description='Creating a new workflow' 
          id="4fhbvw9vb3212" name="automation work-flow" 
          publish={false}/>
        </section>
    </div>
    ) 
}

export default Workflows