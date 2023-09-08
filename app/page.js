import Image from 'next/image'
import { getProjects } from '@/sanity/schemas/display'
// import { ProfileType } from '@/types'


export default async function Home() {
  const projects= await getProjects();
  return (<div>
    {projects.map((project)=>(
      <div key={project._id}>{project.title}</div>
    ))}
  </div>)}

// export async function getStaticPaths(){

  
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
