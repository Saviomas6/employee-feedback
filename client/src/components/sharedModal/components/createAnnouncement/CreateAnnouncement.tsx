import { ErrorMessage, Form, Formik } from "formik";
import {
  ErrorMessageText,
  InputField,
  InputFieldWrapper,
  InputLabel,
  ModalButtonWrapper,
  ModalHeading,
} from "../../../../styles/sharedStyles";
import SharedModal from "../../SharedModal";
import Button from "../../../button/Button";
import * as Yup from "yup";
import { TextAreaContainer } from "./style";
import { OpenAI } from "langchain/llms/openai";
import { PromptTemplate } from "langchain/prompts";
import { LLMChain } from "langchain/chains";
import { useCreateAnnouncementMutation } from "../../../../logic/reactQuery/mutation/useCreateAnnouncement";
import { useEditAnnouncement } from "../../../../logic/reactQuery/mutation/useEditAnnouncement";
import { useGetUserAnnouncementById } from "../../../../logic/reactQuery/query/useGetUserAnnouncementById";
interface I_Props {
  setCreateAnnouncementModalOpen(value: boolean): void;
  setCreateAnnouncementLoading(value: boolean): void;
  setCreateAnnouncementSuccess(value: boolean): void;
  isEditable?: boolean;
  isEditAnnouncementId?: any;
}

const CreateAnnouncement = ({
  setCreateAnnouncementLoading,
  setCreateAnnouncementModalOpen,
  setCreateAnnouncementSuccess,
  isEditAnnouncementId,
  isEditable,
}: I_Props) => {
  const { mutateAsync: createAnnouncement } = useCreateAnnouncementMutation();
  const { mutateAsync: editAnnouncement } = useEditAnnouncement();
  const { data }: any = useGetUserAnnouncementById(isEditAnnouncementId);

  const handleModalClose = () => {
    setCreateAnnouncementModalOpen(false);
  };

  const validationSchema = Yup.object().shape({
    announcementHeading: Yup.string().required("Heading is required"),
    announcementDescription: Yup.string().required("Description is required"),
  });

  const savedValues = {
    announcementHeading: data && data[0]?.announcementHeading,
    announcementDescription: data && data[0]?.announcementDescription,
  };

  const initialValues = {
    announcementHeading: "",
    announcementDescription: "",
  };

  const handleSubmitForm = async (values: any) => {
    try {
      setCreateAnnouncementLoading(true);
      setCreateAnnouncementModalOpen(false);
      setCreateAnnouncementSuccess(true);
      const llm = new OpenAI({
        openAIApiKey: import.meta.env.VITE_API_KEY,
        temperature: 0.9,
      });

      const template = new PromptTemplate({
        inputVariables: ["announcement"],
        template: `Write a short and clear summary ${values.announcementDescription}`,
      });

      const codeChain = new LLMChain({
        llm,
        prompt: template,
        outputKey: "summary",
      });

      const response = await codeChain.call(values.announcementDescription);

      const summaryData = response?.summary;

      if (summaryData) {
        if (isEditable) {
          const editData = {
            _id: isEditAnnouncementId,
            announcementHeading: values?.announcementHeading,
            announcementHeadingValue: values?.announcementHeading
              .replaceAll(" ", "-")
              .toLowerCase(),
            announcementDescription: values?.announcementDescription,
            announcementSummary: summaryData.replace(/\n/g, ""),
          };
          const result = await editAnnouncement(editData);
          if (result?.data?.message) {
            setCreateAnnouncementLoading(false);
          }
        } else {
          const data = {
            announcementHeading: values?.announcementHeading,
            announcementHeadingValue: values?.announcementHeading
              .replaceAll(" ", "-")
              .toLowerCase(),
            announcementDescription: values?.announcementDescription,
            announcementSummary: summaryData.replace(/\n/g, ""),
          };
          const result = await createAnnouncement(data);
          if (result?.data?.message) {
            setCreateAnnouncementLoading(false);
          }
        }
      }
    } catch (error: any) {
      console.error("Error analyzing code quality:", error.message);
      throw error;
    }
  };

  return (
    <SharedModal onClickClose={handleModalClose} bgColor="rgba(0,0,0,0.7)">
      <div>
        <ModalHeading>
          {isEditable ? "Edit" : "Create"} Announcement
        </ModalHeading>
        <Formik
          onSubmit={handleSubmitForm}
          initialValues={isEditable ? savedValues : initialValues}
          validationSchema={validationSchema}
          enableReinitialize={isEditable ? true : false}
        >
          <Form>
            <InputLabel htmlFor="announcementHeading">Heading</InputLabel>
            <InputFieldWrapper>
              <InputField
                type="text"
                placeholder="Heading"
                id="announcementHeading"
                name="announcementHeading"
              />
            </InputFieldWrapper>
            <ErrorMessageText>
              <ErrorMessage name="announcementHeading" />
            </ErrorMessageText>

            <InputLabel htmlFor="announcementDescription">
              Description
            </InputLabel>
            <TextAreaContainer>
              <InputField
                component="textarea"
                placeholder="Description"
                id="announcementDescription"
                name="announcementDescription"
              />
            </TextAreaContainer>
            <ErrorMessageText>
              <ErrorMessage name="announcementDescription" />
            </ErrorMessageText>

            <ModalButtonWrapper>
              <Button type="submit" text={isEditable ? "Edit" : "Create"} />
            </ModalButtonWrapper>
          </Form>
        </Formik>
      </div>
    </SharedModal>
  );
};

export default CreateAnnouncement;
