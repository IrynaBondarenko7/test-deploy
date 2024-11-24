import type { Metadata } from "next";
import { ProjectType } from "@/components/types/type";
import { ProjectsList } from "@/components/ProjectsList";

export const metadata: Metadata = {
  title: "Iryna's Projects",
  description: "React, Next.js, Javascript projects",
};

async function fetchProjects(): Promise<ProjectType[]> {
  const response = await fetch("http://localhost:3000/api/projects/");

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data;
}

export default async function ProjectsPage() {
  const projects = await fetchProjects();

  return (
    <section className="mt-24">
      <ProjectsList projectsData={projects} />
    </section>
  );
}
