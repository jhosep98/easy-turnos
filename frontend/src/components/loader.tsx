import * as React from "react";
import clsx from "clsx";
import { dotSpinner } from "ldrs";

import { cn } from "@/lib/utils";

dotSpinner.register();

interface LoaderModel {
  className?: string;
  isFloatCenter?: boolean;
}

export const Loader: React.FC<LoaderModel> = ({ className, isFloatCenter }) => {
  return (
    <span
      className={cn(
        "inline-block mx-auto",
        clsx(className, {
          "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2":
            isFloatCenter,
        })
      )}
    >
      <l-dot-spinner size="40" speed="0.9" color="#0486ff"></l-dot-spinner>
    </span>
  );
};
