import {
  Container,
  ErrorMessageText,
  OpacityAnimation,
  Wrapper,
} from "../../../styles/sharedStyles";
import * as Styled from "./style";
import { OpenAI } from "langchain/llms/openai";
import { PromptTemplate } from "langchain/prompts";
import { LLMChain } from "langchain/chains";
import Button from "../../../components/button/Button";
import FilterDropDown from "../../../components/dropDown/FilterDropDown";
import { useEffect, useState } from "react";
import SuccessModal from "../../../components/sharedModal/components/successModal/SuccessModal";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import { useCreateFeedbackFormMutation } from "../../../logic/reactQuery/mutation/useCreateFeedbackForm";
import { Paths } from "../../../routes/path";
import ToggleButton from "../../../components/toggleButton/ToggleButton";
import { useAppSelector } from "../../../logic/redux/store/hooks";
import ErrorModal from "../../../components/sharedModal/components/errorModal/ErrorModal";

const dropDown = [
  {
    id: 1,
    label: "Business Analyst",
    value: "business analyst",
  },
  {
    id: 2,
    label: "Frontend Developer",
    value: "frontend",
  },
  {
    id: 3,
    label: "Backend Developer",
    value: "backend",
  },
  {
    id: 4,
    label: "UI/UX Designer",
    value: "designer",
  },
  {
    id: 5,
    label: "Quality Analyst",
    value: "quality analyst",
  },
  {
    id: 6,
    label: "Blockchain Developer",
    value: "blockchain",
  },
  {
    id: 7,
    label: "Devops",
    value: "devops",
  },
  {
    id: 8,
    label: "Project Manager",
    value: "projectManager",
  },
];

const UserEmployeeFeedback = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { mutateAsync: createFeedbackForm, error }: any =
    useCreateFeedbackFormMutation();
  const [isDropDownOpen, setDropDownOpen] = useState<boolean>(false);
  const [isAnonymous, setAnonymous] = useState<boolean>(false);
  const [isDataSelected, setDataSelected] =
    useState<string>("Business Analyst");
  const [isSuccessModal, setSuccessModal] = useState<boolean>(false);
  const [isErrorModal, setErrorModal] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const isLoggedDetail = useAppSelector(
    (state) => state.userReducer.isLoggedDetail
  );

  const initialValue = {
    comments: "",
    anonymous: false,
  };

  const handleSubmitForm = async (values: any, { resetForm }: any) => {
    try {
      setLoading(true);
      setSuccessModal(true);
      const llm = new OpenAI({
        openAIApiKey: import.meta.env.VITE_API_KEY,
        temperature: 0.9,
      });

      const template = new PromptTemplate({
        inputVariables: ["feedback"],
        template: `Categorize the sentiment of the following employee feedback as positive, negative, or neutral: ${values.comments}
          Categorize the sentiment as:
          - Positive: if the feedback expresses positive sentiment, appreciation, or encouragement.
          - Negative: if the feedback expresses negative sentiment, criticism, or dissatisfaction.
          - Neutral: if the feedback does not lean towards either positive or negative sentiment and remains objective.
                    `,
      });

      const codeChain = new LLMChain({
        llm,
        prompt: template,
        outputKey: "review",
      });

      const response = await codeChain.call(values.comments);

      const reviewData = response?.review
        ?.trim()
        ?.toLowerCase()
        .includes("positive")
        ? "Positive"
        : response?.review?.trim()?.toLowerCase().includes("negative")
        ? "Negative"
        : "Neutral";

      if (reviewData) {
        const data = {
          name: isLoggedDetail[0]?.name,
          email: isLoggedDetail[0]?.email,
          department: isDataSelected,
          comments: values.comments,
          review: reviewData,
          topic: id,
          anonymous: values.anonymous,
        };
        const result = await createFeedbackForm(data);
        if (result?.data?.message) {
          setLoading(false);
          resetForm();
          setDataSelected("Business Analyst");
        }
      }
    } catch (error: any) {
      console.log(error);
      setErrorModal(true);
      setSuccessModal(false);
      resetForm();
      setDataSelected("Business Analyst");
    }
  };

  const validationSchema = Yup.object().shape({
    comments: Yup.string().required("Comments is a required field!"),
  });

  const handleModalClose = () => {
    navigate(Paths.home);
  };

  useEffect(() => {
    if (isLoggedDetail[0]?.isAdmin) {
      navigate(Paths.home);
    }
  }, [isLoggedDetail]);

  return (
    <>
      <Container width="90%">
        <Wrapper>
          <OpacityAnimation>
            <Styled.UserSectionMainContainer>
              <Styled.HeadingText>Employee Feedback Form</Styled.HeadingText>
              <Formik
                onSubmit={handleSubmitForm}
                initialValues={initialValue}
                validationSchema={validationSchema}
              >
                {({ setFieldValue }) => (
                  <Form>
                    {!isAnonymous && (
                      <Styled.InputMainWrapper>
                        <Styled.InputLabel>Name :</Styled.InputLabel>
                        <Styled.InputFieldWrapper>
                          <Styled.NameField>
                            {isLoggedDetail[0]?.name}
                          </Styled.NameField>
                        </Styled.InputFieldWrapper>
                      </Styled.InputMainWrapper>
                    )}

                    <Styled.InputMainWrapper>
                      <Styled.InputLabel htmlFor="name">
                        Department :
                      </Styled.InputLabel>
                      <FilterDropDown
                        isDataSelected={isDataSelected}
                        setDataSelected={setDataSelected}
                        filterData={dropDown}
                        isDropDownOpen={isDropDownOpen}
                        setDropDownOpen={setDropDownOpen}
                      />

                      <ErrorMessageText>
                        <ErrorMessage name="department" />
                      </ErrorMessageText>
                    </Styled.InputMainWrapper>

                    <Styled.InputMainWrapper>
                      <Styled.InputLabel htmlFor="name">
                        Comments :
                      </Styled.InputLabel>
                      <Styled.TextAreaContainer>
                        <Styled.TextAreaField
                          component="textarea"
                          placeholder="Please enter your feedback"
                          name="comments"
                        />
                      </Styled.TextAreaContainer>
                      <ErrorMessageText>
                        <ErrorMessage name="comments" />
                      </ErrorMessageText>
                    </Styled.InputMainWrapper>

                    <Styled.UserSectionAnonymousMainContainer>
                      <div>
                        <Styled.UserSectionAnonymousLabel>
                          Anonymous Mode :
                        </Styled.UserSectionAnonymousLabel>
                        <Styled.UserSectionAnonymousDescription>
                          Hide the identity of participants so they can provide
                          truly candid feedback
                        </Styled.UserSectionAnonymousDescription>
                      </div>
                      <ToggleButton
                        label="create"
                        isChecked={isAnonymous}
                        setChecked={setAnonymous}
                        setFieldValue={setFieldValue}
                      />
                    </Styled.UserSectionAnonymousMainContainer>

                    <Styled.UserSectionButtonWrapper>
                      <Button text="Submit" type="submit" />
                    </Styled.UserSectionButtonWrapper>
                  </Form>
                )}
              </Formik>
            </Styled.UserSectionMainContainer>
            {isSuccessModal && (
              <SuccessModal
                isLoading={isLoading}
                handleCloseModal={handleModalClose}
                heading="Success"
                description="Thank you for taking time to provide feedback. We appreciate
              hearing from you and will review your comments carefully."
              />
            )}
            {isErrorModal && (
              <ErrorModal
                handleCloseModal={() => {
                  setErrorModal(false);
                }}
                heading="Error"
                description={error?.response?.data?.message}
              />
            )}
          </OpacityAnimation>
        </Wrapper>
      </Container>
    </>
  );
};

export default UserEmployeeFeedback;
