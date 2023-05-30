import { Fragment } from "react";
import Card from "../../components/card/Card";
import { CardGridContainer, Heading, HeadingWrapper } from "./style";
import { OpacityAnimation } from "../../styles/sharedStyles";

const AdminSection = ({ feedbackData }: any) => {
  const positiveCount = feedbackData?.filter(
    (val: any) => val?.reviewData === "Positive"
  );
  const negativeCount = feedbackData?.filter(
    (val: any) => val?.reviewData === "Negative"
  );
  const neutralCount = feedbackData?.filter(
    (val: any) => val?.reviewData === "Neutral"
  );

  return (
    <OpacityAnimation>
      <HeadingWrapper>
        <Heading color="green">
          Positive &#128515; - {positiveCount?.length || 0}
        </Heading>
        <Heading color="red">
          Negative &#128542; - {negativeCount?.length || 0}
        </Heading>
        <Heading color="orange">
          Neutral &#128528; - {neutralCount?.length || 0}
        </Heading>
      </HeadingWrapper>

      <CardGridContainer>
        {/* {feedbackData?.map((feedback: any, i: number) => (
          <Fragment key={i}>
            <Card
              text={feedback?.inputValue}
              review={feedback?.reviewData}
              inputName={feedback?.inputName}
              isDataSelected={feedback?.isDataSelected}
            />
          </Fragment>
        ))} */}
        {Array.from({ length: 10 }, (_x, v) => (
          <Fragment key={v}>
            <Card
              text="I can see you’re positively impacting your new office. People seem happy to have you on their team."
              review="Positive"
              inputName="Savio Mascarenhas"
              isDataSelected="Frontend Developer"
            />
          </Fragment>
        ))}
      </CardGridContainer>
    </OpacityAnimation>
  );
};

export default AdminSection;
