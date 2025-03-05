import * as React from "react";

import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface UserCardModel {
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
  specialist?: string;
  variant?: "column" | "row";
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export const UserCard: React.FC<UserCardModel> = ({
  avatar,
  email,
  firstName,
  lastName,
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
        <AvatarImage src={avatar} alt={`${firstName} ${lastName}`} />
        <AvatarFallback>{`${firstName.charAt(0)}${lastName.charAt(
          0
        )}`}</AvatarFallback>
      </Avatar>

      <div
        className={cn("grid flex-1 text-left text-sm leading-tight", {
          "text-center leading-normal": variant === "column",
        })}
      >
        <span className="text-sm truncate font-semibold">{`${firstName} ${lastName}`}</span>

        <span className="text-sm text-gray-400">{email}</span>

        {specialist && (
          <span className="text-sm text-gray-400 font-semibold">
            {specialist}
          </span>
        )}
      </div>
    </div>
  </div>
);
