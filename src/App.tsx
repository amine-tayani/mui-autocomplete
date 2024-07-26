import Autocomplete from "./components/Autocomplete";
import { facts } from "./data";

function App() {
  return (
    <div className="flex flex-col pb-20 bg-neutral-900 items-center justify-center h-screen">
      <h1 className="text-6xl font-bold text-neutral-200 mb-8">
        Search for facts
      </h1>
      <Autocomplete
        options={facts}
        isOptionEqualToValue={(option, value) => option.label === value.label}
      />
    </div>
  );
}

export default App;
