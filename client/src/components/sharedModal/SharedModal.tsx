import React from "react";
import {
  CloseWrapper,
  SharedModalContainer,
  SharedModalMainContainer,
} from "./style";
import { AiFillCloseCircle } from "react-icons/ai";
interface I_Props {
  children: React.ReactNode;
  onClickClose(): void;
  isLoading?: boolean;
}
const SharedModal = ({ children, onClickClose, isLoading }: I_Props) => {
  return (
    <SharedModalMainContainer>
      <SharedModalContainer>
        {children}
        {!isLoading && (
          <CloseWrapper onClick={onClickClose}>
            <AiFillCloseCircle size={25} />
          </CloseWrapper>
        )}
      </SharedModalContainer>
    </SharedModalMainContainer>
  );
};

export default SharedModal;
