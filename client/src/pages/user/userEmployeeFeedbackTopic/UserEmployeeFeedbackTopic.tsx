import { useState, Fragment } from "react";
import {
  Container,
  FeedbackTopicContainer,
  FeedbackTopicLayout,
  FeedbackTopicText,
  LoadingSkeleton,
  OpacityAnimation,
  SearchInputField,
  SearchInputFieldWrapper,
  Wrapper,
} from "../../../styles/sharedStyles";
import { useGetUserFeedbackTopic } from "../../../logic/reactQuery/query/useGetUserFeedBackTopic";

import { useNavigate } from "react-router-dom";
import EmptyFound from "../../../components/emptyFound/EmptyFound";
import { useEffect } from "react";
import { Paths } from "../../../routes/path";
import { useAppSelector } from "../../../logic/redux/store/hooks";
import { debounce } from "../../../utils/utils";

const UserEmployeeFeedbackTopic = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState<string>("");
  const { data, isError, isLoading, isFetching } = useGetUserFeedbackTopic(
    searchValue || ""
  );
  const isLoggedDetail = useAppSelector(
    (state) => state.userReducer.isLoggedDetail
  );

  useEffect(() => {
    if (isLoggedDetail[0]?.isAdmin) {
      navigate(Paths.home);
    }
  }, [isLoggedDetail]);

  const handleChange = (e: any) => {
    setSearchValue(e.target.value);
  };

  const handleDebounce = debounce((e: any) => handleChange(e), 1000);

  return (
    <div>
      <Container width="90%">
        <Wrapper>
          <SearchInputFieldWrapper>
            <SearchInputField
              type="text"
              placeholder="Search"
              onChange={handleDebounce}
            />
          </SearchInputFieldWrapper>
          <FeedbackTopicLayout dataLength={data?.length === 0}>
            {!isLoading &&
              !isFetching &&
              data?.map((topic, i) => (
                <OpacityAnimation
                  key={i}
                  onClick={() =>
                    navigate(
                      `/user-employee-feedback-topic/${topic?.topicValue}`
                    )
                  }
                >
                  <FeedbackTopicContainer>
                    <FeedbackTopicText>{topic?.topicName}</FeedbackTopicText>
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
        </Wrapper>
      </Container>
    </div>
  );
};

export default UserEmployeeFeedbackTopic;
