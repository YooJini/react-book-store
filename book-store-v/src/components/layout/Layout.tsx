import { ReactNode } from "react";
import Footer from "../common/Footer"
import Header from "../common/Header"

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({children} : LayoutProps) => {
  return (
    <>
    <Header />
    <main>{children}</main>
    <Footer />
    </>
  )
}

export default Layout