import { Route, Routes } from "react-router-dom";
import Website from "./Pages/Websites/website";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import Verification from "./Components/Auth/Verification";
import SuccessVerification from "./Components/Auth/SuccessVerification";
import Dashboard from "./Pages/Dashboard/Dashboard";
import User from "./Pages/Dashboard/User/User";
import ShowUser from "./Pages/Dashboard/User/ShowUser";
import DetailsAccount from "./Components/Websites/page/DetailsAccount";
import PostId from "./Components/Websites/page/PostId";
import AddPost from "./Components/Websites/page/AddPost";
import Intermediate from "./Components/Websites/page/Intermadiate";
import AddPostCar from "./Components/Websites/page/AddPostCar";


function App() {
  return (
    <div dir="rtl" className="font-medium text-lg tracking-wider">
      <Routes>
        <Route path="/" element={<Website />} />
        {/*Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/successVerification" element={<SuccessVerification />} />
        {/*Account login by id */}
        <Route path="/myaccount" element={<DetailsAccount />} />


        {/*Dashboard */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="users" element={<User />} />
          <Route path="users/:id" element={<ShowUser />} />
        </Route>

        {/*Start to Add Post */}
        <Route path="/addpost" element={<AddPost />} />
        <Route path="intermediate" element={<Intermediate />} />
        {/* Get Single Post */}
        <Route path="/post/id" element={<PostId />} />
        {/*Add Posts */}
        <Route path="/addPostCar" element={<AddPostCar />} />

      </Routes>
    </div>
  );
}

export default App;
