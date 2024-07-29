import * as React from "react";
import { AutocompleteOption } from "./Autocomplete";

interface OptionsListProps {
  getListboxProps: () => React.HTMLAttributes<HTMLUListElement>;
  groupedOptions: AutocompleteOption[];
  value: AutocompleteOption | null;
  getOptionProps: (props: {
    option: AutocompleteOption;
    index: number;
  }) => React.HTMLAttributes<HTMLLIElement>;
  selectedIcon?: React.ReactNode;
}

const OptionsList: React.FC<OptionsListProps> = ({
  getListboxProps,
  groupedOptions,
  getOptionProps,
  selectedIcon,
  value,
}) => (
  <ul
    {...getListboxProps()}
    className="text-sm box-border p-1.5 my-3 mx-0 min-w-[320px] rounded-xl overflow-auto outline-0 max-h-[300px] z-[1] bg-neutral-800 border border-gray-700 text-gray-200"
  >
    {groupedOptions.map((option, index) => {
      const optionProps = getOptionProps({ option, index });
      return (
        <li
          key={index}
          {...optionProps}
          className="list-none flex justify-between p-2 rounded-lg cursor-default last-of-type:border-b-0 hover:cursor-pointer aria-selected:bg-blue-900 aria-selected:text-white"
        >
          {option.label}
          {selectedIcon && value && value.label === option.label && (
            <span className="text-neutral-200 font-medium text-xs">
              {selectedIcon}
            </span>
          )}
        </li>
      );
    })}
    {groupedOptions.length === 0 && (
      <li className="list-none p-2 cursor-default">No Options</li>
    )}
  </ul>
);

export default OptionsList;
