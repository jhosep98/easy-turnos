import * as React from "react";

import { cn } from "@/lib/utils";
import { NavUser } from "@/components/templates/nav-user";

interface ContentLayoutModel {
  content: React.ReactNode;
  aside?: React.ReactNode;
  subHeader?: React.ReactNode;
  isOpenDrawer?: boolean;
}

export const ContentLayout: React.FC<ContentLayoutModel> = ({
  aside,
  content,
  subHeader,
  isOpenDrawer,
}) => {
  return (
    <section className="grid grid-cols-[1fr_min-content] grid-rows-[min-content_min-content_1fr]">
      <NavUser
        className={cn("bg-white", {
          "col-span-12": !isOpenDrawer,
        })}
      />

      <header
        className={cn(
          "bg-white row-start-2 flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 w-full justify-between p-4",
          {
            "col-span-12": !isOpenDrawer,
          }
        )}
      >
        {subHeader}
      </header>

      <section
        className={cn(" row-start-3", {
          "col-span-12": !isOpenDrawer,
        })}
      >
        {content}
      </section>

      {isOpenDrawer ? (
        <aside className="w-[375px] row-span-3 col-start-11 row border-l border-border">
          {aside}
        </aside>
      ) : null}
    </section>
  );
};
