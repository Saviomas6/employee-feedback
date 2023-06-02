import { Fragment } from "react";
import Card from "../../components/card/Card";
import {
  CardGridContainer,
  ChartContainer,
  ChartMainContainer,
  Heading,
  HeadingWrapper,
} from "./style";
import {
  Container,
  OpacityAnimation,
  Wrapper,
} from "../../styles/sharedStyles";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

import { useParams } from "react-router-dom";

import { useGetUserFeedbackById } from "../../logic/reactQuery/query/useGetUserFeedbackById";
import LoadingSpinner from "../../components/loading/LoadingSpinner";
import EmptyFound from "../../components/emptyFound/EmptyFound";
ChartJS.register(ArcElement, Tooltip, Legend);

const AdminSection = () => {
  const { id } = useParams();
  const {
    data: getUserFeedbackById,
    isError,
    isFetching,
    isLoading,
  } = useGetUserFeedbackById(id && id);
  const positiveCount: any = getUserFeedbackById?.filter(
    (val) => val?.review === "Positive"
  );
  const negativeCount: any = getUserFeedbackById?.filter(
    (val) => val?.review === "Negative"
  );
  const neutralCount: any = getUserFeedbackById?.filter(
    (val) => val?.review === "Neutral"
  );
  const data = {
    labels: ["Positive", "Negative", "Neutral"],
    datasets: [
      {
        label: "FeedBack",
        data: [
          positiveCount?.length,
          negativeCount?.length,
          neutralCount?.length,
        ],
        backgroundColor: ["green", "red", "orange"],
      },
    ],
  };

  return (
    <OpacityAnimation>
      <Container>
        <Wrapper>
          {isLoading && <LoadingSpinner />}
          {!isLoading &&
            !isError &&
            !isFetching &&
            getUserFeedbackById?.length === 0 && <EmptyFound />}
          {!isLoading &&
            !isError &&
            !isFetching &&
            getUserFeedbackById?.length !== 0 && (
              <>
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
                  {!isLoading &&
                    !isError &&
                    !isFetching &&
                    getUserFeedbackById?.map((feedback) => (
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
              </>
            )}
        </Wrapper>
      </Container>
    </OpacityAnimation>
  );
};

export default AdminSection;
