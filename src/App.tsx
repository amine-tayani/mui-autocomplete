import { CheckIcon } from "lucide-react";
import Autocomplete from "./components/Autocomplete";
import { animals } from "./data";
// import { facts } from "./data";

function App() {
  return (
    <div className="flex flex-col pb-20 bg-neutral-900 items-center justify-center h-screen">
      <Autocomplete
        options={animals}
        isOptionEqualToValue={(option, value) => option.label === value.label}
        selectedIcon={<CheckIcon className="text-neutral-100 w-4.5 h-4.5" />} // you can pass a custom icon
        description="Type an animal to search for it"
        placeholder="Search for an animal..."
        variant="outline" // "bordered" | "primary" | "ghost"
      />
    </div>
  );
}

export default App;
