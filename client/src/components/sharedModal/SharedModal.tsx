import React from "react";
import {
  CloseWrapper,
  SharedModalContainer,
  SharedModalMainContainer,
} from "./style";
import { AiFillCloseCircle } from "react-icons/ai";
interface I_Props {
  children: React.ReactNode;
  toggleModal(value: boolean): void;
  isLoading?: boolean;
}
const SharedModal = ({ children, toggleModal, isLoading }: I_Props) => {
  return (
    <SharedModalMainContainer>
      <SharedModalContainer>
        {children}
        {!isLoading && (
          <CloseWrapper onClick={() => toggleModal(false)}>
            <AiFillCloseCircle size={25} />
          </CloseWrapper>
        )}
      </SharedModalContainer>
    </SharedModalMainContainer>
  );
};

export default SharedModal;
