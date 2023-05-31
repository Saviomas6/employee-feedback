import RoutePath from "./routes/RoutePath";
import { Container, OpacityAnimation } from "./styles/sharedStyles";

const App = () => {
  return (
    <Container width="90%">
      <OpacityAnimation>
        <RoutePath />
      </OpacityAnimation>
    </Container>
  );
};

export default App;
