import React from "react";
import { Job } from "./Job.js";
import { Link } from "react-router-dom";
export default function Homepage(props) {
  return (
    <div>
      <div className="container">
        <h3 className="text-centre my-3">Job List</h3>`
        <table class="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Job Id</th>
              <th scope="col">Job Type</th>
              <th scope="col">Job Status</th>
              <th scope="col">Starting Date</th>
              <th scope="col">End Date</th>
            </tr>
          </thead>
          <tbody>
            {props.jobs.map((job, index) => {
              return <Job job={job} index={index + 1} />;
            })}
          </tbody>
        </table>
        `
      </div>
      <div className="container">
        <button type="button" class="btn btn-dark">
          Add Job
        </button>
      </div>
    </div>
  );
}
