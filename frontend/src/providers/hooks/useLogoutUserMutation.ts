import { useMutation, UseMutationOptions } from "@tanstack/react-query";

import { easyTurnosApi } from "@/api/easy-turnos";

export const useLogoutUserMutation = <TError = unknown, TContext = unknown>({
  options,
}: {
  options?: UseMutationOptions<TError, TContext>;
}) => {
  return useMutation<TError, TContext>({
    mutationKey: ["logout"],
    mutationFn: async () => {
      const { data } = await easyTurnosApi.post("/auth/logout");

      return data;
    },
    ...options,
  });
};
