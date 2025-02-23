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
import AddPostMotor from "./Components/Websites/page/AddPostMotor";
import AddPostEstate from "./Components/Websites/page/AddPostEstate";
import AddPostDevices from "./Components/Websites/page/AddPostDevices";
import AddPostFurniture from "./Components/Websites/page/AddPostFurniture";
import AddPostServices from "./Components/Websites/page/AddPostServices";
import AddPostAnimals from "./Components/Websites/page/AddPostAnimals";
import AddPostJobs from "./Components/Websites/page/AddPostJobs";
import AddPostEducation from "./Components/Websites/page/AddPostEducation";
import AddPostParty from "./Components/Websites/page/AddPostParty";
import AddPostOther from "./Components/Websites/page/AddPostOther";


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
