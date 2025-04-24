import { Route, Routes } from "react-router-dom";
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
import Home from "./Pages/Websites/Home";
import RegistrationMembership from "./Components/Websites/page/RegistrationMembership";
import MembreDocumentation from "./Components/Websites/page/MembreDocumentation";
import FrequentlyAsked from "./Components/Websites/page/FrequentlyAsked";
import ProhibitedAds from "./Components/Websites/page/ProhibitedAds";
import PrivacyPolicy from "./Components/Websites/page/PrivacyPolicy";
import SecurityCenter from "./Components/Websites/page/SecurityCenter";
import AddPostForm from "./Pages/Dashboard/Post/AddPostForm";
import WelcomeDashboard from "./Pages/Dashboard/WelcomeDashboard";
import ForgotPassword from "./Components/Auth/ForgotPassword";
import ResetPassword from "./Components/Auth/ResetPassword";


function App() {
  return (
    <div dir="rtl" className="font-medium text-lg ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<RegistrationMembership/>} />
        <Route path="/memberDocumentation" element={<MembreDocumentation/>} />
        <Route path="/faq" element={<FrequentlyAsked/>} />
        <Route path="/prohibitedAds" element={<ProhibitedAds/>} />
        <Route path="/privacyPolicy" element={<PrivacyPolicy/>} />
        <Route path="/securityCenter" element={<SecurityCenter/>} />
        {/*Auth */}
        <Route element={<RequireBack />} >
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/successVerification" element={<SuccessVerification />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Route>

        {/*Dashboard */}
        <Route element={<RequiredDashboard />} >
          <Route path="/dashboard" element={<Dashboard />}>
          <Route path="welcomeDashboard" element={<WelcomeDashboard />} />
            <Route path="users" element={<User />} />
            <Route path="users/:id" element={<ShowUser />} />
            <Route path="posts" element={<PostAdmin />} />
            <Route path="post/pending" element={<PostApproved />} />
            <Route path="post/AddPostDash" element={<AddPostForm />} />
          </Route>
        </Route>

        {/* Get Single Post */}
        <Route path="/singlePost/:id" element={<SinglePost />} />



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
