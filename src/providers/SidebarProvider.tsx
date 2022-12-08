import { createContext, FC, useCallback, useState } from 'react'

type SidebarContextType = {
  isOpened: boolean
  setIsOpened: (isOpened: boolean) => void
}

export type SidebarProviderProps = {
  children: React.ReactNode
}

export const SidebarContext = createContext<SidebarContextType>({
  isOpened: true,
  setIsOpened: () => {},
})

const SidebarProvider: FC<SidebarProviderProps> = ({ children }) => {
  const [isOpened, setIsOpened] = useState<boolean>(false)


  return (
    <SidebarContext.Provider value={{ isOpened, setIsOpened }}>
      {children}
    </SidebarContext.Provider>
  )
}

export default SidebarProvider
