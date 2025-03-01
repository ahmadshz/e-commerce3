import { useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../../Components/Dashboard/SideBar";
import TopBar from "../../Components/Dashboard/TopBar";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); 

  return (
    <div className="flex flex-col lg:flex-row relative">
      {/* الشريط الجانبي */}
      <SideBar setIsOpen={setIsSidebarOpen} />

      {/* المحتوى الرئيسي */}
      <div className={`flex-1 xl:mr-64 transition-all duration-300 ${isSidebarOpen ? "lg:w-[calc(100%-16rem)]" : "w-full"}`}>
        <TopBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
        <div className="p-5">
          {/* العرض المناسب للمحتوى */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
