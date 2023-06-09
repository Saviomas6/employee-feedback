import {
  HomePageImageContainer,
  HomePageTitle,
  HomepageCardMainContainer,
} from "./style";

interface I_Props {
  color: string;
  title: string;
  description: string;
}

const HomePageCard = ({ color, title, description }: I_Props) => {
  return (
    <HomepageCardMainContainer>
      <HomePageImageContainer color={color}></HomePageImageContainer>
      <HomePageTitle>{title}</HomePageTitle>
      <div>{description}</div>
    </HomepageCardMainContainer>
  );
};

export default HomePageCard;
