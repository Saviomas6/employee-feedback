import { RiArrowDownSLine } from "react-icons/ri";
import * as Styled from "./FilterDropDown.style";

interface I_FilterData {
  id: string | number;
  value: string;
  label: string;
}
interface I_FilterDropDown {
  isDropDownOpen: boolean;
  setDropDownOpen(value: boolean): void;
  filterData: I_FilterData[] | any[];
  isDataSelected: string;
  setDataSelected(value: string): void;
}
const FilterDropDown = ({
  isDropDownOpen,
  setDropDownOpen,
  filterData,
  isDataSelected,
  setDataSelected,
}: I_FilterDropDown) => {
  return (
    <Styled.FilterDropDownMainLayout>
      <Styled.FilterDropDownLayout>
        <Styled.FilterDropDownSelectButton
          onClick={() => setDropDownOpen(!isDropDownOpen)}
        >
          <Styled.FilterDropDownSelectButtonContainer>
            <div>{isDataSelected}</div>
            <Styled.FilterDropDownArrowIcon>
              <RiArrowDownSLine size={25} />
            </Styled.FilterDropDownArrowIcon>
          </Styled.FilterDropDownSelectButtonContainer>
        </Styled.FilterDropDownSelectButton>

        {isDropDownOpen && (
          <Styled.FilterDropDownContainer>
            <Styled.FilterDropDownWrapper>
              {filterData.map((val) => (
                <Styled.FilterDropDownBorder
                  key={val?.id}
                  onClick={() => {
                    setDataSelected(val?.label);
                    setDropDownOpen(false);
                  }}
                >
                  <Styled.FilterDropDownSelect>
                    <div>{val?.label}</div>
                  </Styled.FilterDropDownSelect>
                </Styled.FilterDropDownBorder>
              ))}
            </Styled.FilterDropDownWrapper>
          </Styled.FilterDropDownContainer>
        )}
      </Styled.FilterDropDownLayout>
    </Styled.FilterDropDownMainLayout>
  );
};

export default FilterDropDown;
