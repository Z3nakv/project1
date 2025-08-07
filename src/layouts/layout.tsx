import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Modal from "../components/Modal";
import Notification from "../components/Notifcation";

const Layout = () => {

  return (
    <>
        <Header />

        <main className="container py-16 mx-auto">
            <Outlet />
        </main>

        <Modal />
        <Notification />
    </>
  )
}

export default Layout