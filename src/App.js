import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Main from "./main";
import Root from "./root";
import MyResume from "./components/myResume/myResume";
import BlogMain from "./components/blog/blogMain";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={"/"} element={<Root />}>
        <Route index element={<Main />} />
        <Route path="resume" element={<MyResume />} />
        <Route path="blog" element={<BlogMain />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}
