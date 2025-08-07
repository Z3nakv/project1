import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/layout";
import { lazy, Suspense } from "react";

const IndexPage = lazy(() => import("./views/IndexPage"));
const FavoritesPage = lazy(() => import("./views/FavoritesPage"));
const GenerateAI = lazy(() => import("./views/GenerateAI"));

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route
              path="/"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <IndexPage />
                </Suspense>
              }
              index
            />
            <Route
              path="/favoritos"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <FavoritesPage />
                </Suspense>
              }
            />
            <Route
              path="/generate"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <GenerateAI />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
