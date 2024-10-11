import Navbar from "./components/navbar/Navbar";
import Homepage from "./pages/homepage/Homepage";
import './layout.scss'


function App() {
  return (
   <div className="layout">
    <div className="navbar">
      <Navbar />
    </div>
    <div className="content">
      <Homepage />
    </div>
   </div>
   
  );
}

export default App;
