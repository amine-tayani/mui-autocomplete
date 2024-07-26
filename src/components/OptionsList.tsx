import * as React from "react";
import { facts } from "../data";

interface OptionsListProps {
  getListboxProps: () => React.HTMLAttributes<HTMLUListElement>;
  groupedOptions: typeof facts;
  getOptionProps: (props: {
    option: (typeof facts)[number];
    index: number;
  }) => React.HTMLAttributes<HTMLLIElement>;
}

const OptionsList: React.FC<OptionsListProps> = ({
  getListboxProps,
  groupedOptions,
  getOptionProps,
}) => (
  <ul
    {...getListboxProps()}
    className="text-sm box-border p-1.5 my-3 mx-0 min-w-[320px] rounded-xl overflow-auto outline-0 max-h-[300px] z-[1] bg-neutral-800 border border-gray-700 text-gray-200"
  >
    {(groupedOptions as typeof facts).map((option, index) => {
      const optionProps = getOptionProps({ option, index });
      return (
        <li
          key={index}
          {...optionProps}
          className="list-none p-2 rounded-lg cursor-default last-of-type:border-b-0 hover:cursor-pointer aria-selected:bg-blue-900 aria-selected:text-white"
        >
          {option.label}
        </li>
      );
    })}
    {groupedOptions.length === 0 && (
      <li className="list-none p-2 cursor-default">No results</li>
    )}
  </ul>
);

export default OptionsList;
