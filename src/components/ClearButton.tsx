import * as React from "react";
import { Button } from "@mui/base/Button";
import { XIcon } from "lucide-react";

interface ClearButtonProps {
  getClearProps: () => React.ButtonHTMLAttributes<HTMLButtonElement>;
}

const ClearButton: React.FC<ClearButtonProps> = ({ getClearProps }) => (
  <Button
    {...getClearProps()}
    className="flex flex-col items-center justify-center text-[8px] uppercase overflow-hidden self-center outline-0 border border-neutral-700 bg-neutral-800 mx-2 rounded-lg shadow-none p-1.5 w-14 h-14 hover:cursor-pointer hover:bg-neutral-700 hover:border-neutral-700"
  >
    <XIcon className="w-5 h-5 text-neutral-200 hover:text-white" />
    <span className="text-neutral-400 font-medium text-xs">ESC</span>
  </Button>
);

export default ClearButton;
