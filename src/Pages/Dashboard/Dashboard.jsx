import { useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../../Components/Dashboard/SideBar";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); 

  return (
    <div className="flex flex-col lg:flex-row relative">
      <SideBar setIsOpen={setIsSidebarOpen} />

      <div className={`flex-1 xl:mr-64 transition-all duration-300 ${isSidebarOpen ? "lg:w-[calc(100%-16rem)]" : "w-full"}`}>
        <div className="p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
