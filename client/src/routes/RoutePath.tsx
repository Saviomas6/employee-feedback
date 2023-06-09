import { Routes, Route, Navigate } from "react-router-dom";
import { Paths } from "./path";
import Navbar from "../components/navbar/Navbar";
import Home from "../pages/homeSection/HomeSection";
import Footer from "../components/footer/Footer";
import NotFound from "../components/notFound/NotFound";
import UserEmployeeFeedback from "../pages/user/userEmployeeFeedback/UserEmployeeFeedback";
import AdminEmployeeFeedback from "../pages/admin/adminEmployeeFeedback/AdminEmployeeFeedback";
import UserEmployeeFeedbackTopic from "../pages/user/userEmployeeFeedbackTopic/UserEmployeeFeedbackTopic";
import AdminEmployeeFeedbackTopic from "../pages/admin/adminEmployeeFeedbackTopic/AdminEmployeeFeedbackTopic";
import { useAppSelector } from "../logic/redux/store/hooks";
import SignUp from "../pages/signUp/SignUp";
import SignIn from "../pages/signIn/SignIn";
import UserProjectFeedback from "../pages/user/userProjectFeedback/UserProjectFeedback";
import UserProjectFeedbackTopic from "../pages/user/userProjectFeedbackTopic/UserProjectFeedbackTopic";
import AdminProjectFeedbackTopic from "../pages/admin/adminProjectFeedbackTopic/AdminProjectFeedbackTopic";
import AdminProjectFeedback from "../pages/admin/adminProjectFeedback/AdminProjectFeedback";
import UserAnnouncementTopic from "../pages/user/userAnnouncementTopic/UserAnnouncementTopic";
import UserAnnouncement from "../pages/user/userAnnouncement/UserAnnouncement";
import AdminAnnouncementTopic from "../pages/admin/adminAnnouncementTopic/AdminAnnouncementTopic";
import AdminAnnouncement from "../pages/admin/adminAnnouncement/AdminAnnouncement";
import { useGetUserDetail } from "../logic/reactQuery/query/useUserDetails";
import LoadingSpinner from "../components/loading/LoadingSpinner";

// const getRouteRenderWithAuth = (route: RouteDefinition, i: number) => {
//   return () => <route.component />;
// };

export interface RouteDefinition {
  element: any;
  routes?: RouteDefinition[];
  path: string;
  protected?: boolean;
  redirect?: any;
  title?: string;
  requires?: any;
  pathType?: number;
}

const NotFoundRoute: RouteDefinition = {
  path: "*",
  element: NotFound,
  protected: false,
  title: "",
};

export const routes: RouteDefinition[] = [
  {
    path: Paths.signUp,
    element: SignUp,
    protected: false,
    title: "Sign Up",
  },
  {
    path: Paths.signIn,
    element: SignIn,
    protected: false,
    title: "Sign In",
  },
  {
    path: Paths.home,
    element: Home,
    protected: false,
    title: "Home",
  },
  {
    path: Paths.userEmployeeFeedbackTopic,
    element: UserEmployeeFeedbackTopic,
    protected: true,
    redirect: "/",
    title: "User Feedback",
  },
  {
    path: Paths.userEmployeeFeedbackTopicById,
    element: UserEmployeeFeedback,
    protected: true,
    title: "User Feedback ID",
  },
  {
    path: Paths.adminEmployeeFeedbackTopic,
    element: AdminEmployeeFeedbackTopic,
    protected: true,
    title: "Admin Feedback",
  },
  {
    path: Paths.adminEmployeeFeedbackTopicById,
    element: AdminEmployeeFeedback,
    protected: true,
    title: "Admin Feedback ID",
  },
  {
    path: Paths.userProjectFeedbackTopic,
    element: UserProjectFeedbackTopic,
    protected: true,
    title: "User Project Feedback",
  },
  {
    path: Paths.userProjectFeedbackTopicById,
    element: UserProjectFeedback,
    protected: true,
    title: "User Project Feedback ID",
  },
  {
    path: Paths.adminProjectFeedbackTopic,
    element: AdminProjectFeedbackTopic,
    protected: true,
    title: "Admin Project Feedback",
  },
  {
    path: Paths.adminProjectFeedbackTopicById,
    element: AdminProjectFeedback,
    protected: true,
    title: "Admin Project Feedback ID",
  },

  {
    path: Paths.userAnnouncementTopic,
    element: UserAnnouncementTopic,
    protected: true,
    title: "User Announcement",
  },
  {
    path: Paths.userAnnouncementTopicById,
    element: UserAnnouncement,
    protected: true,
    title: "User Announcement ID",
  },
  {
    path: Paths.adminAnnouncementTopic,
    element: AdminAnnouncementTopic,
    protected: true,
    title: "Admin Announcement",
  },
  {
    path: Paths.adminAnnouncementTopicById,
    element: AdminAnnouncement,
    protected: true,
    title: "Admin Announcement ID",
  },
].concat(NotFoundRoute as any);

const RoutePath = () => {
  const { data, isLoading, isFetching } = useGetUserDetail();
  const isLoggedIn = useAppSelector((state) => state.userReducer.isLoggedIn);
  console.log("isLoggedIn", isLoggedIn);

  function getRouteRenderWithAuth(isLoggedIn: boolean, route: RouteDefinition) {
    const RouteComponent = route.requires
      ? route.requires(route.element)
      : route.element;

    if (!isLoggedIn && !route.protected) {
      return { element: <RouteComponent /> };
    } else if (!isLoggedIn && route.protected) {
      return { element: <Navigate to={Paths.signIn} /> };
    } else if (isLoggedIn === route.protected) {
      return { element: <RouteComponent /> };
    } else if (isLoggedIn && route.path === "*") {
      return { element: <RouteComponent /> };
    } else if (isLoggedIn) {
      return { element: <RouteComponent /> };
    }
  }

  const mapRoutes = (route: RouteDefinition, i: number) => {
    const render = getRouteRenderWithAuth(isLoggedIn, route);
    return <Route key={i} path={route.path} {...render} />;
  };

  return (
    <div>
      {isLoading || isFetching ? (
        <LoadingSpinner height="100vh" />
      ) : (
        <>
          <Navbar isAdmin={data?.isAdmin} />
          <Routes>{routes.map(mapRoutes)}</Routes>
          <Footer />
        </>
      )}
    </div>
  );
};
export default RoutePath;
