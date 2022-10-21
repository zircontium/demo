import React from 'react'

export const Job = ({job, index}) => {
  return (
    <tr>
      <th scope="row">{index}</th>
      <td>{job.jobId}</td>
      <td>{job.jobType}</td>
      <td>{job.jobStatus}</td>
      <td>{job.startingDate}</td>
    </tr>
  )
}
