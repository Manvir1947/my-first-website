import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Main from "./main";
import Root from "./root";
import Resume from "./components/myResume/Resume";
import BlogMain from "./components/blog/blogMain";
import BlogHomePage from "./components/blog/blogHomePage";
import TechnologyIndexPage from "./components/blog/technologyBlogs/technologyIndexPage";
import AllCategoryIndexPage from "./components/blog/AllCategorieslist/indexAndEveryCategoryPage/allCategoryIndexPage";
import AllBlogsListPage from "./components/blog/AllCategorieslist/indexAndEveryCategoryPage/allBlogsListPage";
import PhilosophyIndexPage from "./components/blog/AllCategorieslist/philosophyPages/philosophyCategoryBlog";
import PageTransitionAnimation from "./pageTransitionAnimation";
import { AnimatePresence } from "framer-motion";
import BlogPage from "./components/blog/blogPage";
import Wrapper from "./wrapper";

const AllRoutes = () => {
  const location = useLocation();
  const PageTransitionAnimationFun = (element) => {
    return <PageTransitionAnimation>{element}</PageTransitionAnimation>;
  };
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path={"/"} element={<Root />}>
          <Route index element={<Main />} />
          <Route
            path="resume"
            element={PageTransitionAnimationFun(<Resume />)}
          />
          <Route
            path="blog"
            element={PageTransitionAnimationFun(<BlogMain />)}
          />

          <Route path="/blog/blogEnter" element={<BlogHomePage />}>
            <Route
              index
              element={PageTransitionAnimationFun(<AllCategoryIndexPage />)}
            />
            <Route path="all" element={<AllCategoryIndexPage />} />
            <Route
              path="/blog/blogEnter/all/allblogspage"
              element={PageTransitionAnimationFun(
                <AllBlogsListPage
                  title={"All listed Blogs"}
                  listedBlogPage={true}
                />
              )}
            />

            <Route
              path="allblogspage"
              element={PageTransitionAnimationFun(
                <AllBlogsListPage
                  title={"All listed Blogs"}
                  listedBlogPage={true}
                />
              )}
            />
            <Route
              path="philosophy"
              element={PageTransitionAnimationFun(
                <PhilosophyIndexPage
                  listedBlogPage={true}
                  genere={"philosophy"}
                  title={"Philosophy"}
                />
              )}
            />
            <Route
              path="technology"
              element={PageTransitionAnimationFun(
                <TechnologyIndexPage
                  listedBlogPage={true}
                  genere={"technology"}
                  title={"Technology"}
                />
              )}
            />
          </Route>
          <Route
            path=":id"
            element={PageTransitionAnimationFun(
              <Wrapper>
                <BlogPage />
              </Wrapper>
            )}
          />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default AllRoutes;
