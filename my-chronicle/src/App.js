
import './App.css';
import Footer from './Components/Footer';
import { AllRoutes } from './Routes/AllRoutes';
import { Navbar } from './Routes/Navbar';

function App() {
  return (
    <div className="App">
     
     <Navbar/>
     <AllRoutes/>
     <Footer/>

    </div>
  );
}

export default App;
