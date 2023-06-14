import { Input, Label, Wrapper } from "./style";

interface I_Props {
  label: string;
  isChecked: boolean;
  setChecked(value: boolean): void;
  setFieldValue?: any;
}
const ToggleButton = ({
  label,
  isChecked,
  setChecked,
  setFieldValue,
}: I_Props) => {
  const handleChecked = () => {
    setChecked(!isChecked);
    setFieldValue("anonymous", !isChecked);
  };
  return (
    <Wrapper>
      <Label htmlFor={label} toggleSwitch={isChecked}>
        <Input
          id={label}
          type="checkbox"
          checked={isChecked}
          onChange={handleChecked}
        />
      </Label>
    </Wrapper>
  );
};

export default ToggleButton;
