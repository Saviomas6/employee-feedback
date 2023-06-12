import { HomepageCardContainer, HomepageCardHeading } from "../../style";
import HomePageCard from "../../../../components/homepageCard/HomePageCard";

const EasyStepSection = () => {
  return (
    <div>
      <HomepageCardHeading>Easy Steps</HomepageCardHeading>
      <HomepageCardContainer>
        <HomePageCard
          color="#ff008e"
          title="Register"
          description="To get started on our platform, you need to register an account. The registration process is quick and easy. Simply click on the Register button located at the top right corner of the homepage."
        />
        <HomePageCard
          color="#ff008e"
          title="Sign In"
          description="After successfully registering your account, you can now sign in to access the full features of our platform. On the homepage, locate the Sign In button and click on it."
        />{" "}
        <HomePageCard
          color="#ff008e"
          title="Feedback"
          description="We value your feedback and want to hear from you! Once you've signed in, you can provide feedback on your experience using our platform."
        />
      </HomepageCardContainer>
    </div>
  );
};

export default EasyStepSection;
