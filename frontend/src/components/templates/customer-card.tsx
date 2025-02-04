import * as React from "react";

import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface UserCardModel {
  name: string;
  email: string;
  avatar: string;
  specialist?: string;
  variant?: "column" | "row";
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export const UserCard: React.FC<UserCardModel> = ({
  avatar,
  email,
  name,
  specialist,
  variant = "row",
  onClick,
}) => (
  <div
    onClick={onClick}
    className={cn(
      "flex flex-col gap-2 p-2 border border-gray-200 rounded-lg cursor-pointer active:scale-95 transition-all duration-200 ease-linear",
      {
        "p-4": variant === "column",
      }
    )}
  >
    <div
      className={cn("flex items-center justify-between space-x-4", {
        "flex-col gap-4 space-x-0 justify-center items-center":
          variant === "column",
      })}
    >
      <Avatar>
        <AvatarImage src={avatar} alt={name} />
        <AvatarFallback>{name.charAt(0)}</AvatarFallback>
      </Avatar>

      <div
        className={cn("grid flex-1 text-left text-sm leading-tight", {
          "text-center leading-normal": variant === "column",
        })}
      >
        <span className="text-sm truncate font-semibold">{name}</span>
        <span className="text-xs text-gray-400">{email}</span>
        {specialist && (
          <span className="text-xs text-gray-400 font-semibold">
            {specialist}
          </span>
        )}
      </div>
    </div>
  </div>
);
