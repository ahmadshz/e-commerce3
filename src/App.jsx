import { Route, Routes } from "react-router-dom";
import Website from "./Pages/Websites/Website";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import Verification from "./Components/Auth/Verification";
import SuccessVerification from "./Components/Auth/SuccessVerification";
import Dashboard from "./Pages/Dashboard/Dashboard";
import User from "./Pages/Dashboard/User/User";
import ShowUser from "./Pages/Dashboard/User/ShowUser";
import DetailsAccount from "./Components/Websites/page/DetailsAccount";
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
import SinglePost from "./Components/Websites/page/SinglePost";
import RequireBack from "./Pages/Auth/RequireBack";
import RequireAuth from "./Pages/Auth/RequireAuth";
import PostAdmin from "./Pages/Dashboard/Post/PostAdmin";
import PostApproved from "./Pages/Dashboard/Post/PostApproved";
import RequiredDashboard from "./Pages/Auth/RequiredDashboard";
import CategoriesMobile from "./Components/Websites/page/CategoriesMobile";
import Home from "./Pages/Websites/Home";


function App() {
  return (
    <div dir="rtl" className="font-medium text-lg tracking-wider">
      <Routes>
        <Route path="/" element={<Home />} />
        {/*Auth */}
        <Route element={<RequireBack />} >
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/successVerification" element={<SuccessVerification />} />
        </Route>

        {/*Dashboard */}
        <Route element={<RequiredDashboard />} >
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="users" element={<User />} />
            <Route path="users/:id" element={<ShowUser />} />
            <Route path="posts" element={<PostAdmin />} />
            <Route path="post/pending" element={<PostApproved />} />
          </Route>
        </Route>

        {/* Get Single Post */}
        <Route path="/singlePost/:id" element={<SinglePost />} />

        <Route path="/category" element={ <CategoriesMobile />} />


        {/*Auth */}
        <Route element={<RequireAuth />}>
          {/*Details Account Login*/}
          <Route path="/myaccount" element={<DetailsAccount />} />

          {/*Start to Add Post */}
          <Route path="/addpost" element={<AddPost />} />
          <Route path="intermediate" element={<Intermediate />} />

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
        </Route>
      </Routes>
    </div>
  );
}

export default App;
