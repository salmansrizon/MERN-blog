import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/about";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Project from "./pages/project";
import Dashboard from "./pages/dashboard";
import CreatePost from "./pages/CreatePost";
import PrivateRoute from "./components/privateRoute";
import OnlyAdminPrivateRoute from "./components/OnlyAdminprivateRoute";
import Header from "./components/Header";
import Footer from "./components/Footer";
import UpadatePost from "./pages/UpdatePost";
import PostPage from "./pages/PostPage";
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
        <Route path="/project" element={<Project />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route element={<OnlyAdminPrivateRoute />}>
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/updatepost/:postId" element={<UpadatePost />} />
        </Route>
        <Route path="/post/:postSlug" element={<PostPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
