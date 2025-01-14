import * as React from "react";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";

import { AppContext } from "./context";
import { AppContextModel } from "@/types";
import { useLocalStorage } from "@uidotdev/usehooks";
import { DEFAULT_MESSAGES } from "@/helpers/messages";
import { useLocalLang } from "@/hooks/use-local-lang";
import { FindMyUserResponse } from "@/providers/generate";
import { useFindMyUserQuery } from "@/providers/hooks/useFindMyUserQuery";
import { useLogoutUserMutation } from "@/providers/hooks/useLogoutUserMutation";

export const AppContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const queryClient = useQueryClient();
  const { lang, setLang } = useLocalLang();
  const [user, setUser] = useLocalStorage<FindMyUserResponse | null>(
    "user",
    null
  );

  const { mutateAsync: logoutMutate } = useLogoutUserMutation({
    options: {
      onSuccess: () => {
        setUser(null);
        queryClient.clear();

        document.cookie = "auth-cookie=; Max-Age=0; path=/;";

        toast.success(DEFAULT_MESSAGES.LOGOUT.SUCCESS);
      },
      onError: () => {
        toast.error(DEFAULT_MESSAGES.LOGOUT.ERROR);
      },
    },
  });

  const {
    data: verify,
    isError,
    isSuccess,
    refetch,
  } = useFindMyUserQuery(
    {
      userName: user?.userName ?? "",
    },
    {
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 60 * 10,
      retry: false,
      enabled: !!user,
    }
  );

  const logout = React.useCallback(() => {
    logoutMutate();
  }, [logoutMutate]);

  React.useEffect(() => {
    if (isSuccess && verify) {
      setUser(verify);
    }
  }, [isSuccess, verify]);

  React.useEffect(() => {
    if (isError) {
      setUser(null);
      queryClient.clear();

      toast.error(DEFAULT_MESSAGES.LOGIN.IS_NOT_VERIFIED);
    }
  }, [isError, logout]);

  React.useEffect(() => {
    if (user) {
      refetch();
    }
  }, [user, refetch]);

  const value: AppContextModel = {
    lang,
    setLang,
    user,
    setUser,
    logout,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
