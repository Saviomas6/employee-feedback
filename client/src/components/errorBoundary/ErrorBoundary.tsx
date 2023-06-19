import { Component, ErrorInfo, ReactNode } from "react";
import {
  ErrorBoundaryButtonWrapper,
  ErrorBoundaryContainer,
  ErrorBoundaryHeading,
  ErrorBoundaryLogo,
  ErrorBoundaryLogoContainer,
} from "./style";
import Button from "../button/Button";
import errorBoundary from "../../assets/errorBoundary.json";
import Lottie from "react-lottie";
import { Container } from "../../styles/sharedStyles";
interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    const defaultErrorOptions = {
      loop: true,
      autoplay: true,
      animationData: errorBoundary,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };
    return this.state.hasError ? (
      <Container width="90%">
        <ErrorBoundaryContainer>
          <ErrorBoundaryLogoContainer>
            <ErrorBoundaryLogo>
              <Lottie options={defaultErrorOptions} />
            </ErrorBoundaryLogo>
          </ErrorBoundaryLogoContainer>
          <ErrorBoundaryHeading>Woops!</ErrorBoundaryHeading>
          <ErrorBoundaryHeading>Something went wrong!</ErrorBoundaryHeading>
          <ErrorBoundaryButtonWrapper>
            <Button text="HOME" onClick={() => (window.location.href = "/")} />
          </ErrorBoundaryButtonWrapper>
        </ErrorBoundaryContainer>
      </Container>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
