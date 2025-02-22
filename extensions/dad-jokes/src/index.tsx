import { Detail } from "@raycast/api";
import { useFetch } from "@raycast/utils";

type Joke = {
  id: string;
  joke: string;
  status: number;
};

export default function Command() {
  const { isLoading, data } = useFetch<Joke>("https://icanhazdadjoke.com/", {
    keepPreviousData: false,
    headers: {
      Accept: "application/json",
    },
  });

  const joke = !isLoading && data?.joke ? data.joke : "Loading...";
  return <Detail isLoading={isLoading} markdown={joke} />;
}
