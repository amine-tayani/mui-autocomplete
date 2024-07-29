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
  getOptionProps,
  groupedOptions,
  selectedIcon,
  value,
}) => (
  <ul
    {...getListboxProps()}
    className="scrollbar box-border px-5 py-4 space-y-2 my-3 mx-0 min-w-[320px] rounded-md overflow-auto outline-0 max-h-[300px] z-[1] bg-neutral-800 text-gray-200"
  >
    {groupedOptions.map((option, index) => {
      const optionProps = getOptionProps({ option, index });
      return (
        <li
          key={index}
          {...optionProps}
          className="list-none flex items-center justify-between px-4 py-2 rounded-md cursor-default last-of-type:border-b-0 hover:cursor-pointer aria-selected:bg-blue-600 hover:bg-blue-500 hover:text-white aria-selected:text-white"
        >
          {option.label}
          {selectedIcon && value && value.label === option.label && (
            <span>{selectedIcon}</span>
          )}
        </li>
      );
    })}
    {groupedOptions.length === 0 && (
      <li className="list-none  px-4 py-3 cursor-default">No Options</li>
    )}
  </ul>
);

export default OptionsList;
