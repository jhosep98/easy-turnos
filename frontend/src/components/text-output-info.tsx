import * as React from "react";

interface TextOutputInfoModel {
  label: string;
  description: string;
}

export const TextOutputInfo: React.FC<TextOutputInfoModel> = ({
  description,
  label,
}) => (
  <div className="flex flex-col items-start gap-1">
    <span className="text-sm font-medium">{label}</span>
    <span className="text-sm text-gray-400">{description}</span>
  </div>
);
