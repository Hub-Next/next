import Image from "next/image";
// import getProjects from '../sanity/schemas/display'
// import { ProfileType } from '@/types'

export default async function Home() {
  // const projects= await getProjects();
  return (
    <div className="mt-10 ">
      <h1 className="text-3xl font-extrabold text-white  rounded-l bold ">
        Welcome to{" "}
        <span className="bg-gradient-to-r from-pink-500 via-pink-300 to-blue-500 bg-clip-text text-transparent">
          Sanity
        </span>
        !
      </h1>
      <p className="text-white mt-3 text-sm">Hello Everyone! Enjoy My Site</p>

      <h2 className="mt-20 font-bold text-xl text-white">My Project</h2>

      <div className=" mt-5 grid md:grid-cols-3 gap-4 mr-3">
        <div className="border border-gray-500 rounded-lg font-extrabold ">
          <span className="bg-gradient-to-r from-orange-500 via-red-500 to-purple-500 bg-clip-text text-transparent ">
            Test First
          </span>
        </div>
        <div className="border border-gray-500 rounded-lg font-extrabold ">
          <span className="bg-gradient-to-r from-orange-500 via-red-500 to-purple-500 bg-clip-text text-transparent flex-wrap">
            Test Second
          </span>
        </div>
        <div className="border border-gray-500 rounded-lg font-extrabold ">
          <span className="bg-gradient-to-r from-orange-500 via-red-500 to-purple-500 bg-clip-text text-transparent">
            Test Third{" "}
          </span>
        </div>
      </div>

      {/* {projects.map((project) => (
        <div key={project._id}>{project.title}</div>
      ))} */}
    </div>
  );
}

// }

// export default async function getStaticProps(){
//   const projects = await getProjects()
//   const project = projects[0]
//   return {
//     props: {
//       project
//     }
//   }
// }
