import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, Link } from 'react-router-dom';
import Login from './components/Login';
import AdminPage from './components/Admin';
import AdminButton from './components/AdminButton';
import Signup from './components/Signup'; // Import Signup Component
import Home from "./components/Home"
import Admin from './components/Admin';


const App = () => {
  // const location = useLocation();

  // // Check if the current route is the login page
  // const isLoginPage = location.pathname === '/';

  return (
    // <div style={{ position: 'relative', height: '100vh', width: '100%' }}>
    //   {/* Render the blurred background only on the login page */}
    //   {isLoginPage && <div className="blur-background"></div>}

    //   {/* Conditionally render the AdminButton only if not on the admin page */}
    //   {location.pathname !== '/admin' && <AdminButton text="Go to Admin" />}

    //   {/* Define the routes */}
    //   <Routes>
    //     <Route path="/" element={<Login />} />
    //     <Route path="/signup" element={<Signup />} /> {/* Add this line */}
    //     <Route path="/admin" element={<AdminPage />} />
    //     <Route path="*" element={<Navigate to="/" />} />
    //   </Routes>

    // </div>
    <Router>
      <div>
        <nav>
          <Link to="/">User Management</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Login</Link>
          <Link to="/admin">Admin Dashboard</Link>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
};

export default App
// export default function WrappedApp() {
//   return (
//     <Router>
//       <App />
//     </Router>
//   );
// }
