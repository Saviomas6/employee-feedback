import { useState } from "react";
import {
  AdminButtonWrapper,
  Container,
  CreateTopicButtonContainer,
  EditButton,
  FeedbackTopicContainer,
  FeedbackTopicLayout,
  FeedbackTopicText,
  OpacityAnimation,
  Wrapper,
} from "../../../styles/sharedStyles";

import Button from "../../../components/button/Button";
import CreateTopicModal from "../../../components/sharedModal/components/createTopicModal/CreateTopicModal";
import SuccessModal from "../../../components/sharedModal/components/successModal/SuccessModal";
import { useGetUserFeedbackTopic } from "../../../logic/reactQuery/query/useGetUserFeedBackTopic";
import LoadingSpinner from "../../../components/loading/LoadingSpinner";
import { useNavigate } from "react-router-dom";
import { useDeleteFeedbackTopic } from "../../../logic/reactQuery/mutation/useDeleteFeedbackTopic";
import EmptyFound from "../../../components/emptyFound/EmptyFound";
import ConfirmDelete from "../../../components/sharedModal/components/confirmDelete/ConfirmDelete";
const AdminEmployeeFeedbackTopic = () => {
  const navigate = useNavigate();
  const [isCreateTopicSuccess, setCreateTopicSuccess] =
    useState<boolean>(false);
  const [isCreateTopicLoading, setCreateTopicLoading] =
    useState<boolean>(false);
  const [isCreateTopicModalOpen, setCreateTopicModalOpen] =
    useState<boolean>(false);
  const [isEditTopicModalOpen, setEditTopicModalOpen] =
    useState<boolean>(false);
  const [isEditTopicSuccess, setEditTopicSuccess] = useState<boolean>(false);
  const [isDeleteAnnouncementOpen, setDeleteAnnouncementOpen] =
    useState<boolean>(false);
  const [isEditTopicName, setEditTopicName] = useState<string | undefined>("");
  const [isEditTopicId, setEditTopicId] = useState<string | undefined>("");
  const { data, isError, isFetching, isLoading } = useGetUserFeedbackTopic();
  const { mutateAsync } = useDeleteFeedbackTopic();

  const handleDeleteTopic = async (e: any) => {
    const dataValues = {
      topicName: isEditTopicId,
    };
    e.stopPropagation();
    const result = await mutateAsync(dataValues);
    if (result?.data?.message) {
      setDeleteAnnouncementOpen(false);
    }
  };

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

          <FeedbackTopicLayout dataLength={data?.length === 0}>
            {!isLoading &&
              !isFetching &&
              data?.map((topic, i) => (
                <OpacityAnimation
                  onClick={() => {
                    navigate(
                      `/admin-employee-feedback-topic/${topic?.topicValue}`
                    );
                  }}
                  key={i}
                >
                  <FeedbackTopicContainer>
                    <FeedbackTopicText>{topic?.topicName}</FeedbackTopicText>
                    <AdminButtonWrapper>
                      <EditButton
                        color="orange"
                        onClick={(e: any) => {
                          e.stopPropagation();
                          setEditTopicName(topic?.topicName);
                          setEditTopicId(topic?._id);
                          setEditTopicModalOpen(true);
                        }}
                      >
                        Edit
                      </EditButton>
                      <EditButton
                        color="red"
                        onClick={(e: any) => {
                          e.stopPropagation();
                          setEditTopicId(
                            topic?.topicName.replaceAll(" ", "-").toLowerCase()
                          );
                          setDeleteAnnouncementOpen(true);
                        }}
                      >
                        Delete
                      </EditButton>
                    </AdminButtonWrapper>
                  </FeedbackTopicContainer>
                </OpacityAnimation>
              ))}
          </FeedbackTopicLayout>
          {isLoading && !isError && isFetching && <LoadingSpinner />}
          {!isLoading && !isError && !isFetching && data?.length === 0 && (
            <EmptyFound
              heading="No Feedback Found!"
              description="You don't have any feedback right now."
            />
          )}
          {isCreateTopicModalOpen && (
            <CreateTopicModal
              setCreateTopicModalOpen={setCreateTopicModalOpen}
              setCreateTopicLoading={setCreateTopicLoading}
              setCreateTopicSuccess={setCreateTopicSuccess}
            />
          )}
          {isEditTopicModalOpen && (
            <CreateTopicModal
              isEditable={true}
              isEditTopicName={isEditTopicName}
              isEditTopicId={isEditTopicId}
              setCreateTopicModalOpen={setEditTopicModalOpen}
              setCreateTopicLoading={setCreateTopicLoading}
              setCreateTopicSuccess={setEditTopicSuccess}
            />
          )}
          {isCreateTopicSuccess && (
            <SuccessModal
              heading="Success"
              description="Topic created successfully"
              isLoading={isCreateTopicLoading}
              handleCloseModal={() => setCreateTopicSuccess(false)}
            />
          )}
          {isEditTopicSuccess && (
            <SuccessModal
              heading="Success"
              description="Topic edited successfully"
              isLoading={isCreateTopicLoading}
              handleCloseModal={() => setEditTopicSuccess(false)}
            />
          )}
          {isDeleteAnnouncementOpen && (
            <ConfirmDelete
              heading="Are You Sure?"
              description="Do you really want to delete these record?"
              handleCloseModal={() => setDeleteAnnouncementOpen(false)}
              handleDelete={(e: any) => handleDeleteTopic(e)}
            />
          )}
        </Wrapper>
      </Container>
    </div>
  );
};

export default AdminEmployeeFeedbackTopic;
