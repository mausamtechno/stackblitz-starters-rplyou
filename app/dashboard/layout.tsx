import { ReactNode } from "react"

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      This is dashboard layout.
      { children }
    </div>
  )
}

export default Layout