
import Header from './Header.js';
import Homepage from './Homepage.js';
import Footer from './Footer';
import JobData from './JobData.js';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
<homepage>
  <Header/>
  <Homepage jobs ={JobData}/>
  <Footer/>
</homepage>
  );
}

export default App;
