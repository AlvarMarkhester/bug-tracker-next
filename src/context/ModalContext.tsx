import React, { createContext, useContext, useState } from "react"

const initialState = {
    form: '',
    isOpen: false
}

type ModalContextType = {
    modalOpen: {
        form: string, 
        isOpen: boolean
    },
    onOpen: (type: string) => void,
    onClose: () => void,
}

const ModalContext = createContext<ModalContextType>({
    modalOpen: initialState,
    onOpen: () => {},
    onClose: () => {}
})

const ModalProvider = ({ children }: { children: React.ReactNode }) => {
    const [modalOpen, setModalOpen] = useState(initialState)

    const onOpen = (type: string) => {
        setModalOpen({form: type, isOpen: true})
    }
    const onClose = () => {
        setModalOpen(initialState)
    }

    const value = {modalOpen, onOpen, onClose}
    return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>

}

function useModalContext() {
    const context = useContext(ModalContext)
    if (context === undefined) {
      throw new Error('useCount must be used within a CountProvider')
    }
    return context
  }
  

export { ModalProvider, useModalContext }