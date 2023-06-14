import React from "react";
import * as Styled from "./style";
import { AiFillCloseCircle } from "react-icons/ai";
interface I_Props {
  children: React.ReactNode;
  onClickClose(): void;
  isLoading?: boolean;
  bgColor?: string;
}
const SharedModal = ({
  children,
  onClickClose,
  isLoading,
  bgColor,
}: I_Props) => {
  return (
    <Styled.SharedModalMainContainer bgColor={bgColor}>
      <Styled.SharedModalContainer>
        {children}
        {!isLoading && (
          <Styled.CloseWrapper onClick={onClickClose}>
            <AiFillCloseCircle size={25} />
          </Styled.CloseWrapper>
        )}
      </Styled.SharedModalContainer>
    </Styled.SharedModalMainContainer>
  );
};

export default SharedModal;
