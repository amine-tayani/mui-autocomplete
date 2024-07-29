import * as React from "react";
import {
  useAutocomplete,
  UseAutocompleteProps,
} from "@mui/base/useAutocomplete";
import { Popper } from "@mui/base/Popper";
import { unstable_useForkRef as useForkRef } from "@mui/utils";
import InputSearchField from "./InputSearchField";
import ClearButton from "./ClearButton";
import OptionsList from "./OptionsList";

export type AutocompleteOption = {
  label: string;
  [key: string]: unknown;
};

const Autocomplete = React.forwardRef(function Autocomplete(
  props: UseAutocompleteProps<AutocompleteOption, false, false, false> & {
    description?: string;
    variant?: "outline" | "bordered" | "primary" | "ghost";
    selectedIcon?: React.ReactNode;
    placeholder?: string;
  },
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const {
    disableClearable = false,
    disabled = false,
    readOnly = false,
    variant = "outline",
    description,
    placeholder,
    selectedIcon,
    ...other
  } = props;

  const {
    getRootProps,
    getInputProps,
    getClearProps,
    getListboxProps,
    getOptionProps,
    value,
    dirty,
    id,
    popupOpen,
    focused,
    anchorEl,
    setAnchorEl,
    groupedOptions,
  } = useAutocomplete({
    ...props,
  });

  const hasClearIcon = !disableClearable && !disabled && dirty && !readOnly;

  const rootRef = useForkRef(ref, setAnchorEl);

  return (
    <div>
      <div className="flex">
        <InputSearchField
          id={id}
          ref={rootRef}
          {...getRootProps(other)}
          disabled={disabled}
          readOnly={readOnly}
          getInputProps={getInputProps}
          focused={focused}
          variant={variant}
          placeholder={placeholder}
        />
        {hasClearIcon && <ClearButton getClearProps={getClearProps} />}
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
          <OptionsList
            getListboxProps={getListboxProps}
            getOptionProps={getOptionProps}
            groupedOptions={groupedOptions as AutocompleteOption[]}
            selectedIcon={selectedIcon}
            value={value}
          />
        </Popper>
      )}
      {description && (
        <p className="text-left text-sm text-neutral-400 mt-2 mb-0">
          {description}
        </p>
      )}
    </div>
  );
});

export default Autocomplete;
