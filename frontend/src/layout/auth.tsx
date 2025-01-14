import * as React from "react";
import { Link } from "react-router-dom";
import { GalleryVerticalEnd } from "lucide-react";

import { PUBLIC_ROUTES } from "@/helpers/routes";
import placeholderSvg from "@/assets/placeholder.svg";

interface AuthLayoutModel {
  image?: string;
}

export const AuthLayout: React.FC<React.PropsWithChildren<AuthLayoutModel>> = ({
  children,
  image,
}) => (
  <div className="grid min-h-svh lg:grid-cols-2">
    <div className="flex flex-col gap-4 p-6 md:p-10">
      <div className="flex justify-center gap-2 md:justify-start">
        <Link
          to={PUBLIC_ROUTES.HOME}
          className="flex items-center gap-2 font-medium"
        >
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <GalleryVerticalEnd className="size-4" />
          </div>
          EasyTurnos.
        </Link>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <div className="w-full max-w-xs">{children}</div>
      </div>
    </div>

    <div className="relative hidden bg-muted lg:block">
      <img
        src={image ?? placeholderSvg}
        alt="Image"
        className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
      />
    </div>
  </div>
);
