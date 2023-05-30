import { RiArrowDownSLine } from "react-icons/ri";
import {
  FilterDropDownArrowIcon,
  FilterDropDownBorder,
  FilterDropDownContainer,
  FilterDropDownLayout,
  FilterDropDownMainLayout,
  FilterDropDownSelect,
  FilterDropDownSelectButton,
  FilterDropDownSelectButtonContainer,
  FilterDropDownWrapper,
} from "./FilterDropDown.style";

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
    <FilterDropDownMainLayout>
      <FilterDropDownLayout>
        <FilterDropDownSelectButton
          onClick={() => setDropDownOpen(!isDropDownOpen)}
        >
          <FilterDropDownSelectButtonContainer>
            <div>{isDataSelected}</div>
            <FilterDropDownArrowIcon>
              <RiArrowDownSLine size={25} />
            </FilterDropDownArrowIcon>
          </FilterDropDownSelectButtonContainer>
        </FilterDropDownSelectButton>

        {isDropDownOpen && (
          <FilterDropDownContainer>
            <FilterDropDownWrapper>
              {filterData.map((val) => (
                <FilterDropDownBorder
                  key={val?.id}
                  onClick={() => {
                    setDataSelected(val?.label);
                    setDropDownOpen(false);
                  }}
                >
                  <FilterDropDownSelect>
                    <div>{val?.label}</div>
                  </FilterDropDownSelect>
                </FilterDropDownBorder>
              ))}
            </FilterDropDownWrapper>
          </FilterDropDownContainer>
        )}
      </FilterDropDownLayout>
    </FilterDropDownMainLayout>
  );
};

export default FilterDropDown;
