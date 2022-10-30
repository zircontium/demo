
import Header from './Header.js';
import Homepage from './Homepage.js';
import Footer from './Footer';
import AddJobForm from './AddJobForm';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom'

function App() {
  let jobs = [
    {
      jobId: 242353253,
      jobType: "Transportation",
      jobStatus: "NOT STARTED",
      startingDate: "10/03/2022"
    },
    {
      jobId: 242535355,
      jobType: "Storage",
      jobStatus: "ACTIVE",
      startingDate: "10/03/2022"
    },
    {
      jobId: 476554232,
      jobType: "Processing",
      jobStatus: "FINISHED",
      startingDate: "10/03/2022"
    }
  ]
  return (
<homepage>
  <Router>
    <Header/>
    <Routes>
    <Route path='/' element={<Homepage jobs ={jobs}/>}/>
    <Route path='/addJob' element={<AddJobForm/>}/>
    </Routes>
    <Footer/>
  </Router>
</homepage>
  );
}

export default App;
