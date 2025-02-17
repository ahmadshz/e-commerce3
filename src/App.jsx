import { Route, Routes } from "react-router-dom";
import Website from "./Pages/Websites/website";

function App() {
  return (
    <div dir="rtl">
      <Routes>
        <Route path="/" element={<Website />} />
      </Routes>
    </div>
  );
}

export default App;
