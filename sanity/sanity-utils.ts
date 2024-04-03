import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";

export async function getProjects(): Promise<Project[]> {
  const client = createClient({
    projectId: '8titxm92',
    dataset: 'production',
    apiVersion: '2024-04-02',
  });

  return client.fetch(
    groq`*[_type == "project"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content
    }`,
    // Utiliza las opciones de filtro para la revalidación
    { revalidate: 900 } 
  );
}
