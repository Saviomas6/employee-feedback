import { FooterContainer, FooterContent } from "./style";
import { Container } from "../../styles/sharedStyles";

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <FooterContent>
          &copy; Rapid Innovation. All rights reserved.
        </FooterContent>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
