import { ErrorMessageText, OpacityAnimation } from "../../styles/sharedStyles";
import {
  HeadingText,
  InputField,
  InputFieldWrapper,
  TextAreaContainer,
  TextAreaField,
  UserSectionButtonWrapper,
  UserSectionMainContainer,
} from "./style";
import { OpenAI } from "langchain/llms/openai";
import { PromptTemplate } from "langchain/prompts";
import { LLMChain } from "langchain/chains";
import Button from "../../components/button/Button";
import FilterDropDown from "../../components/dropDown/FilterDropDown";
import { useState } from "react";
import SuccessModal from "../../components/sharedModal/components/successModal/SuccessModal";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

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
];

const UserSection = () => {
  const [isDropDownOpen, setDropDownOpen] = useState<boolean>(false);
  const [isDataSelected, setDataSelected] =
    useState<string>("Business Analyst");
  const [isSuccessModal, setSuccessModal] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);

  const initialValue = {
    name: "",
    comments: "",
  };

  const handleSubmitForm = async (values: any, { resetForm }: any) => {
    try {
      setSuccessModal(true);
      setLoading(true);
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
          name: values.name,
          department: isDataSelected,
          comments: values.comments,
          review: reviewData,
        };
        const result = await axios.post(
          "http://localhost:8081/user/user-feedback",
          data
        );
        if (result?.data?.message) {
          setLoading(false);
          resetForm();
          setDataSelected("Business Analyst");
        }
      }
    } catch (error: any) {
      console.error("Error analyzing code quality:", error.message);
      throw error;
    }
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is a required field!"),
    comments: Yup.string().required("Comments is a required field!"),
  });

  return (
    <OpacityAnimation>
      <UserSectionMainContainer>
        <HeadingText>Employee Feedback Form</HeadingText>
        <Formik
          onSubmit={handleSubmitForm}
          initialValues={initialValue}
          validationSchema={validationSchema}
        >
          <Form>
            <InputFieldWrapper>
              <InputField
                type="text"
                placeholder="Please enter your name"
                name="name"
              />
              <ErrorMessageText>
                <ErrorMessage name="name" />
              </ErrorMessageText>
            </InputFieldWrapper>

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
            <TextAreaContainer>
              <TextAreaField
                component="textarea"
                placeholder="Please enter your feedback"
                name="comments"
              />
              <ErrorMessageText>
                <ErrorMessage name="comments" />
              </ErrorMessageText>
            </TextAreaContainer>
            <UserSectionButtonWrapper>
              <Button text="Submit" type="submit" />
            </UserSectionButtonWrapper>
          </Form>
        </Formik>
      </UserSectionMainContainer>
      {isSuccessModal && (
        <SuccessModal isLoading={isLoading} setSuccessModal={setSuccessModal} />
      )}
    </OpacityAnimation>
  );
};

export default UserSection;
