import useSWR from "swr";

function fetcher(url: string) {
  return window.fetch(url).then((res) => res.json());
}

export function useShirts() {
  const { data, error } = useSWR(`/api/getShirts`, fetcher);

  return {
    shirts: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function useShirt(id: string | string[]) {
  return useSWR(`/api/getShirt?id=${id}`, fetcher);
}
