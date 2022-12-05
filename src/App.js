import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout";
import Assignment from "./pages/Assignment";
import Home from "./pages/Home";

function App() {
  return (
    <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path=":id" element={<Assignment />} />
          </Route>
        )
      )}
    />
  );
}

export default App;
