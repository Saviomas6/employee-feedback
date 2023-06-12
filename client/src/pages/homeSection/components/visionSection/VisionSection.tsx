import {
  HomepageVisionLeftBoxContainer,
  HomepageVisionLeftContainer,
  HomepageVisionLeftImageContainer,
  HomepageVisionMainContainer,
  HomepageVisionRightContainer,
} from "../../style";
import Lottie from "react-lottie";
import vision from "../../../../assets/vision.json";
const VisionSection = () => {
  const defaultVisionOptions = {
    loop: true,
    autoplay: true,
    animationData: vision,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const data = [
    {
      id: 1,
      heading: "WHO WE ARE?",
      description:
        " At Rapid Innovation, we are a dedicated team working towards creating a platform for open communication. We believe in the power of feedback to drive positive change and foster growth.",
    },
    {
      id: 2,
      heading: "OUR MISSION",
      description:
        " Our mission is to provide a seamless feedback experience that empowers individuals to share their thoughts, ideas, and opinions. We strive to create an inclusive and collaborative environment where every voice is heard and valued.",
    },
    {
      id: 3,
      heading: "OUR VISION",
      description:
        " At Rapid Innovation, our vision is to build a feedback portal that revolutionizes the way feedback is collected and utilized. We aim to foster a culture of continuous improvement and innovation, enabling organizations to make data-driven decisions that lead to meaningful change.",
    },
  ];

  return (
    <HomepageVisionMainContainer>
      <HomepageVisionLeftContainer>
        <HomepageVisionLeftImageContainer>
          <Lottie options={defaultVisionOptions} />
        </HomepageVisionLeftImageContainer>
      </HomepageVisionLeftContainer>
      <HomepageVisionRightContainer>
        {data.map((value) => (
          <HomepageVisionLeftBoxContainer key={value?.id}>
            <h2>{value?.heading}</h2>
            {value?.description}
          </HomepageVisionLeftBoxContainer>
        ))}
      </HomepageVisionRightContainer>
    </HomepageVisionMainContainer>
  );
};

export default VisionSection;
