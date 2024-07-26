import * as React from "react";
import {
  useAutocomplete,
  UseAutocompleteProps,
} from "@mui/base/useAutocomplete";
import { Popper } from "@mui/base/Popper";
import { unstable_useForkRef as useForkRef } from "@mui/utils";
import { facts } from "../data";
import InputSearchField from "./InputSearchField";
import ClearButton from "./ClearButton";
import OptionsList from "./OptionsList";

const Autocomplete = React.forwardRef(function Autocomplete(
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
  });

  const hasClearIcon = !disableClearable && !disabled && dirty && !readOnly;

  const rootRef = useForkRef(ref, setAnchorEl);

  return (
    <React.Fragment>
      <div className="flex">
        <InputSearchField
          id={id}
          ref={rootRef}
          {...getRootProps(other)}
          disabled={disabled}
          readOnly={readOnly}
          getInputProps={getInputProps}
          focused={focused}
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
            groupedOptions={groupedOptions as typeof facts}
          />
        </Popper>
      )}
    </React.Fragment>
  );
});

export default Autocomplete;
