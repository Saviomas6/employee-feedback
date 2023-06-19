import { useState, useEffect, Fragment } from "react";
import {
  AdminButtonWrapper,
  Container,
  CreateTopicButtonContainer,
  EditButton,
  FeedbackTopicContainer,
  FeedbackTopicLayout,
  FeedbackTopicText,
  LoadingSkeleton,
  OpacityAnimation,
  SearchInputField,
  Wrapper,
} from "../../../styles/sharedStyles";
import Button from "../../../components/button/Button";
import CreateTopicModal from "../../../components/sharedModal/components/createTopicModal/CreateTopicModal";
import SuccessModal from "../../../components/sharedModal/components/successModal/SuccessModal";
import { useGetUserFeedbackTopic } from "../../../logic/reactQuery/query/useGetUserFeedBackTopic";
import { useNavigate } from "react-router-dom";
import { useDeleteFeedbackTopic } from "../../../logic/reactQuery/mutation/useDeleteFeedbackTopic";
import EmptyFound from "../../../components/emptyFound/EmptyFound";
import ConfirmDelete from "../../../components/sharedModal/components/confirmDelete/ConfirmDelete";
import { useAppSelector } from "../../../logic/redux/store/hooks";
import { Paths } from "../../../routes/path";
import { debounce } from "../../../utils/utils";

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
  const [searchValue, setSearchValue] = useState<string>("");

  const { data, isError, isFetching, isLoading } = useGetUserFeedbackTopic(
    searchValue || ""
  );
  const { mutateAsync } = useDeleteFeedbackTopic();
  const isLoggedDetail = useAppSelector(
    (state) => state.userReducer.isLoggedDetail
  );
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

  useEffect(() => {
    if (!isLoggedDetail[0]?.isAdmin) {
      navigate(Paths.home);
    }
  }, [isLoggedDetail]);

  const handleChange = (e: any) => {
    setSearchValue(e.target.value);
  };

  const handleDebounce = debounce((e: any) => handleChange(e), 1000);

  return (
    <Container width="90%">
      <Wrapper>
        <CreateTopicButtonContainer>
          <SearchInputField
            type="text"
            placeholder="Search"
            onChange={handleDebounce}
          />
          <Button text="Create" onClick={() => setCreateTopicModalOpen(true)} />
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
                      onClick={(
                        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
                      ) => {
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
                      onClick={(
                        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
                      ) => {
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
          {isLoading &&
            Array.from({ length: 12 }, (_x, v) => (
              <Fragment key={v}>
                <LoadingSkeleton />
              </Fragment>
            ))}
        </FeedbackTopicLayout>

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
  );
};

export default AdminEmployeeFeedbackTopic;
