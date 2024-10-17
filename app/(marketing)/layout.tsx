import { ReactNode } from "react"

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      This is Marketing layout.
      { children }
    </div>
  )
}

export default Layout