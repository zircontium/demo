import React from 'react'
import {Job} from './Job.js'

export default function Joblist(props) {
  return (
  <div className='container'> 
    <h3 className='text-centre my-3'>Job List</h3>
  ` <table class="table table-dark table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Job Id</th>
          <th scope="col">Job Type</th>
          <th scope="col">Job Status</th>
          <th scope="col">Starting Date</th>
        </tr>
      </thead>
      <tbody>

        {props.jobs.map((job,index) => {
          return <Job job={job} index= {index +1} />
        })}
      </tbody>                        
    </table>`
  </div>
  )
}
