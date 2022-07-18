import React, { createContext, useContext, useEffect, useState } from "react";

const initialState: ProjectContextType = {
    currentProject: "",
    allProjects: [],
    setCurrentProject: () => { },
};

type ProjectContextType = {
    currentProject: string;
    allProjects: any;
    setCurrentProject: (name: string) => void;
};

const ProjectContext = createContext<ProjectContextType>(initialState);

const ProjectProvider = ({ children }: { children: React.ReactNode }) => {
    const [currentProject, setProject] = useState(initialState.currentProject);
    const [allProjects, setAllProjects] = useState(initialState.allProjects);

    const setCurrentProject = (name: string) => {
        setProject(name);
    };

    useEffect(() => {
        const getUserProjects = async () => {
            try {
                await fetch("/api/projects", {
                    method: "GET",
                })
                    .then((res) => res.json())
                    .then((data) => setAllProjects(data.projects));
            } catch (error) {
                console.log(error);
            }
        };
        getUserProjects();
    }, []);

    const value = { currentProject, setCurrentProject, allProjects };
    return (
        <ProjectContext.Provider value={value}>
            {children}
        </ProjectContext.Provider>
    );
};

function useProjectContext() {
    const context = useContext(ProjectContext);
    if (context === undefined) {
        throw new Error("useCount must be used within a CountProvider");
    }
    return context;
}

export { ProjectProvider, useProjectContext };
