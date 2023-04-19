import { Navbar } from "./Navbar";
import { Home } from "./pages/Home";
import { Users } from "./pages/Users";
import { UserProfile } from "./pages/UserProfile";
import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";
import {
  Routes,
  Route,
} from "react-router-dom"

function App() {
  return (
    <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />} />
      <Route path="/users/:id" element={ <UserProfile />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </div>
  );
}

export default App;
