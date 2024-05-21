import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import {Loader} from "lucide-react";
import {useSomething} from "./use-something";

function AnotherComponent() {
  const {location} = useSomething();

  //   here we fetch the location data
  const {data, error, isLoading, isPending} = useQuery({
    queryKey: ["weatherData"],
    queryFn: async () => {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${
          location || "nairobi"
        }&appid=6fb324d805bbaa996b0fc22e5921363e`
      );
      return response.data;
    },
  });

  console.log(data);
  if (isLoading || isPending) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-4 text-neutral-800" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        Error fetching the results
      </div>
    );
  }

  return (
    <div className="mt-4 flex items-center flex-col justify-center ">
      Weather result for {location || "nairobi"}
      <div>Weather condition: {data.weather[0].main}</div>
      <div>
        Weather Description:
        {data.weather[0].description}
      </div>
    </div>
  );
}

export default AnotherComponent;
