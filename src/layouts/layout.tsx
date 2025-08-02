import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import { useAppStore } from "../stores/useAppStore"
import Modal from "../components/Modal";

const Layout = () => {

  const modal = useAppStore(state => state.modal);

  return (
    <>
        <Header />

        <main className="container py-16 mx-auto">
            <Outlet />
        </main>

        {
          modal && (
            <Modal />
          )
        }
    </>
  )
}

export default Layout