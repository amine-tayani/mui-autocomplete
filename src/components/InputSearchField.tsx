import * as React from "react";
import clsx from "clsx";
import { Button } from "@mui/base/Button";
import { SearchIcon } from "lucide-react";

interface InputSearchFieldProps {
  id: string;
  disabled: boolean;
  readOnly: boolean;
  focused: boolean;
  variant?: "outline" | "bordered" | "primary" | "ghost";
  placeholder?: string;
  getInputProps: () => React.InputHTMLAttributes<HTMLInputElement>;
}

const getInputTheme = (variant: InputSearchFieldProps["variant"]) => {
  switch (variant) {
    case "outline":
      return "border border-neutral-600 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-neutral-200";
    case "bordered":
      return "bg-transparent border border-neutral-600 text-neutral-300 hover:border-neutral-600 hover:text-neutral-200";
    case "primary":
      return "border-blue-400  bg-blue-500 text-blue-400 hover:bg-blue-400 hover:text-blue-300";
    case "ghost":
      return "border-transparent hover:bg-neutral-700 text-neutral-300 hover:text-neutral-200";
    default:
      return "bg-neutral-900 border-gray-700";
  }
};

const InputSearchField = React.forwardRef<
  HTMLDivElement,
  InputSearchFieldProps
>((props, ref) => {
  const {
    id,
    disabled,
    readOnly,
    placeholder,
    getInputProps,
    variant,
    ...other
  } = props;

  return (
    <div
      ref={ref}
      {...other}
      className={clsx(
        "flex gap-[5px] pr-[5px] overflow-hidden w-[600px] h-16 rounded-lg focus-visible:outline-0",
        getInputTheme(variant)
      )}
    >
      <Button className="self-center outline-0 shadow-none border-0 py-0 pl-3 bg-transparent">
        <SearchIcon className="translate-y-[2px] text-neutral-300" />
      </Button>
      <input
        placeholder={placeholder}
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
