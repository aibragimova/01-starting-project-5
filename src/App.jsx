import { useState } from "react";
import NewProject from "./componets/NewProject";
import NoProjectSelected from "./componets/NoProjectSelected";
import ProjectSidebar from "./componets/ProjectSideBar";

function App() {
  const [projectState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: []
  });

  function handleStartProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectsState(prevState => {
      const newProject = {
        ...projectData,
        id: Math.random()
      };

      return {
        ...prevState,
        projects: [...prevState.projects, newProject]
      };
    })
  }

  console.log(projectState);

  let content;

  if (projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} />
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onStartAddProject={handleStartProject} />
      {content}
    </main>
  );
}

export default App;
