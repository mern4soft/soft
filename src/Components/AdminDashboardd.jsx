import React from "react";
import SummaryCards from "./dashboard component/SummaryCards";
import RecentActivity from "./dashboard component/RecentActivity";
import QuickActions from "./dashboard component/QuickActions";
import Announcements from "./dashboard component/Announcements";
import SearchBar from "./dashboard component/SearchBar";
import Tabs from "./dashboard component/Tabs";
import UserProfile from "./dashboard component/UserProfile";
import Footer from "./dashboard component/Footer";
import PresentAbsent from "./dashboard component/PresentAbsent";
import { SparklineAreaData, ecomPieChartData } from "../Data/dummy";
import { ColorMapping, Financial, Line, Pie, Pyramid, Stacked } from "../Pages";
import SparkLine from "./Charts/SparkLine";
import Button from "./Button";
import { GoPrimitiveDot } from "react-icons/go";
import StudentChart from "./dashboard component/StudentsChart";
import TrainerChart from "./dashboard component/TrainersChart";
import CoursesChart from "./dashboard component/CoursesChart";
import { IoIosMore } from "react-icons/io";
import product9 from "../Data/product9.jpg";
import { useStateContext } from "../Contexts/ContextProvider";

const AdminDashboard = () => {
  const { currentColor, currentMode } = useStateContext();
  // Sample data for the charts (replace with actual data)
  const studentData = [
    { month: "Jan", count: 200 },
    { month: "Feb", count: 250 },
    { month: "Mar", count: 300 },
    { month: "Apr", count: 280 },
    { month: "May", count: 270 },
    { month: "Jun", count: 290 },
    { month: "Jul", count: 310 },
    { month: "Aug", count: 320 },
    { month: "Sep", count: 340 },
    { month: "Oct", count: 360 },
    { month: "Nov", count: 380 },
    { month: "Dec", count: 400 },
  ];

  const trainerData = [
    { month: "Jan", count: 50 },
    { month: "Feb", count: 60 },
    { month: "Mar", count: 70 },
    { month: "Apr", count: 65 },
    { month: "May", count: 55 },
    { month: "Jun", count: 75 },
    { month: "Jul", count: 80 },
    { month: "Aug", count: 85 },
    { month: "Sep", count: 90 },
    { month: "Oct", count: 95 },
    { month: "Nov", count: 100 },
    { month: "Dec", count: 110 },
  ];

  const coursesData = [
    { month: "Jan", count: 100 },
    { month: "Feb", count: 120 },
    { month: "Mar", count: 130 },
    { month: "Apr", count: 140 },
    { month: "May", count: 150 },
    { month: "Jun", count: 160 },
    { month: "Jul", count: 170 },
    { month: "Aug", count: 180 },
    { month: "Sep", count: 190 },
    { month: "Oct", count: 200 },
    { month: "Nov", count: 210 },
    { month: "Dec", count: 220 },
  ];

  return (
    <div className="bg-white-500  min-h-screen">
      <div className=" gap-1 flex-wrap justify-center  grid grid-cols-1">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-700">
          <div className="flex justify-between">
            <p className="font-semibold text-xl">Empowering the IT Leaders of Tomorrow: Explore Our Students, Courses, and Trainers</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
              </p>
              <p className="flex items-center gap-2 text-orange-400 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
              </p>
            </div>
            
          </div>
         
          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            
            <TrainerChart  width="300px" height="300px" data={trainerData} />
            <CoursesChart width="300px" height="300px" data={coursesData} />
            <StudentChart width="300px" height="300px" data={studentData} />
            <div className=" grid grid-cols-2" >
            <div className=" border-r-0 border-color m-4 pr-20">
                <SummaryCards />
              </div>
            <div className=" border-r-0 border-color m-4 pr-20">
              <PresentAbsent />
            </div>
            </div>
           
            <div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-700">
 
  {/* Recent Activities */}
  <div className="mt-10">
    <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
    <ul className="list-disc pl-6">
      <li className="mb-4">Student registration: John Doe registered for the course "Web Development Fundamentals."</li>
      <li className="mb-4">Course assigned: Sarah Smith was assigned to teach the "JavaScript Basics" course.</li>
      <li className="mb-4">Trainer joined: Michael Johnson joined as a new trainer for the IT department.</li>
      <li className="mb-4">Project added: New project "E-commerce Website Revamp" was added to the projects list.</li>
    </ul>
  </div>
  <br />
  <br />

   {/* Quick Action Buttons */}
   <div className="mt-6">
    <h2 className="text-xl font-semibold mb-4">Quick Action Buttons</h2>
    <div className="flex flex-wrap gap-4">
      <button className="bg-orange-400 text-white px-4 py-2 rounded-full hover:bg-gray-500">
        Add Student
      </button>
      <button className="bg-orange-400 text-white px-4 py-2 rounded-full hover:bg-gray-500">
        Assign Course
      </button>
      <button className="bg-orange-400 text-white px-4 py-2 rounded-full hover:bg-gray-500">
        Add Trainer
      </button>
      <button className="bg-orange-400 text-white px-4 py-2 rounded-full hover:bg-gray-500">
        Add Project
      </button>
    </div>
  </div>
</div>


     

      {/* Content Container */}
      <div className="container mx-auto p-4">
       

       

        {/* Announcements or Notifications */}
        <div className="bg-white mt-4 p-4 rounded shadow">
          {/* Announcements or notifications */}
          <Announcements />
        </div>

        {/* Search Functionality */}
        <div className="bg-white mt-4 p-4 rounded shadow">
          {/* Search functionality */}
          <SearchBar />
        </div>
      </div>

      {/* Footer */}
     
    </div>
  );
};

export default AdminDashboard;
