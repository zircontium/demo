import Header from "./Header.js";
import Homepage from "./Homepage.js";
import Footer from "./Footer";
import JobData from "./JobData.js";
import Form from "./Form.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage jobs={JobData} />} />
        <Route path="/addForm" element={<Form />} />
      </Routes>
    </Router>
  );
}

const Home = () => {
  <div>
    <Header />
    <Homepage jobs={JobData} />
    <Footer />
  </div>;
};

export default App;
