import './App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { getUser } from '../../utilities/users-service'
import NavBar from '../../components/NavBar/NavBar';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import AuthPage from '../AuthPage/AuthPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';


export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      <NavBar user={user} setUser={setUser} />
      {user ?
        <>
          <Routes>
            <Route path='/orders/new' element={<NewOrderPage />} />
            <Route path='/orders' element={<OrderHistoryPage />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser}/>

      }
    </main>
  );
}