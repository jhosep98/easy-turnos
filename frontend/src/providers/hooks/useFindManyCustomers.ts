import { AxiosError } from "axios";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { easyTurnosApi } from "@/api/easy-turnos";
import { fetcher, UseQueryCustomOptions } from "../base";
import {
  Customer,
  FilterFindManyCustomerInput,
  // CustomersPaginated,
  // Maybe,
  QueryFindManyCustomersArgs,
} from "../generate";

// export interface FindManyCustomerQuery {
//   findManyVerifiedOrganizationFree?: Maybe<CustomersPaginated>;
// }

export type FindManyCustomerQuery = Array<Customer>;

export const useFindManyCustomersQuery = <
  TData = FindManyCustomerQuery,
  TError = AxiosError
>(
  variables: QueryFindManyCustomersArgs,
  options?: Omit<UseQueryCustomOptions<TData, TError>, "queryFn">
): UseQueryResult<TData, TError> => {
  // Dynamically build query parameters
  const queryParams = new URLSearchParams();

  // Iterate over the variables and append only the non-null/undefined values to the query parameters
  Object.keys(variables).forEach((key) => {
    const value = variables[key as keyof QueryFindManyCustomersArgs];

    if (value !== undefined && value !== null) {
      // Check if the key is "filters", and handle it separately to avoid appending it directly
      if (key === "filters" && value && typeof value === "object") {
        // Iterate over the filters and append them individually as separate query parameters
        Object.keys(value).forEach((filterKey) => {
          const filterValue = (value as FilterFindManyCustomerInput)[
            filterKey as keyof FilterFindManyCustomerInput
          ];
          if (filterValue !== undefined && filterValue !== null) {
            queryParams.append(`${filterKey}`, String(filterValue)); // Append filter key-value pair directly
          }
        });
      } else {
        // Append the key-value pair to the query string for other variables (not filters)
        queryParams.append(key, String(value));
      }
    }
  });

  return useQuery<TData, TError>({
    queryKey: ["FindManyCustomers", variables],
    queryFn: fetcher<TData, QueryFindManyCustomersArgs>({
      url: `/users?${queryParams.toString()}`,
      variables,
      requestClient: easyTurnosApi,
    }),
    ...options,
  });
};

useFindManyCustomersQuery.getKey = (variables?: QueryFindManyCustomersArgs) =>
  variables ? ["FindManyCustomers", variables] : ["FindManyCustomers"];
