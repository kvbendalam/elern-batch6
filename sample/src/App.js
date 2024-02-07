import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bangalore from './Bangalore'
import Employee from './Employee'
import User from './User';
import Emp from './Emp';
import Component1 from './Component1';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<Bangalore/>}/>
        <Route path='/Employee' element={<Employee name="Sharmila" salary="50000"/>}/>
        <Route path="/user/:id" element={<User/>}/>
        <Route path="/emp/:username" element={<Emp/>}/>
        <Route path="/one" element={<Component1/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
