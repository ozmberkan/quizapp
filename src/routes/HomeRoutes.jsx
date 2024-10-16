import Layout from "~/layouts/Layout";
import Home from "~/pages/Home/Home";
import Questions from "~/pages/Questions/Questions";
import Results from "~/pages/Results/Results";

export const HomeRoutes = {
  path: "/",
  element: <Layout />,
  children: [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/questions",
      element: <Questions />,
    },
    {
      path: "/results",
      element: <Results />,
    },
  ],
};
