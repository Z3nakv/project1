import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./layouts/layout";
import IndexPage from "./views/IndexPage";
import FavoritesPage from "./views/FavoritesPage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes >
          <Route element={<Layout />}>
            <Route path="/" element={<IndexPage />} />
            <Route path="/favoritos" element={<FavoritesPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App  