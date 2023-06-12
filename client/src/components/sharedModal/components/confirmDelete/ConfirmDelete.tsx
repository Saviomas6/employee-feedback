import { EditButton, ModalHeading } from "../../../../styles/sharedStyles";
import SharedModal from "../../SharedModal";
import { ConfirmDeleteButtonWrapper, ConfirmDeleteDescription } from "./style";

interface I_Props {
  heading: string;
  description: string;
  handleCloseModal(): void;
  handleDelete: any;
}
const ConfirmDelete = ({
  heading,
  description,
  handleCloseModal,
  handleDelete,
}: I_Props) => {
  return (
    <div>
      <SharedModal onClickClose={handleCloseModal} bgColor="rgba(0,0,0,0.7)">
        <>
          <ModalHeading>{heading}</ModalHeading>
          <ConfirmDeleteDescription>{description}</ConfirmDeleteDescription>
          <ConfirmDeleteButtonWrapper>
            <EditButton color="gray" onClick={handleCloseModal}>
              Cancel
            </EditButton>
            <EditButton color="red" onClick={handleDelete}>
              Delete
            </EditButton>
          </ConfirmDeleteButtonWrapper>
        </>
      </SharedModal>
    </div>
  );
};

export default ConfirmDelete;
