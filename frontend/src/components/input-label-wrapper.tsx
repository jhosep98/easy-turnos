import * as React from "react";

import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { cn } from "@/lib/utils";

interface InputLabelWrapperModel {
  label: string;
  placeholder?: string;
  name?: string;
  type?: React.HTMLInputTypeAttribute;
  value?: string | number | readonly string[];
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
}

export const InputLabelWrapper: React.FC<InputLabelWrapperModel> = ({
  label,
  name,
  placeholder,
  type,
  onChange,
  value,
  className,
}) => {
  return (
    <div className="grid w-full max-w-sm items-center pt-2">
      <Label htmlFor={name}>{label}</Label>

      <Input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={cn(
          "focus:outline-hidden focus:ring-0 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 border-none p-0 h-auto py-2",
          className
        )}
      />
    </div>
  );
};
