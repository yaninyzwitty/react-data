import {useState} from "react";
import {useSomething} from "./use-something";
import AnotherComponent from "./another-component";
import {useQueryClient} from "@tanstack/react-query";

/* eslint-disable @typescript-eslint/no-explicit-any */

function MyComponent() {
  const [input, setInput] = useState<string>("");
  const {setLocation} = useSomething((state) => state);
  const queryClient = useQueryClient();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input === "" || !input) return;
    const inputToSend = input;
    setInput("");
    setLocation(inputToSend);
    // invalidate the cache
    queryClient.invalidateQueries({queryKey: ["weatherData"]});
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <form
          className="flex items-center space-x-10  "
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-[300px] border p-5 border-red-500 outline-none "
            placeholder="Write a town"
          />

          <button
            type="submit"
            className="h-10 w-full rounded-md shadow-pink-600 bg-green-500"
          >
            Search
          </button>
        </form>
        <AnotherComponent />
      </div>
    </div>
  );
}

export default MyComponent;
