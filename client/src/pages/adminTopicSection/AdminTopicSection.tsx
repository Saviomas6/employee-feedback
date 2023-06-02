import { useState } from "react";
import {
  Container,
  FeedbackTopicContainer,
  FeedbackTopicLayout,
  FeedbackTopicText,
  OpacityAnimation,
  StyledLink,
  Wrapper,
} from "../../styles/sharedStyles";

import { CreateTopicButtonContainer } from "./style";
import Button from "../../components/button/Button";
import CreateTopicModal from "../../components/sharedModal/components/createTopicModal/CreateTopicModal";
import SuccessModal from "../../components/sharedModal/components/successModal/SuccessModal";
import { useGetUserFeedbackTopic } from "../../logic/reactQuery/query/useGetUserFeedBackTopic";
import LoadingSpinner from "../../components/loading/LoadingSpinner";

const AdminTopicSection = () => {
  const [isCreateTopicSuccess, setCreateTopicSuccess] =
    useState<boolean>(false);
  const [isCreateTopicLoading, setCreateTopicLoading] =
    useState<boolean>(false);
  const [isCreateTopicModalOpen, setCreateTopicModalOpen] =
    useState<boolean>(false);

  const { data, isError, isFetching, isLoading } = useGetUserFeedbackTopic();

  return (
    <div>
      <Container>
        <Wrapper>
          <CreateTopicButtonContainer>
            <Button
              text="Create"
              onClick={() => setCreateTopicModalOpen(true)}
            />
          </CreateTopicButtonContainer>
          <FeedbackTopicLayout>
            {!isLoading &&
              !isFetching &&
              data?.map((topic, i) => (
                <StyledLink to={`/adminTopic/${topic?.topicValue}`}>
                  <OpacityAnimation>
                    <FeedbackTopicContainer key={i}>
                      <FeedbackTopicText>{topic?.topicName}</FeedbackTopicText>
                    </FeedbackTopicContainer>
                  </OpacityAnimation>
                </StyledLink>
              ))}
          </FeedbackTopicLayout>
          {isLoading && !isError && isFetching && <LoadingSpinner />}
          {isCreateTopicModalOpen && (
            <CreateTopicModal
              setCreateTopicModalOpen={setCreateTopicModalOpen}
              setCreateTopicLoading={setCreateTopicLoading}
              setCreateTopicSuccess={setCreateTopicSuccess}
            />
          )}
          {isCreateTopicSuccess && (
            <SuccessModal
              heading="Success"
              description="Successfully topic is created"
              isLoading={isCreateTopicLoading}
              setSuccessModal={setCreateTopicSuccess}
            />
          )}
        </Wrapper>
      </Container>
    </div>
  );
};

export default AdminTopicSection;
