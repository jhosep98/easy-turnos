import * as React from "react";

import { Input } from "./ui/input";
import { Label } from "./ui/label";

interface InputLabelWrapperModel {
  label: string;
  placeholder?: string;
  name?: string;
  type?: React.HTMLInputTypeAttribute;
  value?: string | number | readonly string[];
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export const InputLabelWrapper: React.FC<InputLabelWrapperModel> = ({
  label,
  name,
  placeholder,
  type,
  onChange,
  value,
}) => {
  return (
    <div className="grid w-full max-w-sm items-center gap-1">
      <Label htmlFor={name}>{label}</Label>

      <Input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="focus:outline-hidden focus:ring-0 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 border-none"
      />
    </div>
  );
};
