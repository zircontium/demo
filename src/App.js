
import Header from './Header.js';
import Homepage from './Homepage.js';
import Footer from './Footer';
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
  <Header/>
  <Homepage jobs ={jobs}/>
  <Footer/>
</homepage>
  );
}

export default App;
