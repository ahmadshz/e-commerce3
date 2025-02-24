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
import Intermediate from "./Components/Websites/page/AddPosts/Intermadiate";
import AddPostCar from "./Components/Websites/page/AddPosts/AddPostCar";
import AddPostMotor from "./Components/Websites/page/AddPosts/AddPostMotor";
import AddPostEstate from "./Components/Websites/page/AddPosts/AddPostEstate";
import AddPostDevices from "./Components/Websites/page/AddPosts/AddPostDevices";
import AddPostFurniture from "./Components/Websites/page/AddPosts/AddPostFurniture";
import AddPostServices from "./Components/Websites/page/AddPosts/AddPostServices";
import AddPostAnimals from "./Components/Websites/page/AddPosts/AddPostAnimals";
import AddPostJobs from "./Components/Websites/page/AddPosts/AddPostJobs";
import AddPostEducation from "./Components/Websites/page/AddPosts/AddPostEducation";
import AddPostParty from "./Components/Websites/page/AddPosts/AddPostParty";
import AddPostOther from "./Components/Websites/page/AddPosts/AddPostOther";


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
        <Route path="/addPostMotor" element={<AddPostMotor />} />
        <Route path="/addPostEstate" element={<AddPostEstate />} />
        <Route path="/addPostDevices" element={<AddPostDevices />} />
        <Route path="/addPostFurniture" element={<AddPostFurniture />} />
        <Route path="/addPostForServises" element={<AddPostServices />} />
        <Route path="/addPostAnimals" element={<AddPostAnimals />} />
        <Route path="/addPostForJob" element={<AddPostJobs />} />
        <Route path="/addPostForEducation" element={<AddPostEducation />} />
        <Route path="/addPostParty" element={<AddPostParty />} />
        <Route path="/addPostAboutOthers" element={<AddPostOther />} />

      </Routes>
    </div>
  );
}

export default App;
