import React from 'react'
import Joblist from './Joblist.js';
import { Link } from 'react-router-dom';
export default function Homepage(props) {
  return (
    <div>
        <Joblist jobs = {props.jobs}/>
        <div className='container'> 
        <Link to='/addJob'>
          <button type="button" class="btn btn-dark">Add Job</button>
        </Link>
        </div>
    </div>
    
  )
}
