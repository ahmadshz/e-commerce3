import { Route, Routes } from "react-router-dom";
import Website from "./Pages/Websites/website";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import Verification from "./Components/Auth/Verification";
import SuccessVerification from "./Components/Auth/SuccessVerification";

function App() {
  return (
    <div dir="rtl">
      <Routes>
        <Route path="/" element={<Website />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/successVerification" element={<SuccessVerification />} />
      </Routes>
    </div>
  );
}

export default App;
