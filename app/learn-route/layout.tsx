import { ReactNode } from "react";

const Layout = ({ children }:{ children: ReactNode }) => {
    return <div>
        <p>This is learn route Layout</p>
        { children }
    </div>
}

export default Layout