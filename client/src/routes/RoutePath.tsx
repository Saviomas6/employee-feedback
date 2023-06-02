import { Routes, Route } from "react-router-dom";

import { Paths } from "./path";
import Navbar from "../components/navbar/Navbar";
import Home from "../pages/homeSection/HomeSection";
import UserSection from "../pages/userSection/UserSection";
import AdminSection from "../pages/adminSection/AdminSection";
import Footer from "../components/footer/Footer";
import FeedBackTopic from "../pages/feedbackTopic/FeedBackTopic";
import AdminTopicSection from "../pages/adminTopicSection/AdminTopicSection";
import NotFound from "../components/notFound/NotFound";

// const getRouteRenderWithAuth = (route: RouteDefinition, i: number) => {
//   return () => <route.component />;
// };

export interface RouteDefinition {
  path: string;
  component: any;
  routes?: RouteDefinition[];
  title?: string;
  protected?: boolean;
}

const NotFoundRoute: RouteDefinition = {
  path: "*",
  component: NotFound,
  protected: false,
  title: "",
};

export const routes: RouteDefinition[] = [
  {
    path: Paths.home,
    component: Home,
    protected: false,
    title: "Home",
  },
  {
    path: Paths.feedbackTopicById,
    component: UserSection,
    protected: false,
    title: "User Feedback",
  },
  {
    path: Paths.feedbackTopic,
    component: FeedBackTopic,
    protected: false,
    title: "Feedback Topic",
  },
  {
    path: Paths.adminTopic,
    component: AdminTopicSection,
    protected: false,
    title: "Admin Topic",
  },
  {
    path: Paths.adminTopicById,
    component: AdminSection,
    protected: false,
    title: "Admin Topic",
  },
].concat(NotFoundRoute as any);

const RoutePath = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* <Route path="" element={<Navigate replace={true} to={Paths.home} />} /> */}
        {routes.map((route, i) => {
          // const render = getRouteRenderWithAuth(route, i);
          // const rest = { render };
          return (
            <Route key={i} path={route.path} element={<route.component />} />
          );
        })}
      </Routes>
      <Footer />
    </div>
  );
};
export default RoutePath;
