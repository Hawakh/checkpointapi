
import './Style.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import ListUsers from './component/ListUsers';
import Home from './component/Home';
import Profile from './component/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {
  const [isAuthorized, setIsAuthorized] = useState(false);

  const handleAuthorizationToggle = () => {
    setIsAuthorized(!isAuthorized);
  };

  return (
    <div className="App">
      <Navbar isAuthorized={isAuthorized} onAuthorizationToggle={handleAuthorizationToggle} />
      {isAuthorized ? (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userList" element={<ListUsers />} />
          <Route path="/Profile/:userId" element={<Profile />} />
        </Routes>
      ) : null}
    </div>
  );
}

export default App;