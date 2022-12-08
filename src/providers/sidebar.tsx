import { createContext, FC, useCallback, useState } from 'react'

type SidebarContextType = {
  isOpened: boolean
  toggle: () => void
}

export type SidebarProviderProps = {
  children: React.ReactNode
}

export const SidebarContext = createContext<SidebarContextType>({
  isOpened: true,
  toggle: () => {},
})

const SidebarProvider: FC<SidebarProviderProps> = ({ children }) => {
  const [isOpened, setIsOpened] = useState<boolean>(false)

  const toggle = () => setIsOpened(() => !isOpened)

  return (
    <SidebarContext.Provider value={{ isOpened, toggle }}>
      {children}
    </SidebarContext.Provider>
  )
}

export default SidebarProvider
