import { AxiosError, AxiosInstance, AxiosRequestConfig, Method } from "axios";
import {
  InfiniteData,
  QueryKey,
  UseInfiniteQueryOptions,
  UseQueryOptions,
} from "@tanstack/react-query";

export interface FetcherArgs<TVariables> {
  url: string; // REST endpoint URL
  requestClient: AxiosInstance; // Axios instance for making requests
  variables?: TVariables; // Request body for POST or PUT
  headers?: Record<string, string>; // Additional headers
  method?: Method; // HTTP method
}

export const fetcher =
  <TData, TVariables>({
    url,
    requestClient,
    headers,
    variables,
    method = "GET", // Default method is GET
  }: FetcherArgs<TVariables>) =>
  async (): Promise<TData> => {
    try {
      const config: AxiosRequestConfig = {
        url,
        method,
        headers,
      };

      // Add `data` for POST or PUT requests
      if (["POST", "PUT"].includes(method) && variables) {
        config.data = variables;
      }

      const response = await requestClient.request<TData>(config);

      return response.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw {
          message: error.response?.data?.message || error.message,
          status: error.response?.status,
          data: error.response?.data,
        };
      }

      throw error;
    }
  };

export interface UseQueryCustomOptions<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey
> extends Omit<
    UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
    "queryKey"
  > {
  queryKey?: UseQueryOptions<
    TQueryFnData,
    TError,
    TData,
    TQueryKey
  >["queryKey"];
}

export interface UseInfiniteQueryCustomOptions<
  TQueryFnData = unknown,
  TError = unknown,
  TData = InfiniteData<TQueryFnData>,
  TQueryKey extends QueryKey = QueryKey,
  TPageParam = unknown
> extends Omit<
    UseInfiniteQueryOptions<TQueryFnData, TError, TData, TPageParam, TQueryKey>,
    "queryKey" | "getNextPageParam"
  > {
  queryKey?: UseInfiniteQueryOptions<
    TQueryFnData,
    TError,
    TData,
    TPageParam,
    TQueryKey
  >["queryKey"];
  getNextPageParam?: UseInfiniteQueryOptions<
    TQueryFnData,
    TError,
    TData,
    TPageParam,
    TQueryKey
  >["getNextPageParam"];
}
