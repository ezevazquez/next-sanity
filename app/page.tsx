import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="container mx-auto max-w-5xl py-20">
      <h1 className="text-7xl font-extrabold">Hola, soy <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">Jesi</span></h1>

      <p className="mt-3 textl-xl text-gray-600">Te invito a conocerme!</p>

      <h2 className="mt-24 font-bold text-gray-700 text-3xl">Esta soy yo :)</h2>


      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <div key={project._id} className="rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition">
          {project.image && (
            <Image
            src={project.image}
            alt={project.name}
            width={750}
            height={300}
            className="object-cover rounded-lg border border-gray-500"
            />
          )}
          
          <div className="mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">{project.name}</div>
          
        </div>
      ))}
      </div>



    </div>
  );
}
