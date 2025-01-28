import * as React from "react";
import { X } from "lucide-react";

import { BaseUseDrawer, useDrawer } from "@/hooks/use-drawer";
import { Button } from "@/components/ui/button";
import { ContentLayout } from "@/layout/content";

export const CustomersPage: React.FC = () => {
  const {
    showDrawer,
    handleCloseDrawer,
    handleOpenDrawer,
    handleCloseAllDrawer,
  } = useDrawer<BaseUseDrawer>(["form", "info"]);

  const { info, form } = showDrawer;

  return (
    <ContentLayout
      isOpenDrawer={info || form}
      content={
        <div className="flex flex-1 flex-col gap-4 p-4 h-full">
          <Button
            className="w-fit"
            onClick={() => {
              handleCloseAllDrawer();
              handleOpenDrawer("info");
            }}
          >
            OPEN DRAWER INFO
          </Button>

          <Button
            className="w-fit"
            variant="outline"
            onClick={() => {
              handleCloseAllDrawer();
              handleOpenDrawer("form");
            }}
          >
            OPEN DRAWER FORM
          </Button>
        </div>
      }
      aside={
        <>
          {info && (
            <>
              <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 border-b w-full justify-between p-4">
                HEADER
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7"
                  onClick={() => {
                    handleCloseDrawer("info");
                  }}
                >
                  <X />
                </Button>
              </header>

              <div className="p-4">INFO</div>
            </>
          )}

          {form && (
            <>
              <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 border-b w-full justify-between p-4">
                HEADER
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7"
                  onClick={() => {
                    handleCloseDrawer("form");
                  }}
                >
                  <X />
                </Button>
              </header>

              <div className="p-4">FORM</div>
            </>
          )}
        </>
      }
    />
  );
};
