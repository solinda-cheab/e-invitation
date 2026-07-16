import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Invitation from '../pages/Invitation';
import Templates from '../pages/Templates';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import NotFound from '../pages/NotFound';

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/invitation/:id' element={<Invitation />} />
      <Route path='/templates' element={<Templates />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}
