import { Fragment, useEffect, useState } from "react";
import Card from "../../components/card/Card";
import {
  CardGridContainer,
  ChartContainer,
  ChartMainContainer,
  Heading,
  HeadingWrapper,
} from "./style";
import { OpacityAnimation } from "../../styles/sharedStyles";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";
ChartJS.register(ArcElement, Tooltip, Legend);

interface I_Props {
  _id: string;
  name: string;
  department: string;
  comments: string;
  review: string;
}

const AdminSection = () => {
  const [feedbackData, setFeedbackData] = useState<I_Props[]>([]);

  const positiveCount = feedbackData?.filter(
    (val) => val?.review === "Positive"
  );
  const negativeCount = feedbackData?.filter(
    (val) => val?.review === "Negative"
  );
  const neutralCount = feedbackData?.filter((val) => val?.review === "Neutral");
  const data = {
    labels: ["Positive", "Negative", "Neutral"],
    datasets: [
      {
        label: "FeedBack",
        data: [positiveCount.length, negativeCount.length, neutralCount.length],
        backgroundColor: ["green", "red", "orange"],
      },
    ],
  };

  const getFeedbackData = async () => {
    const result = await axios.get("http://localhost:8081/user/user-feedback");
    setFeedbackData(result?.data);
  };

  useEffect(() => {
    getFeedbackData();
  }, []);

  return (
    <OpacityAnimation>
      <ChartMainContainer>
        <ChartContainer>
          <Doughnut data={data} />
        </ChartContainer>
      </ChartMainContainer>

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
        {feedbackData?.map((feedback) => (
          <Fragment key={feedback?._id}>
            <Card
              text={feedback?.comments}
              review={feedback?.review}
              inputName={feedback?.name}
              isDataSelected={feedback?.department}
            />
          </Fragment>
        ))}
      </CardGridContainer>
    </OpacityAnimation>
  );
};

export default AdminSection;
