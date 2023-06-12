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
import { useState } from "react";
import Button from "../../../components/button/Button";
import LoadingSpinner from "../../../components/loading/LoadingSpinner";
import SuccessModal from "../../../components/sharedModal/components/successModal/SuccessModal";
import CreateAnnouncement from "../../../components/sharedModal/components/createAnnouncement/CreateAnnouncement";
import { useGetUserAnnouncement } from "../../../logic/reactQuery/query/useGetAnnouncement";
import { useDeleteAnnouncement } from "../../../logic/reactQuery/mutation/useDeleteAnnouncement";
import ConfirmDelete from "../../../components/sharedModal/components/confirmDelete/ConfirmDelete";
import EmptyFound from "../../../components/emptyFound/EmptyFound";
import { useNavigate } from "react-router-dom";

const AdminAnnouncementTopic = () => {
  const navigate = useNavigate();
  const [isCreateAnnouncementSuccess, setCreateAnnouncementSuccess] =
    useState<boolean>(false);
  const [isCreateAnnouncementLoading, setCreateAnnouncementLoading] =
    useState<boolean>(false);
  const [isCreateAnnouncementModalOpen, setCreateAnnouncementModalOpen] =
    useState<boolean>(false);
  const [isEditAnnouncementModalOpen, setEditAnnouncementModalOpen] =
    useState<boolean>(false);
  const [isEditAnnouncementSuccess, setEditAnnouncementSuccess] =
    useState<boolean>(false);
  const [isDeleteAnnouncementOpen, setDeleteAnnouncementOpen] =
    useState<boolean>(false);
  const [isEditAnnouncementId, setEditAnnouncementId] = useState<
    string | undefined
  >("");

  const { data, isLoading, isError, isFetching } = useGetUserAnnouncement();
  const { mutateAsync } = useDeleteAnnouncement();

  const handleDeleteTopic = async (e: any) => {
    const dataValues = {
      id: isEditAnnouncementId,
    };
    e.stopPropagation();
    const result = await mutateAsync(dataValues);
    if (result?.data.message) {
      setDeleteAnnouncementOpen(false);
    }
  };

  return (
    <Container>
      <Wrapper>
        <CreateTopicButtonContainer>
          <Button
            text="Create"
            onClick={() => setCreateAnnouncementModalOpen(true)}
          />
        </CreateTopicButtonContainer>

        <FeedbackTopicLayout dataLength={data?.length === 0}>
          {data?.map((value) => (
            <OpacityAnimation
              key={value?._id}
              onClick={() => {
                navigate(`/admin-announcement-topic/${value?._id}`);
              }}
            >
              <FeedbackTopicContainer>
                <FeedbackTopicText>
                  {value?.announcementHeading}
                </FeedbackTopicText>
                <AdminButtonWrapper>
                  <EditButton
                    color="orange"
                    onClick={(
                      e: React.MouseEvent<HTMLButtonElement, MouseEvent>
                    ) => {
                      e.stopPropagation();
                      setEditAnnouncementId(value?._id);
                      setEditAnnouncementModalOpen(true);
                    }}
                  >
                    Edit
                  </EditButton>
                  <EditButton
                    color="red"
                    onClick={(
                      e: React.MouseEvent<HTMLButtonElement, MouseEvent>
                    ) => {
                      e.stopPropagation();
                      setEditAnnouncementId(value?._id);
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
            heading="No Announcement Found!"
            description="You don't have any announcement right now."
          />
        )}
        {isCreateAnnouncementModalOpen && (
          <CreateAnnouncement
            setCreateAnnouncementModalOpen={setCreateAnnouncementModalOpen}
            setCreateAnnouncementLoading={setCreateAnnouncementLoading}
            setCreateAnnouncementSuccess={setCreateAnnouncementSuccess}
          />
        )}
        {isEditAnnouncementModalOpen && (
          <CreateAnnouncement
            isEditable={true}
            isEditAnnouncementId={isEditAnnouncementId}
            setCreateAnnouncementModalOpen={setEditAnnouncementModalOpen}
            setCreateAnnouncementLoading={setCreateAnnouncementLoading}
            setCreateAnnouncementSuccess={setEditAnnouncementSuccess}
          />
        )}
        {isCreateAnnouncementSuccess && (
          <SuccessModal
            heading="Success"
            description="Announcement created successfully"
            isLoading={isCreateAnnouncementLoading}
            handleCloseModal={() => setCreateAnnouncementSuccess(false)}
          />
        )}
        {isEditAnnouncementSuccess && (
          <SuccessModal
            heading="Success"
            description="Announcement edited successfully"
            isLoading={isCreateAnnouncementLoading}
            handleCloseModal={() => setEditAnnouncementSuccess(false)}
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
  );
};

export default AdminAnnouncementTopic;
