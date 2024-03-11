import { useEffect, userEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashSidebar from "../components/DashSidebar";
import DashProfile from "../components/DashProfile";
import DashPost from "../components/DashPosts";
import DashProject from "../components/DashProjects";
import DashUsers from "../components/DashUsers";
import DashComment from "../components/DashComment";
import DashBoardComp from "../components/DashBoardComp";

export default function Dashboard() {
  const location = useLocation();
  const [tab, setTab] = useState(""); // as initail the state will be null

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab"); // getting the tab url form clicking
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-56">
        {/* sidebar */}
        <DashSidebar />
      </div>
      {/* profile */}
      {tab === "profile" && <DashProfile />}
      {/* Post */}
      {tab === "posts" && <DashPost />}
      {/* Post */}
      {tab === "projects" && <DashProject />}
      {/* users*/}
      {tab === "users" && <DashUsers />}
      {/* Comments*/}
      {tab === "comments" && <DashComment />}
      {/* Dashboard Component */}
      {tab === "dash" && <DashBoardComp />}
    </div>
  );
}
