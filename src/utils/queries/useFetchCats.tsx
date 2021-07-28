import { useQuery } from "react-query";
import { CatType } from "../types/cat";

const fetchCats = async () => {
  const response = await fetch("/api/cats");
  const json = await response.json();
  return json;
};

/**
 * Hook to fetch cats from out backend.
 */
export const useFetchCats = () => {
  const { isLoading, data, error } = useQuery<CatType[]>("cats", fetchCats);

  return { isLoading, data, error };
};
