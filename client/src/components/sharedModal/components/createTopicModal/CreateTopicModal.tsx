import { ErrorMessage, Form, Formik } from "formik";
import {
  ErrorMessageText,
  InputField,
  InputFieldWrapper,
  InputLabel,
  ModalButtonWrapper,
  ModalHeading,
} from "../../../../styles/sharedStyles";
import * as Yup from "yup";
import SharedModal from "../../SharedModal";
import Button from "../../../button/Button";
import { useCreateFeedbackTopic } from "../../../../logic/reactQuery/mutation/useCreateFeedbackTopic";
import { useEditFeedbackTopic } from "../../../../logic/reactQuery/mutation/useEditFeedbackTopic";

interface I_Props {
  setCreateTopicModalOpen(value: boolean): void;
  setCreateTopicLoading(value: boolean): void;
  setCreateTopicSuccess(value: boolean): void;

  isEditable?: boolean;
  isEditTopicName?: any;
  isEditTopicId?: any;
}

interface I_Values {
  topicName: string;
}

const CreateTopicModal = ({
  setCreateTopicModalOpen,
  setCreateTopicLoading,
  setCreateTopicSuccess,
  isEditable,
  isEditTopicName,
  isEditTopicId,
}: I_Props) => {
  const { mutateAsync: createFeedbackTopic } = useCreateFeedbackTopic();
  const { mutateAsync: editFeedbackTopic } = useEditFeedbackTopic();

  const handleModalClose = () => {
    setCreateTopicModalOpen(false);
  };

  const validationSchema = Yup.object().shape({
    topicName: Yup.string().required("Topic is required"),
  });

  const savedValues = {
    topicName: isEditTopicName,
  };

  const initialValues = {
    topicName: "",
  };

  const handleSubmitForm = async (values: I_Values) => {
    if (isEditable) {
      const editValues = {
        _id: isEditTopicId,
        topicName: values?.topicName,
        topicValue: values?.topicName.replaceAll(" ", "-").toLowerCase(),
      };
      try {
        setCreateTopicLoading(true);
        setCreateTopicSuccess(true);
        setCreateTopicModalOpen(false);
        const result = await editFeedbackTopic(editValues);
        if (result?.data?.message) {
          setCreateTopicLoading(false);
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      const dataValues = {
        topicName: values?.topicName,
        topicValue: values?.topicName.replaceAll(" ", "-").toLowerCase(),
      };
      try {
        setCreateTopicLoading(true);
        setCreateTopicSuccess(true);
        setCreateTopicModalOpen(false);
        const result = await createFeedbackTopic(dataValues);
        if (result?.data?.message) {
          setCreateTopicLoading(false);
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <div>
      <SharedModal onClickClose={handleModalClose} bgColor="rgba(0,0,0,0.7)">
        <div>
          <ModalHeading>{isEditable ? "Edit" : "Create"} Topic</ModalHeading>
          <Formik
            onSubmit={handleSubmitForm}
            initialValues={isEditable ? savedValues : initialValues}
            validationSchema={validationSchema}
            enableReinitialize={isEditable ? true : false}
          >
            <Form>
              <InputLabel htmlFor="topicName">Topic</InputLabel>
              <InputFieldWrapper>
                <InputField
                  type="text"
                  placeholder="Topic"
                  id="topicName"
                  name="topicName"
                />
              </InputFieldWrapper>
              <ErrorMessageText>
                <ErrorMessage name="topicName" />
              </ErrorMessageText>

              <ModalButtonWrapper>
                <Button type="submit" text={isEditable ? "Edit" : "Create"} />
              </ModalButtonWrapper>
            </Form>
          </Formik>
        </div>
      </SharedModal>
    </div>
  );
};

export default CreateTopicModal;
