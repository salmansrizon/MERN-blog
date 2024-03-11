import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/about";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Dashboard from "./pages/dashboard";
import CreatePost from "./pages/CreatePost";
import CreateProject from "./pages/CreateProject";
import PrivateRoute from "./components/privateRoute";
import OnlyAdminPrivateRoute from "./components/OnlyAdminprivateRoute";
import Header from "./components/Header";
import Footer from "./components/Footer";
import UpadatePost from "./pages/UpdatePost";
import UpadateProject from "./pages/UpdateProject";
import PostPage from "./pages/PostPage";
import ProjectPage from "./pages/projectPage";
import ScrollToTop from "./components/ScrollToTop";
import Search from "./pages/Search";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/search" element={<Search />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route element={<OnlyAdminPrivateRoute />}>
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/createproject" element={<CreateProject />} />
          <Route path="/updatepost/:postId" element={<UpadatePost />} />
          <Route
            path="/updateproject/:projectId"
            element={<UpadateProject />}
          />
        </Route>
        <Route path="/post/:postSlug" element={<PostPage />} />
        <Route path="/project/:projectSlug" element={<ProjectPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
