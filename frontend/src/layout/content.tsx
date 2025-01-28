import * as React from "react";

import { NavUser } from "@/components/templates/nav-user";
import { cn } from "@/lib/utils";

interface ContentLayoutModel {
  content: React.ReactNode;
  aside?: React.ReactNode;
  isOpenDrawer?: boolean;
}

export const ContentLayout: React.FC<ContentLayoutModel> = ({
  aside,
  content,
  isOpenDrawer,
}) => {
  return (
    <section className="grid grid-cols-12 grid-rows-[min-content_1fr] h-full">
      <NavUser
        className={cn("col-span-9", {
          "col-span-12": !isOpenDrawer,
        })}
      />

      <section
        className={cn("col-span-9 row-start-2", {
          "col-span-12": !isOpenDrawer,
        })}
      >
        {content}
      </section>

      {isOpenDrawer ? (
        <aside className="col-span-3 row-span-2 col-start-10 row border-l border-border">
          {aside}
        </aside>
      ) : null}
    </section>
  );
};
