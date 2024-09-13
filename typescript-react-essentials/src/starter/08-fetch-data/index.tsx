import { fetchTours } from "./types";
import { useQuery } from "@tanstack/react-query";

function Component() {
  const {
    isPending,
    isError,
    error,
    data: tours,
  } = useQuery({
    queryKey: ["tours"],
    queryFn: fetchTours,
  });

  if (isPending) return <h2>Loading...</h2>;
  if (isError) return <h2>Error : {error.message}</h2>;

  return (
    <div>
      <h2 className="mb-1">Tours</h2>
      {tours.map((tour) => {
        return (
          <p key={tour.id} className="mb-1">
            {tour.name}
          </p>
        );
      })}
    </div>
  );
}

export default Component;

/*
import { useState, useEffect } from "react";

import { type Tour, tourSchema } from "./types";

function Component() {
  //tours
  const [tours, setTours] = useState<Tour[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Failed to fetch tours...`);
        }
        const rawData: Tour[] = await response.json();

        setTours(result.data);
      } catch (error) {
        const message =
          error instanceof Error ? error.message : "there was an error...";
        setIsError(message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h3>Error {isError}</h3>
      </div>
    );
  }

  return (
    <div>
      <h2 className="mb-1">Tours</h2>
      {tours.map((tour) => {
        return (
          <p key={tour.id} className="mb-1">
            {tour.name}
          </p>
        );
      })}
    </div>
  );
}
export default Component;
*/
