import { createClient, groq } from "next-sanity"


export async function getProjects(){
    const client = createClient({
        projectId: '3od3avz3',
        dataset: 'production',
        useCdn: false ,
        apiVersion: '2022-03-10',
    })


    return client.fetch(
        groq`*[_type == "page"]{
          _id,
          _createdAt,
          title,
          "slug": slug.current
        }`
      )
    }