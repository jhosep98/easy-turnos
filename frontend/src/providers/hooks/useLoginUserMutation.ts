import { useMutation, UseMutationOptions } from "@tanstack/react-query";

import { LoginUserResponse, Maybe, MutationLoginUserArgs } from "../generate";
import { easyTurnosApi } from "@/api/easy-turnos";

export interface LoginUserCmsMutation {
  loginUser?: Maybe<LoginUserResponse>;
}

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
      const response = await easyTurnosApi.post("/auth/login", variables);

      return response.data;
    },
    ...options,
  });
};

useLoginUserMutation.getKey = () => ["LoginUser"];
