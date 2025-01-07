import * as React from "react";
import { Outlet } from "react-router-dom";

import { NavUser } from "@/components/templates/nav-user";
import { AppSidebar } from "@/components/templates/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

export const RootLayout: React.FC = () => (
  <SidebarProvider>
    <AppSidebar />

    <SidebarInset>
      <NavUser />

      <div className="flex flex-1 flex-col gap-4 p-4">
        <Outlet />
      </div>
    </SidebarInset>
  </SidebarProvider>
);
