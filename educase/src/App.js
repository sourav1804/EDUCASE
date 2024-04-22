import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './Pages/Main/Main';
import Signup from './Pages/Sign up/Signup';
import Login from './Pages/Log in/Login';
import Home from './Pages/Homepage/home'

function App() {
  return (
    <>
      <BrowserRouter><Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} /> {/* Define the About route */}
      </Routes></BrowserRouter>

    </>
  );
}

export default App;
