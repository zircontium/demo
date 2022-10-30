import React from 'react'

export default function AddJobForm() {
  return (
    <div>
        <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Job Id</label>
    <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Job Identification"/>
  </div>
  <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Job Type
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Transportation</a>
    <a class="dropdown-item" href="#">Storage</a>
    <a class="dropdown-item" href="#">Processing</a>
  </div>
</div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  )
}
