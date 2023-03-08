import './App.css';
import MyTable from './components/MyTable';
import {useState, useEffect} from 'react';
import axios from 'axios';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Table1 from './components/View';
import Residentform from './components/MyTable';

function App() {
  const [data, setData] = useState([])

  async function getData(){
    let res = await axios.get("http://localhost:8080/getResident");
    setData(res.data);
    console.log(res.data);  
  }

  useEffect(
    () => {
      getData()
    },
  [])

  return (
    <div style={{backgroundColor:"pink"}}>
   
    <BrowserRouter>
    <Routes>
  
      <Route path='/' element={<Residentform/>} />
      <Route path='/getdetail' element={<Table1 />} />
      
    </Routes>
  </BrowserRouter>
  </div>

    
  );
}

export default App;