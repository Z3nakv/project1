import { Outlet } from "react-router-dom"
import Header from "../components/Header"

const Layout = () => {
  return (
    <>
        <Header />

        <main className="container py-16 mx-auto">
            <Outlet />
        </main>
    </>
  )
}

export default Layout