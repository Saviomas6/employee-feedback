import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
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
import { useGetUserAnnouncement } from "../../../logic/reactQuery/query/useGetAnnouncement";
import EmptyFound from "../../../components/emptyFound/EmptyFound";
import { debounce } from "../../../utils/utils";

const UserAnnouncementTopic = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState<string>("");
  const { data, isError, isLoading, isFetching } = useGetUserAnnouncement(
    searchValue || ""
  );

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
                    navigate(`/user-announcement-topic/${topic?._id}`)
                  }
                >
                  <FeedbackTopicContainer>
                    <FeedbackTopicText>
                      {topic?.announcementHeading}
                    </FeedbackTopicText>
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
              heading="No Announcement Found!"
              description="You don't have any announcement right now."
            />
          )}
        </Wrapper>
      </Container>
    </div>
  );
};

export default UserAnnouncementTopic;
