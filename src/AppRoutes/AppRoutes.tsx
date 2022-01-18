import Register from "../Pages/Register/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function AppRoutes() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Register />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default AppRoutes;
