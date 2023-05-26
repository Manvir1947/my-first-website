import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AllRoutes from "./allRoutes";

export default function App() {
  return (
    <Router>
      <AllRoutes />
    </Router>
  );
}
// import {
//   createBrowserRouter,
//   Route,
//   createRoutesFromElements,
//   RouterProvider,
// } from "react-router-dom";
// import "./App.css";
// import AllRoutes from "./allRoutes";

// export default function App() {
//   const router = createBrowserRouter(createRoutesFromElements(AllRoutes()));
//   return <RouterProvider router={router} />;
// }
