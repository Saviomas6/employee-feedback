import RoutePath from "./routes/RoutePath";
import { OpacityAnimation } from "./styles/sharedStyles";

const App = () => {
  return (
    <OpacityAnimation>
      <RoutePath />
    </OpacityAnimation>
  );
};

export default App;
