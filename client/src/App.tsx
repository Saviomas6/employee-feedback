import { useEffect } from "react";
import { setLoggedDetail, setLoggedIn } from "./logic/redux/action/action";
import { useAppDispatch, useAppSelector } from "./logic/redux/store/hooks";
import RoutePath from "./routes/RoutePath";
import { OpacityAnimation } from "./styles/sharedStyles";
import { decodeToken } from "./utils/utils";

const App = () => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector((state) => state.userReducer.isLoggedIn);
  console.log("isLoggedIn", isLoggedIn);
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
      const decoded: any = decodeToken(String(token));
      const currentTime = Date.now();
      if (currentTime < Number(expirationTime)) {
        dispatch(setLoggedIn(true));
        dispatch(
          setLoggedDetail([
            {
              name: decoded?.decodedToken?.name,
              email: decoded?.decodedToken?.email,
            },
          ])
        );
      } else {
        handleLogout();
      }
    }
  }, [location]);
  return (
    <OpacityAnimation>
      <RoutePath />
    </OpacityAnimation>
  );
};

export default App;
