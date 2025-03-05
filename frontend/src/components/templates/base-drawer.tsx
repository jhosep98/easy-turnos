import * as React from "react";

interface BaseDrawerTemplateModel {
  header: React.ReactNode;
  children: React.ReactNode;
}

export const BaseDrawerTemplate: React.FC<BaseDrawerTemplateModel> = ({
  children,
  header,
}) => {
  return (
    <div>
      <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 border-b w-full justify-between p-4">
        {header}
      </header>

      <div className="p-4 flex flex-col gap-4">{children}</div>
    </div>
  );
};
