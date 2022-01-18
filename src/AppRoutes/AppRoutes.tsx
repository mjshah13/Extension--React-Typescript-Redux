import Register from '../Pages/Register/Register';
import Verification from '../Pages/Verification/Verification';
import CreateNearAccount from '../Pages/Create_Near_Account/CreateNearAccount';
import SeedPhrase from '../Pages/Seed_Phrase/SeedPhrase';
import SecureAccount from '../Pages/Secure_Account/SecureAccount';
import Home from '../Pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Phrase from '../Components/Phrase/Phrase';
function AppRoutes() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Register />}></Route>
          <Route path='/verification' element={<Verification />}></Route>
          <Route path='/create-acc' element={<CreateNearAccount />}></Route>
          <Route path='/secure-acc' element={<SecureAccount />}></Route>
          <Route path='/seed-phrase' element={<SeedPhrase />}></Route>
          <Route path='/home' element={<Home />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default AppRoutes;
