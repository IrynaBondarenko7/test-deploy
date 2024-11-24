import React from "react";
import { ProjectsItem } from "./ProjectsItem";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { ProjectType } from "@/components/types/type";

type ProjectsListProps = {
  projectsData: ProjectType[];
};

export const ProjectsList: React.FC<ProjectsListProps> = ({ projectsData }) => {
  return (
    <div className="flex h-screen w-full justify-center">
      <div className="w-full">
        <TabGroup>
          <TabList className="flex gap-4 justify-center">
            {projectsData.map(({ type }) => (
              <Tab
                key={type}
                className="rounded-full py-1 px-3 text-sm/6 xl:text-base font-semibold text-white focus:outline-none data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white"
              >
                {type}
              </Tab>
            ))}
          </TabList>
          <TabPanels className="mt-3">
            {projectsData.map(({ type, projects }) => {
              const sortedProjects = projects.toSorted((a, b) => b.id - a.id);
              return (
                <TabPanel key={type} className="rounded-xl bg-white/5 p-3">
                  <ul>
                    {sortedProjects.map((project, index) => (
                      <ProjectsItem
                        key={project.id}
                        project={project}
                        index={index}
                      />
                    ))}
                  </ul>
                </TabPanel>
              );
            })}
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
};
