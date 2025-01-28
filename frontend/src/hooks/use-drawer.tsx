import { useState } from "react";

export const useDrawer = <T extends string>(uses: T[]) => {
  const [showDrawer, setShowDrawer] = useState<Record<T, boolean>>(() => {
    let initialValues = {};

    uses.forEach((e) => {
      initialValues = {
        ...initialValues,
        [e]: false,
      };
    });
    return initialValues as Record<T, boolean>;
  });

  const handleOpenDrawer = (e: T) => {
    setShowDrawer((prev) => ({
      ...prev,
      [e]: true,
    }));
  };

  const handleCloseDrawer = (e: T) => {
    setShowDrawer((prev) => ({
      ...prev,
      [e]: false,
    }));
  };

  const handleCloseAllDrawer = () => {
    setShowDrawer((prev) => {
      let newDrawer = {};
      Object.keys(prev).forEach((e) => {
        newDrawer = {
          ...newDrawer,
          [e]: false,
        };
      });
      return newDrawer as Record<T, boolean>;
    });
  };

  return {
    showDrawer,
    handleOpenDrawer,
    handleCloseDrawer,
    handleCloseAllDrawer,
  };
};

export type BaseUseDrawer = "form" | "info";
