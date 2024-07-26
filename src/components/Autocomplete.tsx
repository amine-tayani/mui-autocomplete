import * as React from "react";
import clsx from "clsx";
import {
  useAutocomplete,
  UseAutocompleteProps,
} from "@mui/base/useAutocomplete";
import { Button } from "@mui/base/Button";
import { Popper } from "@mui/base/Popper";
import { unstable_useForkRef as useForkRef } from "@mui/utils";
import { SearchIcon, XIcon } from "lucide-react";
import { facts } from "../data";

export const Autocomplete = React.forwardRef(function Autocomplete(
  props: UseAutocompleteProps<(typeof facts)[number], false, false, false>,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const {
    disableClearable = false,
    disabled = false,
    readOnly = false,
    ...other
  } = props;

  const {
    getRootProps,
    getInputProps,
    getClearProps,
    getListboxProps,
    getOptionProps,
    dirty,
    id,
    popupOpen,
    focused,
    anchorEl,
    setAnchorEl,
    groupedOptions,
  } = useAutocomplete({
    ...props,
    componentName: "BaseAutocompleteIntroduction",
  });

  const hasClearIcon = !disableClearable && !disabled && dirty && !readOnly;

  const rootRef = useForkRef(ref, setAnchorEl);

  return (
    <React.Fragment>
      <div className="flex">
        <div
          {...getRootProps(other)}
          ref={rootRef}
          className={clsx(
            "flex gap-[5px] pr-[5px] overflow-hidden w-[600px] h-16 rounded-lg bg-neutral-800 border border-gray-700 focus-visible:outline-0 ",
            !focused && "shadow-gray-900",
            focused &&
              "border-blue-400 shadow-[0_0_0_3px_transparent] shadow-blue-200 dark:shadow-blue-500"
          )}
        >
          <Button className="self-center outline-0 shadow-none border-0 py-0 pl-3 bg-transparent">
            <SearchIcon className="translate-y-[2px] text-neutral-300" />
          </Button>
          <input
            placeholder="Search for a fact..."
            id={id}
            disabled={disabled}
            readOnly={readOnly}
            {...getInputProps()}
            className="text-lg leading-[1.5] text-gray-900 dark:text-gray-300 bg-inherit border-0 rounded-[inherit] px-3 py-2 outline-0 grow shrink-0 basis-auto"
          />
        </div>
        {hasClearIcon && (
          <Button
            {...getClearProps()}
            className=" flex flex-col items-center justify-center text-[8px] uppercase overflow-hidden self-center outline-0 border border-neutral-700 bg-neutral-800 mx-2 rounded-lg shadow-none p-1.5 w-14 h-14 hover:cursor-pointer hover:bg-neutral-700 hover:border-neutral-700"
          >
            <XIcon className="w-5 h-5 text-neutral-200 hover:text-white" />
            <span className="text-neutral-400 font-medium text-xs">ESC</span>
          </Button>
        )}
      </div>
      {anchorEl && (
        <Popper
          open={popupOpen}
          anchorEl={anchorEl}
          slotProps={{
            root: {
              className: "relative z-[1001] w-[600px]",
            },
          }}
          modifiers={[
            { name: "flip", enabled: false },
            { name: "preventOverflow", enabled: false },
          ]}
        >
          <ul
            {...getListboxProps()}
            className="text-sm box-border p-1.5 my-3 mx-0 min-w-[320px] rounded-xl overflow-auto outline-0 max-h-[300px] z-[1] bg-neutral-800 border border-gray-700 text-gray-200"
          >
            {(groupedOptions as typeof facts).map((option, index) => {
              const optionProps = getOptionProps({ option, index });

              return (
                <li
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
        </Popper>
      )}
    </React.Fragment>
  );
});
