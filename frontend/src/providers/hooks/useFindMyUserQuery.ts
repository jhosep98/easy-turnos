import { AxiosError } from "axios";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { FindMyUserResponse } from "../generate";
import { easyTurnosApi } from "@/api/easy-turnos";
import { fetcher, UseQueryCustomOptions } from "../base";

export type FindMyUserQueryVariables = { userName: string };

export type FindMyUserQuery = FindMyUserResponse;

export const useFindMyUserQuery = <
  TData = FindMyUserQuery,
  TError = AxiosError
>(
  variables?: FindMyUserQueryVariables,
  options?: Omit<UseQueryCustomOptions<TData, TError>, "queryFn">
): UseQueryResult<TData, TError> => {
  return useQuery<TData, TError>({
    queryKey: ["FindMyUser", variables],
    queryFn: fetcher<TData, FindMyUserQueryVariables>({
      url: `/users/${variables?.userName}`,
      variables,
      requestClient: easyTurnosApi,
    }),
    ...options,
  });
};

useFindMyUserQuery.getKey = (variables?: FindMyUserQueryVariables) =>
  variables ? ["FindMyUser", variables] : ["FindMyUser"];
