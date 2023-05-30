import { SharedButton } from "./style";
interface I_Props {
  text: string;
  onClick?: any;
  type?: string;
}
const Button = ({ text, onClick, type }: I_Props) => {
  return (
    <SharedButton type={type} onClick={onClick}>
      {text}
    </SharedButton>
  );
};

export default Button;
