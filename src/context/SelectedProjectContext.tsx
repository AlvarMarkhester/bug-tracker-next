import { createContext, useContext, useState } from "react"

const initialState = {
    selectedProject: "",
    setSelectedProject: () => void
}

const SelectedProjectContext = createContext(initialState);

const SelectedProjectProvider = ({ children }: { children: React.ReactNode }) => {
    const [selectedProject, setSelectedProject] = useState("")

    const value = {selectedProject, setSelectedProject}
    return <SelectedProjectContext.Provider value={value}>{children}</SelectedProjectContext.Provider>

}

function useModalContext() {
    const context = useContext(SelectedProjectContext)
    if (context === undefined) {
      throw new Error('useCount must be used within a CountProvider')
    }
    return context
  }
  

export { SelectedProjectProvider, useModalContext }