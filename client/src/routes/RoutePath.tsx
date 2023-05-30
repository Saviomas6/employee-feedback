import { Routes, Route } from "react-router-dom";
import NotFound from "./NotFound";
import { Paths } from "./path";
import Navbar from "../components/navbar/Navbar";
import Home from "../pages/homeSection/HomeSection";
import UserSection from "../pages/userSection/UserSection";
import AdminSection from "../pages/adminSection/AdminSection";

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
    path: Paths.user,
    component: UserSection,
    protected: false,
    title: "User",
  },
  {
    path: Paths.admin,
    component: AdminSection,
    protected: false,
    title: "Admin",
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
    </div>
  );
};
export default RoutePath;
