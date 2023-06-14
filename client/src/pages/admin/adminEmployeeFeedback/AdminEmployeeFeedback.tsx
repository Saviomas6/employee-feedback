import { Fragment, useEffect } from "react";
import Card from "../../../components/card/Card";
import * as Styled from "./style";
import {
  Container,
  OpacityAnimation,
  Wrapper,
} from "../../../styles/sharedStyles";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useNavigate, useParams } from "react-router-dom";
import { useGetUserFeedbackById } from "../../../logic/reactQuery/query/useGetUserFeedbackById";
import LoadingSpinner from "../../../components/loading/LoadingSpinner";
import EmptyFound from "../../../components/emptyFound/EmptyFound";
import { useAppSelector } from "../../../logic/redux/store/hooks";
import { Paths } from "../../../routes/path";
ChartJS.register(ArcElement, Tooltip, Legend);

const AdminEmployeeFeedback = () => {
  const navigate = useNavigate();
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

  const isLoggedDetail = useAppSelector(
    (state) => state.userReducer.isLoggedDetail
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

  useEffect(() => {
    if (!isLoggedDetail[0]?.isAdmin) {
      navigate(Paths.home);
    }
  }, [isLoggedDetail]);

  return (
    <>
      <OpacityAnimation>
        <Container width="90%">
          <Wrapper>
            {isLoading && <LoadingSpinner />}
            {!isLoading &&
              !isError &&
              !isFetching &&
              getUserFeedbackById?.length === 0 && (
                <EmptyFound
                  heading="No Feedback Found!"
                  description="You don't have any feedback right now."
                />
              )}
            {!isLoading &&
              !isError &&
              !isFetching &&
              getUserFeedbackById?.length !== 0 && (
                <>
                  <Styled.ChartMainContainer>
                    <Styled.ChartContainer>
                      <Doughnut data={data} />
                    </Styled.ChartContainer>
                  </Styled.ChartMainContainer>

                  <Styled.HeadingWrapper>
                    <Styled.Heading color="green">
                      Positive &#128515; - {positiveCount?.length || 0}
                    </Styled.Heading>
                    <Styled.Heading color="red">
                      Negative &#128542; - {negativeCount?.length || 0}
                    </Styled.Heading>
                    <Styled.Heading color="orange">
                      Neutral &#128528; - {neutralCount?.length || 0}
                    </Styled.Heading>
                  </Styled.HeadingWrapper>

                  <Styled.CardGridContainer>
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
                            anonymous={feedback?.anonymous}
                          />
                        </Fragment>
                      ))}
                  </Styled.CardGridContainer>
                </>
              )}
          </Wrapper>
        </Container>
      </OpacityAnimation>
    </>
  );
};

export default AdminEmployeeFeedback;
