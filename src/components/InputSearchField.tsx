import * as React from "react";
import clsx from "clsx";
import { Button } from "@mui/base/Button";
import { SearchIcon } from "lucide-react";

interface InputSearchFieldProps {
  id: string;
  disabled: boolean;
  readOnly: boolean;
  getInputProps: () => React.InputHTMLAttributes<HTMLInputElement>;
  focused: boolean;
}

const InputSearchField = React.forwardRef<
  HTMLDivElement,
  InputSearchFieldProps
>((props, ref) => {
  const { id, disabled, readOnly, getInputProps, focused, ...other } = props;

  return (
    <div
      ref={ref}
      {...other}
      className={clsx(
        "flex gap-[5px] pr-[5px] overflow-hidden w-[600px] h-16 rounded-lg bg-neutral-800 border border-gray-700 focus-visible:outline-0 ",
        !focused && "shadow-gray-900",
        focused &&
          "border-blue-400 shadow-[0_0_0_3px_transparent] shadow-blue-500"
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
  );
});

export default InputSearchField;
