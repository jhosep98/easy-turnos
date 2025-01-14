import { useMutation, UseMutationOptions } from "@tanstack/react-query";

import { easyTurnosApi } from "@/api/easy-turnos";
import { LoginUserResponse, Maybe, MutationLoginUserArgs } from "../generate";

export type LoginUserCmsMutation = Maybe<LoginUserResponse>;

export const useLoginUserMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    LoginUserCmsMutation,
    TError,
    MutationLoginUserArgs,
    TContext
  >
) => {
  return useMutation<
    LoginUserCmsMutation,
    TError,
    MutationLoginUserArgs,
    TContext
  >({
    mutationKey: ["LoginUser"],
    mutationFn: async (variables) => {
      const { data } = await easyTurnosApi.post("/auth/login", variables.input);

      return data;
    },
    ...options,
  });
};

useLoginUserMutation.getKey = () => ["LoginUser"];
