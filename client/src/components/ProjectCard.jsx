import { Link } from 'react-router-dom';

export default function ProjectCard({ project }) {
  return (
    <div className='group rounded-xl shadow-lg relative w-full border hover:border-2 h-[400px]  overflow-hidden sm:w-[340px] transition-all'>
      <Link to={`/project/${project.slug}`}>
        <img
          src={project.image}
          alt='project cover'
          className='h-[260px] w-full  object-cover group-hover:h-[200px] transition-all duration-300 z-20'
        />
      </Link>
      <div className='p-3 flex flex-col gap-2'>
        <p className='text-lg font-semibold line-clamp-2'>{project.title}</p>
        <span className='italic text-sm'>{project.category}</span>
        <Link
          to={`/project/${project.slug}`}  gradientDuoTone='purpleToPink'
          className='z-10 group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border transition-all duration-300 text-center py-2 rounded-xl m-2'
        >
          View Details
        </Link>
      </div>
    </div>
  );
}