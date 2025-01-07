import * as React from "react";
import { Outlet } from "react-router-dom";

import { AppSidebar } from "@/components/templates/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export const RootLayout: React.FC = () => (
  <>
    <SidebarProvider
      style={
        {
          "--sidebar-width": "50px",
        } as React.CSSProperties
      }
    >
      <AppSidebar />

      <SidebarInset>
        <header className="sticky top-0 flex shrink-0 items-center gap-2 border-b bg-background p-4">
          CONTENT HEADER
        </header>

        <div className="flex flex-1 flex-col gap-4 p-4">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  </>
);
