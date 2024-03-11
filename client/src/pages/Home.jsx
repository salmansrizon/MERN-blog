import { Link } from "react-router-dom";
// import CallToAction from '../components/CallToAction';
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import ProjectCard from "../components/ProjectCard";
import AppBanner from "../components/AppBanner";
import ExperianceTimeline from "../components/ExperianceTimeline";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();

    const fetchProjects = async () => {
      const res = await fetch("/api/project/getProjects");
      const data = await res.json();
      setProjects(data.projects);
    };
    fetchProjects();
  }, []);
  return (
    <div className="container mx-auto ">
      <div className=" flex flex-col gap-6">
        <AppBanner></AppBanner>
      </div>
      <div className="flex flex-col gap-6 px-7">
        <h2 className="text-2xl font-semibold text-center">Experiance</h2>
        <ExperianceTimeline></ExperianceTimeline>
      </div>

      {/* <div className='p-3 bg-amber-100 dark:bg-slate-700'>
        <CallToAction />
      </div> */}

      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
        {projects && projects.length > 0 && (
          <div className="flex flex-col gap-6 px-7">
            <h2 className="text-2xl font-semibold text-center">
              Recent Projects
            </h2>
            <div className="flex flex-wrap gap-4 ">
              {projects.map((project) => (
                <ProjectCard key={project._id} project={project} />
              ))}
            </div>
            <Link
              to={"/search"}
              className="text-lg text-teal-500 hover:underline text-center"
            >
              View all projects
            </Link>
          </div>
        )}
      </div>

      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-6 px-7">
            <h2 className="text-2xl font-semibold text-center">Recent Posts</h2>
            <div className="flex flex-wrap gap-4 ">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={"/search"}
              className="text-lg text-teal-500 hover:underline text-center"
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
