import { CardContainer, CardReviewResult, FeedbackText } from "./style";
import { handlePrecision } from "../../utils/utils";
interface I_Props {
  text: string;
  review: string;
  inputName: string;
  isDataSelected: string;
}
const Card = ({ text, review, inputName, isDataSelected }: I_Props) => {
  return (
    <CardContainer>
      <div>
        <FeedbackText title={inputName}>
          Name : {handlePrecision(inputName, 36)}
        </FeedbackText>
        <FeedbackText title={isDataSelected}>
          Branch : {handlePrecision(isDataSelected, 46)}
        </FeedbackText>
        <FeedbackText title={text}>
          Comments : {handlePrecision(text, 150)}
        </FeedbackText>
      </div>

      <CardReviewResult
        colorCode={
          review === "Positive"
            ? "green"
            : review === "Negative"
            ? "red"
            : "orange"
        }
      >
        {review}
        {review === "Positive" ? (
          <span>&#128515;</span>
        ) : review === "Negative" ? (
          <span>&#128542;</span>
        ) : (
          <span>&#128528;</span>
        )}
      </CardReviewResult>
    </CardContainer>
  );
};

export default Card;
