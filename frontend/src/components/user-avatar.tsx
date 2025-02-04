import * as React from "react";

import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface UserAvatarModel {
  name: string;
  src: string;
  className?: string;
}

export const UserAvatar: React.FC<UserAvatarModel> = ({
  name,
  src,
  className,
}) => (
  <Avatar className={cn("h-14 w-14 rounded-full", className)}>
    <AvatarImage src={src} alt={name} />

    <AvatarFallback>{name.charAt(0)}</AvatarFallback>
  </Avatar>
);
