import {
    createContext,
    Dispatch,
    SetStateAction,
    useContext,
    useState,
} from "react";

type SelectedProjectInterface = {
    selectedProject: string;
    setSelectedProject: Dispatch<SetStateAction<string>>;
};

const initialState = {
    selectedProject: "",
    setSelectedProject: () => {},
};

const SelectedProjectContext =
    createContext<SelectedProjectInterface>(initialState);

const SelectedProjectProvider = ({
    children
}: {
    children: React.ReactNode;
}) => {
    const [selectedProject, setSelectedProject] = useState("");

    const value = { selectedProject, setSelectedProject };
    return (
        <SelectedProjectContext.Provider value={value}>
            {children}
        </SelectedProjectContext.Provider>
    );
};

function useSelectedProjectContext() {
    const context = useContext(SelectedProjectContext);
    if (context === undefined) {
        throw new Error(
            "useSelectedProjectContext must be user within provider"
        );
    }
    return context;
}

export { SelectedProjectProvider, useSelectedProjectContext };
