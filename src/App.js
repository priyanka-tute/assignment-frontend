import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout";
import Assignment from "./pages/Assignment";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";

function App() {
  return (
    <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(
          <Route path="" element={<Layout />} errorElement={<ErrorPage />}>
            <Route path="/" element={<Home />} />
            <Route path="/:course" element={<Assignment />} />
          </Route>
        )
      )}
    />
  );
}

export default App;
