import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout";
import LoginProvider from "./components/LoginProvider";
import Assignment from "./pages/Assignment";
import AssignmentLibrary from "./pages/AssignmentLibrary";
import AssignmentLibratyCourse from "./pages/AssignmentLibratyCourse";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";

function App() {
  return (
    <LoginProvider>
      <RouterProvider
        router={createBrowserRouter(
          createRoutesFromElements(
            <Route path="" element={<Layout />} errorElement={<ErrorPage />}>
              <Route path="/mentor/">
                <Route path="" element={<Home />} />
                <Route path="assignments" element={<AssignmentLibrary />} />
                <Route
                  path="assignments/:course"
                  element={<AssignmentLibratyCourse />}
                />
                <Route path=":course" element={<Assignment />} />
              </Route>
            </Route>
          )
        )}
      />
    </LoginProvider>
  );
}

export default App;
