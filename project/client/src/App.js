import './App.css';

import First1 from './components/first1';
import NavBar from './components/NavBar';
import AddUser from './components/AddUser';
import AllUsers from './components/AllUsers';
import EditUser from './components/EditUser';
import {BrowserRouter ,Routes ,Route} from 'react-router-dom';

function App(){
  return (
    <BrowserRouter>
    <NavBar />
    
      <Routes>
      <Route path='/' element={<AddUser />} />
       
      <Route path='/all' element={ <AllUsers />} />
       
       <Route path='/add' element={<First1 />} />
       <Route path='/edit/:id' element={<EditUser />} />
       </Routes>
      
    </BrowserRouter>
  );
}

export default App;
