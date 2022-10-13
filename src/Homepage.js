import React from 'react'
import Joblist from './Joblist.js';

export default function Homepage(props) {
  return (
    <div>
        <Joblist jobs = {props.jobs}/>
        <div className='container'> 
        <button type="button" class="btn btn-dark">Add Job</button>
        </div>
    </div>
    
  )
}
