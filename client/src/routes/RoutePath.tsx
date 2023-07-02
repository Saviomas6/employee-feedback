import { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Paths } from "./path";
import Home from "../pages/homeSection/HomeSection";
import NotFound from "../components/notFound/NotFound";
import UserEmployeeFeedback from "../pages/user/userEmployeeFeedback/UserEmployeeFeedback";
import AdminEmployeeFeedback from "../pages/admin/adminEmployeeFeedback/AdminEmployeeFeedback";
import UserEmployeeFeedbackTopic from "../pages/user/userEmployeeFeedbackTopic/UserEmployeeFeedbackTopic";
import AdminEmployeeFeedbackTopic from "../pages/admin/adminEmployeeFeedbackTopic/AdminEmployeeFeedbackTopic";
import { useAppDispatch, useAppSelector } from "../logic/redux/store/hooks";
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
import { setLoggedDetail, setLoggedIn } from "../logic/redux/action/action";
import Layout from "../components/layout/Layout";
import axios from "axios";

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
  const location = useLocation();
  const dispatch = useAppDispatch();
  const { data, isLoading, isFetching } = useGetUserDetail();
  const isLoggedIn = useAppSelector((state) => state.userReducer.isLoggedIn);

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

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    dispatch(setLoggedIn(false));
    dispatch(setLoggedDetail([]));
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const expirationTime = localStorage.getItem("expirationTime");
    if (token && expirationTime) {
      const currentTime = Date.now();
      if (currentTime < Number(expirationTime)) {
        dispatch(setLoggedIn(true));
        dispatch(
          setLoggedDetail([
            {
              name: data?.name,
              email: data?.email,
              isAdmin: data?.isAdmin,
            },
          ])
        );
      } else {
        handleLogout();
      }
    }
  }, [location, data]);

  const handleLoginData = async () => {
    const tokenData = localStorage.getItem("token");
    try {
      if (tokenData) {
        const result = await axios.get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenData}`,
          {
            headers: {
              Authorization: `Bearer ${tokenData}`,
              Accept: "application/json",
            },
          }
        );
        console.log(result);
        
        dispatch(setLoggedIn(true));
        dispatch(
          setLoggedDetail([
            {
              name: result?.data?.name,
              email: result?.data?.email,
              isAdmin: false,
              profileImage: result?.data?.picture,
            },
          ])
        );
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    handleLoginData();
  }, [isLoggedIn]);

  return (
    <>
      {isLoading || isFetching ? (
        <LoadingSpinner />
      ) : (
        <Layout>
          <Routes>{routes.map(mapRoutes)}</Routes>
        </Layout>
      )}
    </>
  );
};
export default RoutePath;
